FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/web /usr/share/nginx/html/web
COPY --from=build /app/public /usr/share/nginx/html/public

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
