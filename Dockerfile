FROM nginx:alpine

COPY .vitepress/dist/ /usr/share/nginx/html/

COPY nginx/default.conf /etc/nginx/conf.d/default.conf