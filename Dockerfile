# --- Stage 1: The "Builder" ---
# Use a lightweight Node.js image to build the app
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
# This leverages Docker's layer caching.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Run the build script (this creates the /app/dist folder)
RUN npm run build

# --- Stage 2: The "Server" ---
# Use a lightweight, official Nginx image
FROM nginx:1.25-alpine

# Remove the default Nginx welcome page
RUN rm /usr/share/nginx/html/index.html

# Copy the built static files from the "builder" stage
# to the Nginx static content directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy your custom Nginx configuration
# This file will configure Nginx to work with a React SPA
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Nginx's default CMD will start the server
