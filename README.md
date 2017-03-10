# Riveter [![Build Status](https://travis-ci.org/Subzidion/riveter.svg?branch=master)](https://travis-ci.org/Subzidion/riveter)

Riveter is an interactive browser based experience for the [Rosie Pattern Language](https://github.com/jamiejennings/rosie-pattern-language).


# Development

Riveter is still in active development. To run, clone the repository and run the docker commands below

`docker build -t "rpl-riveter" .`

`docker run --name riveter --rm -d -p 5000:5000 -v $GOPATH/src/riveter:/go/src/riveter rpl-riveter`

Edit your files and run `npm run build` locally to update on the server. Debugging the golang backend in the Docker image is a work in progress.
