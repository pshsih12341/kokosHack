#!/bin/sh

if [ ! -d ./certs ]; then
  mkdir certs
fi

mkcert localhost 127.0.0.1

mkcert -install

mv localhost+1.pem ./certs/local.pem

mv localhost+1-key.pem ./certs/local-key.pem