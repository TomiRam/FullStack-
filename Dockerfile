# 1. Use an official Node.js runtime as the base image
FROM node:18-alpine AS build

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the package.json and package-lock.json (if available) for dependency installation
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the entire project into the container
COPY . .

# 6. Build the app for production
RUN npm run build

# 7. Use a lightweight Nginx image to serve the static files
FROM nginx:alpine AS production

# 8. Copy the built files from the build stage to the Nginx web directory
COPY --from=build /app/build /usr/share/nginx/html

# 9. Expose the port Nginx will serve on
EXPOSE 80

# 10. Start Nginx
CMD ["nginx", "-g", "daemon off;"]
