# Correr Backend usando docker

## Producción

### Build

```
docker build -t e1-arquisoft .
```

### Run

```
docker run -d \
  --name cont-e1-arquisoft \
  --env-file .env \
  -p 8080:8080 \
  e1-arquisoft
```

TODO: add nginx + docker-compose
