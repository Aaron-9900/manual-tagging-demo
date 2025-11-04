export $(cat config.env | xargs)
export DATADOG_API_KEY=${DD_API_KEY}
# Uncomment for staging
# export DATADOG_SITE=datad0g.com

docker compose down -v
docker compose build
docker compose up
