FROM golang:1.6

RUN apt-get update
RUN apt-get install --yes make
RUN apt-get install --yes gcc
RUN apt-get install --yes libreadline6-dev
RUN apt-get install --yes git

RUN git clone --recursive https://github.com/Subzidion/rosie-pattern-language.git /opt/rosie

RUN cd /opt/rosie && make clean && make linux

RUN cd /opt/rosie/ffi/librosie/ && make


#RUN go build main.go
#ENV PORT 8080
