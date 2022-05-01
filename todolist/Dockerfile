FROM node:16-alpine3.14 AS build-env

WORKDIR /app

# Copy react code
COPY . .

# Install
RUN npm install

# # Build
RUN npm run build


FROM nginx:1.21.6

# # Copy to 
# RUN mv build/* /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html/
COPY --from=build-env /app/build/. .

EXPOSE 80
