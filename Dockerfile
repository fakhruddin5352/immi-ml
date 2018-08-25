FROM nginx:alpine
LABEL maintainer='Fakhruddin Shaukat <fakhruddin.shaukat@hotmail.com>'

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/immi-ml .