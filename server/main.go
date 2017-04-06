// main web server, serving files and running rosie code
package main

// #cgo LDFLAGS: ${SRCDIR}/librosie.a -lm -ldl
// #include <stdint.h>
// #include <stdarg.h>
// #include <stdlib.h>
// #include "librosie.h"
// struct rosieL_string *new_string_ptr(int len, char *buf) {
//   struct rosieL_string *cstr_ptr = malloc(sizeof(struct rosieL_string));
//   cstr_ptr->len = (uint32_t) len;
//   uint8_t *abuf = (uint8_t *)buf; /*malloc(sizeof(uint8_t)*len);*/
//   cstr_ptr->ptr = abuf;
//   return cstr_ptr;
// }
// char *to_char_ptr(uint8_t *buf) {
//   return (char *) buf;
// }
// struct rosieL_string *string_array_ref(struct rosieL_stringArray a, int index) {
//   if (index > a.n) return NULL;
//   else return a.ptr[index];
// }
// #cgo CFLAGS: -std=gnu99 -I./include
import "C"

import (
    "encoding/json"
    "os"
    "strconv"
    "net/http"
    "log"

    "github.com/gin-gonic/gin"
)

type RosieRequest struct {
    Pattern string `form:"pattern" json:"pattern" binding:"required"`
    Text    string `form:"textContent" json:"textContent" binding:"required"`
}

func structString_to_GoString(cstr C.struct_rosieL_string) string {
	return C.GoStringN(C.to_char_ptr(cstr.ptr), C.int(cstr.len))
}

func gostring_to_structStringptr(s string) *C.struct_rosieL_string {
	var cstr_ptr = C.new_string_ptr(C.int(len(s)), C.CString(s))
	return cstr_ptr
}

func CORSMiddleware() gin.HandlerFunc {
  return func(c *gin.Context) {
    c.Writer.Header().Set("Content-Type", "application/json")
    c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
    c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
    if c.Request.Method == "OPTIONS" {
      log.Println("OPTIONS")
      c.AbortWithStatus(200)
    } else {
      c.Next()
    }
  }
}

func main() {
	rosie_home := os.Getenv("ROSIE_HOME")
	if rosie_home == "" {
		log.Fatal("Environment variable ROSIE_HOME is not set.  Must be set to root of rosie directory.\n")
	}

    r := gin.Default()
    r.Use(CORSMiddleware())
    r.GET("/", func(c *gin.Context) {
      c.JSON(200, gin.H{
      })
	  })
    v1 := r.Group("/v1")
    {
        process := v1.Group("/process")
        {
            process.POST("/", processPattern)
        }
    }
    r.Run(":5000")
}

func processPattern(c *gin.Context) {
    var req RosieRequest
    var messages C.struct_rosieL_stringArray
    var rosie_string C.struct_rosieL_stringArray
    //var engine unsafe.Pointer
    if c.Bind(&req) == nil {
        home := gostring_to_structStringptr(os.Getenv("ROSIE_HOME"))
        engine, err := C.rosieL_initialize(home, &messages)
        if engine == nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error_message": "Could not create Rosie engine."})
            C.rosieL_free_stringArray(rosie_string)
            C.rosieL_free_stringArray(messages)
            C.rosieL_finalize(engine);
            return
        }

        manifest := gostring_to_structStringptr(os.Getenv("ROSIE_HOME") + "/MANIFEST")
        res, err := C.rosieL_load_manifest(engine, manifest)
        log.Print("Load Manifest return: " + structString_to_GoString(*C.string_array_ref(res, 0)))
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error_message": err})
            C.rosieL_free_stringArray(rosie_string)
            C.rosieL_free_stringArray(messages)
            C.rosieL_finalize(engine);
            return
        }

        config := gostring_to_structStringptr("{\"expression\":\"" + req.Pattern + "\", \"encode\":\"json\"}")
        rosie_string, err = C.rosieL_configure_engine(engine, config)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error_message": err})
            C.rosieL_free_stringArray(rosie_string)
            C.rosieL_free_stringArray(messages)
            C.rosieL_finalize(engine);
            return
        }
        retval := structString_to_GoString(*C.string_array_ref(rosie_string, 0))
        log.Print("Configure Engine return: " + retval)
        rosie_string, err = C.rosieL_inspect_engine(engine)
        retval = structString_to_GoString(*C.string_array_ref(rosie_string, 0))
        engine_config := structString_to_GoString(*C.string_array_ref(rosie_string, 1))
        log.Print("Inspect Engine return: " + engine_config)


        var code, js_str string
        var leftover int

        req_string := C.new_string_ptr(C.int(len(req.Text)), C.CString(req.Text))


        rosie_string, err = C.rosieL_match(engine, req_string, nil)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error_message": err})
            C.rosieL_free_stringArray(rosie_string)
            C.rosieL_free_stringArray(messages)
            C.rosieL_finalize(engine);
            return
        }

        code = structString_to_GoString(*C.string_array_ref(rosie_string, 0))
        js_str = structString_to_GoString(*C.string_array_ref(rosie_string, 1))
        leftover, err = strconv.Atoi(structString_to_GoString(*C.string_array_ref(rosie_string, 2)))
        if code != "true" {
            c.JSON(http.StatusOK, gin.H{"error": js_str})
            C.rosieL_free_stringArray(rosie_string)
            C.rosieL_free_stringArray(messages)
            C.rosieL_finalize(engine);
            return
        } else {
            var retvals map[string]map[string]interface{}
            err = json.Unmarshal([]byte(js_str), &retvals)
            if err != nil {
                c.JSON(http.StatusOK, gin.H{"error": err})
                C.rosieL_free_stringArray(rosie_string)
                C.rosieL_free_stringArray(messages)
                C.rosieL_finalize(engine);
                return
            }
           var subs string
            if retvals["*"]["subs"] != nil {
                subs = retvals["*"]["subs"].(string)
            } else {
                subs = ""
            }

            c.JSON(http.StatusOK, gin.H{
                "code": code,
                "js_str": js_str,
                "leftover": leftover,
                "retvals": retvals,
                "text": retvals["*"]["text"],
                //"pos": int(retvals["*"]["pos"].(float64)),
                "subs": subs,
            })
        }
    } else {
        c.JSON(http.StatusBadRequest, nil)
    }
    C.rosieL_free_stringArray(rosie_string)
    C.rosieL_free_stringArray(messages)
    //C.rosieL_finalize(engine);
}
