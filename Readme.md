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

CMD: docker build -t book-service:latest .

Here building an image called book-service with tag called latest

It searches for the Dockerfile in the current working directory and builds an image from that.

### Show all docker images

CMD: docker image ls
Or see all the images in Docker desktop

### Create a docker container from docker image

- We can create multiple containers from the same image with different options / environment variables necessary
- Docker containers are isolated by default. If they are exposed by ports, then they are accessible

CMD: docker run -d --name book-service book-service

Here we are starting the container in detached mode instead of the terminal. book-service is the docker container name created from book-service image

CMD: docker container ls

CMD: docker stop book-service --> to stop the container

CMD: docker rm book-service ---> to delete the container

### Access the running container with Port binding

- We need to expose a port to the running container to access the app

CMD: docker run -d -p 3000:3000 --name book-service book-service

The first 3000 is container port which is being exposed. The second port 3000 tells which app is running on. In this case it is 3000.

CMD: docker logs book-service ---> shows the logs of the app

CMD: docker exec -it book-service bash

To interact with the process inside the container in this terminal by creating a bash terminal/
O/P: this opens the bash terminal - inside the app folder (WORKDIR mentioned in Docker file)

### Running multiple containers for microservices

To manage multiple containers, we use container orchestration systems like docker compose and kubernetes

- for each service, we need images, volumes, env variables and ports
- Docker compose will create containers for services, volumes and network to communicate

Docker compose has inbuilt DNS service that resolves the service name to container IP address

CMD: docker-compose up -d --build

Build all images and create the containers and run it in detached mode

CMD: docker-compose down --> to stop all the containers

### Networks

- driver = bridge means it create a private interanal network for the containers to communicate

### Communcation between Containers with Http Requests

- Call the book service from loan service with the Http url

### Reverse Proxy - Nginx

- load balance / reverse proxy is used to direct the traffic to the appropiate microservices
- If we have multiple book-services running, we can distribute the traffic
- We can hide internal IP address / ports of these containers from the FE for security
- We can setup authentication, caching, logging in Nginx

### Pushing the docker images to DockerHub

CMD: docker login

CMD: docker build -t rambapu/book-service:v1 .

Building the image with the tag v1 and using the convention of username

CMD: docker push rambapu/book-service:v1

Do the same for loan-service. Get the images from the DockerHub instead of building the image from local.

### Deploying to a cloud server

Create a droplet (virtual VM) inside the Digital Ocean (cloud server) and install docker and docker compose in it. Then access the VM using SSH key in the terminal and copy the docker-compose and nginx.conf file to the root dir of the droplet. Once it is done, run docker-compose in the VM terminal.

We can access our data in a.b.c.d/api/books instead of localhost
