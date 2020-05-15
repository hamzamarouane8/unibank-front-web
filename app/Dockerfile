FROM nginx:1.15.2-alpine
COPY ./build /var/www
COPY ./utils/nginx.conf /etc/nginx/nginx.conf
RUN echo 'bankup:$apr1$XLbCeoxj$UENmSyhWiP9FD.EnUsDHP1' > /etc/nginx/.htpasswd
EXPOSE 8080
ENTRYPOINT ["nginx","-g","daemon off;"]
