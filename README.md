# dba homework senario
## \*\*\* This is a Pager Public Repository \*\*\*

### Senario
Mike is working on creating a new microservice. Soon, it is expected to monitor the 24 orbital planes and 53 degree inclination of five Starlink satelites. However, today it is in it's infancy and they just finished creating the connection to the database. With the principal of small iterative steps, they want to get this deployed.

### Goal
Our goal it to assess how quickly a candidate is capable to learning our technology stack.
### Setup
You will need the following tools:
- docker - You will need to be able to create a docker container and have it available in a local registy.
- kubernetes - You may use the kubernetes flavor of your choice. Minikube, Docker for Deskop allows you to enable a kubernetes cluster, etc.
- helm - There are public helm charts for postgres or mongodb that you will need to setup and run.

### Ask
1. Create a new namespace inside your cluster.
1. Create the docker container that will run in kubernetes and connection to the database
    - Application and Dockerfile are all set up. Simple create and tag the docker image.
1. Install one of the databases of your choice with helm (postgres or mongodb) inside your namespace.
    - Recommended charts:
    - https://github.com/helm/charts/tree/master/stable/postgresql
    - https://github.com/bitnami/charts/tree/master/bitnami/mongodb
1. Create a deployment with 2 replicas with the docker container and run in inside your namespace.

### Thinks we don't care about
- HA - Don't kill yourself here, a single database instance will do.
- A service would be nice to reach your pods with curl but unnecessary.

### What are we looking for in your demo
Simplicity is key. Come to impress but don't overthink it.
1. How did you tag your docker image? What are the steps doing in the Dockerfile?
1. What overrides in your values or manifest file did you choose to deploy with your database helm chart.
1. How did you create and manage your deployment?
    - Helm chart, kustomization or simple yaml is acceptable.
1. How did you configure the healthchecks on your deployment?
1. How would you allow traffic to reach your workloads (pods)?
  - Simply talk us though what you would do.
1. Was there any mis-configurations that you had to work though during this project?

### Questions?
You can reach out with questions to ![email address image](https://github.com/pagerinc/dba-homework/raw/master/email-address-image.gif)