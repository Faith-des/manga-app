# docker build -t manga-app-server2 -f Dockerfile2 .
# docker run -it --rm manga-app-server2:latest
FROM ubuntu:18.04

# TESSERACT
ENV PYTHONUNBUFFERED 1
ENV PYTHONIOENCODING=utf8
RUN apt-get update && apt-get install -y software-properties-common && add-apt-repository -y ppa:alex-p/tesseract-ocr
RUN apt-get update && apt-get install -y tesseract-ocr-all
# RUN apt-get update && apt-get install -y tesseract-ocr-jpn tesseract-ocr-jpn-vert
# RUN apt-get update && apt-get install -y tesseract-ocr-jpn-vert

# OPENCV, Python3, Pip
RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y \
        python3-pip \
        python3-opencv \
        python3-scipy \
        python3-matplotlib \
    && ln -sf /usr/share/zoneinfo/Europe/Berlin /etc/localtime \
    && dpkg-reconfigure --frontend noninteractive tzdata \
    && rm -rf /var/lib/apt/lists/*

# debuging:
# python3
# import cv2

WORKDIR /app

COPY requirements.txt .

RUN pip3 install scikit-build
RUN pip3 install --upgrade pip

RUN pip3 install --no-cache-dir -Ur requirements.txt

COPY . .

EXPOSE 8081

ENTRYPOINT ["python3", "-m", "app"]