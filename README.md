# rpl-webapp
Rosie Pattern Language Interactive User Experience Web App


# Development
`docker build -t "rpl-riveter" .`

`docker run --name riveter --rm -d -p 5000:5000 -v $GOPATH/src/riveter:/go/src/riveter rpl-riveter`

Edit your files locally, and run `npm run build` locally to update on the server.

