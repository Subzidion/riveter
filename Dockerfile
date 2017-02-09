FROM golang:1.6

RUN apt-get update
RUN apt-get install --yes make
RUN apt-get install --yes gcc
RUN apt-get install --yes libreadline6-dev
RUN apt-get install --yes git

RUN git clone --recursive https://github.com/Subzidion/rosie-pattern-language.git /opt/rosie

RUN cd /opt/rosie && make clean && make linux

RUN cd /opt/rosie/ffi/librosie/ && make

ENV ROSIE_HOME /opt/rosie
ENV ROSIE_LIB /opt/rosie/ffi/librosie

RUN git clone https://github.com/Subzidion/riveter.git $GOPATH/src/riveter/

RUN mkdir -p $GOPATH/src/riveter/include
RUN ln -fs $ROSIE_LIB/librosie.h $GOPATH/src/riveter/include/librosie.h
RUN ln -fs $ROSIE_LIB/librosie_gen.h $GOPATH/src/riveter/include/librosie_gen.h
RUN ln -fs $ROSIE_LIB/librosie_gen.c $GOPATH/src/riveter/include/librosie_gen.c
RUN ln -fs $ROSIE_LIB/librosie.a $GOPATH/src/riveter/librosie.a

RUN go build riveter
ENTRYPOINT echo "Running Server..." && ./riveter

EXPOSE 5000
