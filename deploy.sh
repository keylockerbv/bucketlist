grunt build
aws s3 sync public/ s3://download.secrethub.io --acl "public-read"
