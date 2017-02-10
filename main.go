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
    "fmt"
    "encoding/json"
    "os"
    "strconv"
    "net/http"
    "log"
)

func structString_to_GoString(cstr C.struct_rosieL_string) string {
	return C.GoStringN(C.to_char_ptr(cstr.ptr), C.int(cstr.len))
}

func gostring_to_structStringptr(s string) *C.struct_rosieL_string {
	var cstr_ptr = C.new_string_ptr(C.int(len(s)), C.CString(s))
	return cstr_ptr
}

func print_structStringArray(cstr_array C.struct_rosieL_stringArray) {
	var n = int(cstr_array.n)
	for i:=0; i<n; i++ {
		fmt.Printf("[%d] %s\n", i, structString_to_GoString(*C.string_array_ref(cstr_array, C.int(i))));
	}
}

func main() {
	rosie_home := os.Getenv("ROSIE_HOME")
	if rosie_home == "" {
		log.Fatal("Environment variable ROSIE_HOME is not set.  Must be set to root of rosie directory.\n")
	}
    http.HandleFunc("/", handler)
    log.Fatal(http.ListenAndServe(":5000", nil))
}

func handler(w http.ResponseWriter, req *http.Request) {
	var messages C.struct_rosieL_stringArray
	home := gostring_to_structStringptr(os.Getenv("ROSIE_HOME"))
	engine, err := C.rosieL_initialize(home, &messages)
	if engine==nil {
		fmt.Fprintf(w, "Return value from initialize was NULL!")
		fmt.Fprintf(w, "Err field returned by initialize was: %s\n", err)
		fmt.Fprintf(w, "Messages returned from initialize:\n")
		print_structStringArray(messages)
        return
	}

	var a C.struct_rosieL_stringArray
	cfg := gostring_to_structStringptr("{\"expression\":\"[:digit:]+\", \"encode\":\"json\"}")
	a, err = C.rosieL_configure_engine(engine, cfg)
	retval := structString_to_GoString(*C.string_array_ref(a,0))
	fmt.Fprintf(w, "Return code from configure_engine: %s\n", retval)

	a, err = C.rosieL_inspect_engine(engine)
	retval = structString_to_GoString(*C.string_array_ref(a,0))
	fmt.Fprintf(w, "Return code from inspect_engine: %s\n", retval)
	fmt.Fprintf(w, "Config from inspect_engine: %s\n", structString_to_GoString(*C.string_array_ref(a,1)))
	C.rosieL_free_stringArray(a)

	var r C.struct_rosieL_stringArray
	var code, js_str string
	var leftover int

	var foo string = "1239999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"
    foo_string := C.new_string_ptr(C.int(len(foo)), C.CString(foo))

	r = C.rosieL_match(engine, foo_string, nil)
	code = structString_to_GoString(*C.string_array_ref(r,0))
	js_str = structString_to_GoString(*C.string_array_ref(r,1))
	leftover, err = strconv.Atoi(structString_to_GoString(*C.string_array_ref(r,2)))
	if code != "true" {
		fmt.Fprintf(w, "Error in match: %s\n", js_str)
	} else {
		fmt.Fprintf(w, "Return code from match: %s\n", code)
		fmt.Fprintf(w, "Data|false from match: %s\n", js_str)
		fmt.Fprintf(w, "Leftover chars from match: %d\n", leftover)

		var retvals map[string]map[string]interface{}
		err = json.Unmarshal([]byte(js_str), &retvals)
		if err != nil {
			fmt.Println("JSON parse error:", err)
		}
		fmt.Fprintf(w, "Match table: %s\n", retvals)
		fmt.Fprintf(w, "Text from match table: %s\n", retvals["*"]["text"])
		fmt.Fprintf(w, "Pos from match table: %d\n", int(retvals["*"]["pos"].(float64)))
		if retvals["*"]["subs"] != nil {
			fmt.Fprintf(w, "Subs from match table: %s\n", retvals["*"]["subs"].(string))
		} else {
			fmt.Fprintf(w, "No subs from match table.\n")
		}
	}
	C.rosieL_free_stringArray(r)
	C.rosieL_finalize(engine);
}
