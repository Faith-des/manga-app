# 

docker run -it --rm manga-app-server:latest -v './server/manga/:/app/manga/'
docker container exec -it cfe1 sh

volumes 
'./config.yml:/app/config.yml'

docker container run --rm -it -v manga:/app/manga manga-app-server:latest

docker container run --rm -it -p 8081:8081 -v manga:/app/manga manga-app-server:latest

docker container run --rm -it -p 8081:8081 -v ./manga/test.jpg:/app/manga/test.jpg manga-app-server:latest

docker container run --rm -it -p 8081:8081 -v ./manga/test.jpg:/app/test.jpg manga-app-server:latest

docker container run --rm -it -v (pwd):/opt manga-app-server:latest


docker container run --rm -it -v (pwd):/opt docker.votuv.com/engineering/docker-images/public/alpine:3.11


volumes:
  - /src/docker/myapp/upload:/var/www/html/upload
  - /src/docker/myapp/upload/config.php:/var/www/html/config.php
  
  
  # 
  docker build -t manga-app-server2 -f Dockerfile2 .
  
  
```
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3.8 \
    python-pip \
    && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```