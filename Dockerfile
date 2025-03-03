FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
RUN rm -f /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/hotel-administration/browser /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html
COPY default.template /etc/nginx/conf.d/default.template
COPY start-nginx.sh /start-nginx.sh
RUN chmod +x /start-nginx.sh
EXPOSE 80
CMD ["/start-nginx.sh"]