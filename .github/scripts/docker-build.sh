#!/bin/sh
# use previously built image for cache if possible
docker pull $REPO:latest || true
docker pull $REPO:rolling || true
docker build . -t $REPO:${GITHUB_SHA} -t $REPO:rolling --cache-from $REPO:rolling --cache-from $REPO:latest
docker push $REPO:${GITHUB_SHA}
docker push $REPO:rolling
