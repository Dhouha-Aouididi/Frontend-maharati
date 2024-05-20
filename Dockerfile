# Étape 1 : Builder l'application Angular
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Ajout d'un point d'entrée pour le diagnostic
RUN echo "Building the Angular project..."
RUN npm run build || { echo 'Build failed'; exit 1; }

# Étape 2 : Servir l'application avec NGINX
FROM nginx:alpine
COPY --from=build /app/dist/front-v3 /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
