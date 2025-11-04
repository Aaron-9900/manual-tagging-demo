FROM golang:1.23-alpine

WORKDIR /usr/src/app

COPY go.mod ./
RUN go mod download

COPY *.go ./

RUN go build -o client

CMD [ "/usr/src/app/client" ]
