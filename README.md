# Todo List 项目

## 项目介绍

这是一个简单的TodoList应用程序，旨在帮助用户管理和跟踪他们的待办事项。该项目使用了next.js来构建前端。
用户可以通过该应用程序添加、删除和标记待办事项为已完成.

## 项目结构

- README.md：本项目的说明文件
- package.json：项目依赖和脚本配置文件
- src/：源代码目录。
  - index.js：主应用程序首页。
  - TodoList.js：待办事项列表组件。

## 依赖项
要运行此项目，你需要安装以下依赖项：
- Node.js
- npm 
- Git
- Docker

## 如何运行
1. 克隆项目仓库到本地:
    ```bash
    git clone git@github.com:xucaiwang/todo-list-frontend.git
    cd todo-list-frontend
    ```
    
    ```
2. 构建Docker镜像和启动容器:
    ```bash
    docker build -t todo-list-frontend:latest .
    docker run -d -p 3000:3000 --name todo-list-frontend-container todo-list-frontend:latest
    ```