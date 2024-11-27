FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y curl nano vim && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install

CMD ["tail", "-f", "/dev/null"]
