FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist/hotel-administration /usr/share/nginx/html
RUN ls -la # Verifica si nginx.conf está presente
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]