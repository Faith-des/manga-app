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