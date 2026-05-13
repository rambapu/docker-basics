# Docker

- What is Docker
- Docker vs VMs
- Docker image vs registry vs container

### Persistent volume

- Persistent volume is a static file that lives on the host that the container will read every time it starts to get the saved / persisted data
- It is responsible to persist data when the container is deleted / restarted

### Build docker image

- Docker images are immutable
- Docker images are blueprints for containers
- It has the instructions to run the application

docker build -t book-service:latest .

Here building an image called book-service with tag called latest

It searches for the Dockerfile in the current working directory and builds an image from that.

### Show all docker images

docker image ls
Or see all the images in Docker desktop

### Create a docker container from docker image

- We can create multiple containers from the same image with different options / environment variables necessary
-
