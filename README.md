
# Mirola 

Mirola is a web-based collaborative drawing tool that combines spreadsheet functionalities with drawing capabilities, allowing users to create diagrams and illustrations in a grid-like interface. It enables real-time collaboration, making it ideal for brainstorming and visual planning.

# System Architecture

![Architecture](https://github.com/user-attachments/assets/f9946195-b86b-4fcb-bfb9-2ef8aafa9649)

# Installation

1. First step create a `.env.local` and add the following configuration

```bash
    CONVEX_DEPLOYMENT="CONVEX_DEV_SECRET"

    NEXT_PUBLIC_CONVEX_URL="CONVEX_DB_PUBLIC_URL"

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="CLERK_AUTH_PUBLIC_KEY"
    CLERK_SECRET_KEY="CLERK_AUTH_SECRET_KEY"

    NEXT_PUBLIC_LIVEBLOCK_SECRET_KEY="LIVEBLOCKS_PUBLIC_SECRET_KEY"

```

2. Using Docker

```bash
    docker build -t username/project .
```
```bash
    docker run -p 3000:3000 --env-file .env.local username/project
```

3. Using NPM

```bash
    npm install --legacy-peer-deps
```
```bash
    npx convex dev
```
```bash
    npm run dev
```