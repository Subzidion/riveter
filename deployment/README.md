`docker run --name api --rm -d rpl-riveter`

`docker run --name riveter-nginx --rm --link api:api -d -p 80:80 riveter-nginx`
