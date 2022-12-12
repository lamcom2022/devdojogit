# Introduction

This guide will walk you thru how to deploy www.xyz.com and api.xyz.com using traefik reverse proxy

```
# SSH into the aws EC2 instance
ssh -i "ec2-xyz-prd.pem" ec2-user@ec2-18-189-3-157.us-east-2.compute.amazonaws.com

# Login to ECR Repo
$(aws ecr get-login --no-include-email --region us-east-2)

# Run upgrade shell script.
sh xyz.web-upgrade.sh

```
