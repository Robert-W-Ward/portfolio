# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app code
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable
ENV NODE_ENV=production

# Expose the port for the React app
EXPOSE 80

# Start the React app
CMD ["npm", "start"]

