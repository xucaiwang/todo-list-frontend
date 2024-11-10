# Todo List Project

## Overview

This is a simple Todo List project with a frontend built using Next.js. The project runs in a Docker environment.

## Prerequisites

- Node.js and npm
- Git
- Docker

## Running the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/todo-list.git
    cd todo-list-frontend
    ```

2. Build and run the Docker containers:
    ```bash
    docker build -t todo-list-frontend:latest .
    docker run -d -p 3000:3000 --name todo-list-frontend-container todo-list-frontend:latest
    ```