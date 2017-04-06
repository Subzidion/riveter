FROM golang:1.6

RUN apt-get update
RUN apt-get install --yes libreadline6-dev
RUN apt-get install --yes git

RUN git clone --recursive https://github.com/jamiejennings/rosie-pattern-language.git /opt/rosie

WORKDIR /opt/rosie
RUN make clean && make linux

WORKDIR /opt/rosie/ffi/librosie
RUN make

ENV ROSIE_HOME /opt/rosie
ENV ROSIE_LIB /opt/rosie/ffi/librosie

RUN go get github.com/gin-gonic/gin
RUN go get github.com/itsjamie/gin-cors

RUN git clone https://github.com/Subzidion/riveter.git $GOPATH/src/riveter/

WORKDIR $GOPATH/src/riveter/client
RUN mkdir -p $GOPATH/src/riveter/server/include && \
    ln -fs $ROSIE_LIB/librosie.h $GOPATH/src/riveter/server/include/librosie.h && \
    ln -fs $ROSIE_LIB/librosie_gen.h $GOPATH/src/riveter/server/include/librosie_gen.h && \
    ln -fs $ROSIE_LIB/librosie_gen.c $GOPATH/src/riveter/server/include/librosie_gen.c && \
    ln -fs $ROSIE_LIB/librosie.a $GOPATH/src/riveter/server/librosie.a

WORKDIR $GOPATH
RUN go build riveter/server
ENTRYPOINT ./server

EXPOSE 5000
