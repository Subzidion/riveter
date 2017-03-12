FROM nginx
COPY riveter_nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
