FROM node:alpine AS base

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm i

# Copy the rest of your application code
COPY . .

# Build your app (adjust if you use a different build command)
RUN npm run build

# Production image
FROM node:alpine AS prod

WORKDIR /app

# Accept ENV_TYPE as build argument in prod stage
ARG ENV_TYPE
ENV ENV_TYPE=${ENV_TYPE}

# Copy built output and dependencies from build stage
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.output ./.output

# Set the default command (adjust as needed)
CMD ["node", ".output/server/index.mjs"]