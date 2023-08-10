FROM golang:1.21.0-alpine3.18

WORKDIR /usr/src/app

COPY go.mod go.sum ./

RUN go mod download && go mod verify

COPY . .

RUN go build -o main .

EXPOSE 8000

CMD ["./main"]