Build `$docker build -t itetechmadacr.azurecr.io/nux-admin .`
Run `$docker run -p 7070:80 itetechmadacr.azurecr.io/nux-admin`
Open `http://localhost:7070`
Push `$docker push itetechmadacr.azurecr.io/nux-admin:latest`

Publish first time:    
`kubectl apply -f deployment.yml`
`kubectl apply -f service.yml`
`kubectl apply -f ingress.yml`

Publish latest:
`kubectl delete -f deployment.yml`
`kubectl apply -f deployment.yml`
