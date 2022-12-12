docker stop $(docker ps -aqf "name=SwaraNritya")
docker rm $(docker ps -aqf "name=SwaraNritya")
docker stop $(docker ps -aqf "name=zygo")
docker rm $(docker ps -aqf "name=zygo")
docker rmi 932612418290.dkr.ecr.us-east-2.amazonaws.com/xyz.web:latest 
docker-compose -f docker-compose-traefik.yml down
docker-compose -f docker-compose-traefik.yml up -d