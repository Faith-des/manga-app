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



# old dockerfile

```
ARG APP_PORT=8081

#FROM python:3.8-alpine
FROM python:3.8

WORKDIR /app

# RUN apk add --no-cache \
#     gcc \
#     musl-dev
RUN apt-get update
RUN apt-get install 'ffmpeg'\
    'libsm6'\
    'libxext6'  -y

COPY requirements.txt .

RUN pip install --no-cache-dir -Ur requirements.txt

COPY . .

COPY jap_dict/jamdict.db /root/.jamdict/data/

RUN python3 -m jamdict info

EXPOSE ${APP_PORT}

ENTRYPOINT ["python", "-m", "app"]

# RUN tesseract --version
# tesseract 4.1.1-rc2-25-g9707
#  leptonica-1.78.0
#   libgif 5.1.4 : libjpeg 8d (libjpeg-turbo 1.5.2) : libpng 1.6.34 : libtiff 4.0.9 : zlib 1.2.11 : libwebp 0.6.1 : libopenjp2 2.3.0
#  Found AVX2
#  Found AVX
#  Found FMA
#  Found SSE
#  Found libarchive 3.2.2 zlib/1.2.11 liblzma/5.2.2 bz2lib/1.0.6 liblz4/1.7.1
```