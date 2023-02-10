# Kong Database Scenario
## \*\*\* This is a Pager Public Repository \*\*\*

### Scenario
Sulley is working on cleaning up our Kong database. Their application monitors the 24 orbital planes and 53 degree inclination of five Starlink satelites so it's imparitive that it doesn't go down. However, the team noticed that creating routes in kong by running decK is causing degraded service. The cause is that each time decK runs, it loads in all the consumers and their tokens. By cleaning up these tables, it will allow our decK job to run successfully and our production deployment will once again receive route updates. We attempted to run some sql statements on the database but there were too many records to run successfully. The production database has 500,000+ consumers and 8m jwt tokens.

### Goal
1. Please create a SQL script that will cleanup our database.
1. The sql statements need to:
   - Remove consumers that have not logged in for the last 90 days (no jwt tokens for the last 90 days).
   - Remove jwt tokens that are more than 90 days old.
1. Note: Some of the consumers and tokens should not be deleted. These can be identified by their unique tags. Only records that are not tagged should be deleted. Make sure that all records with the `pagerinc` tag remain.

### Setup
You will need the following tools:
- kubernetes/docker - You may use the kubernetes flavor of your choice. Minikube, Docker for Deskop allows you to enable a kubernetes cluster, etc.
- helm - There are public helm charts for postgres that you will need to setup and run.

### Notes
- Helm/kubernetes is prefered. If this is a struggle, your welcome to stand it up with docker-compose or docker.
- gcp.sql - file of sql statements to run.
- pgdump.tar.gz - dump of the database.
- anonymize.sql - file for us so we can keep the records current.


### Thinks we don't care about
- HA  - Don't kill yourself here, a single database instance will do.
- If you're struggling with docker, helm or kubernetes, take this as a learning experience or simply utalize a postgres instance of your choosing.
- A service or local port would be nice to reach your pods locally but unnecessary.

### Ask
1. In this scenario, we expect you to put forth approximately 4-5 hours of work. This hopefully provides a gauge on how much effort you should expend on setup and optimization.
1. Create a new namespace inside your kubernetes cluster.
1. Stand up a postgres databases.
    - Recommended chart:
    - https://github.com/helm/charts/tree/master/stable/postgresql
1. Restore the postgres dump into the DB instance.
1. Generate sql statements in gcp.sql that delete the records.
1. Please consider some additional things if you have time like pre/post tests, etc.


### What are we looking for in your demo
Simplicity is key. Come to impress but don't overthink it.
1. How did you deploy your postgres instance?
1. What configurations did you find necessary get it working?
1. Was there any issues that you had to work though during this project?
1. What optimizations did you apply to the DB or SQL statements?
1. What portions of the database schemas did you find important?

### Questions?
You can reach out with questions to ![email address image](https://github.com/pagerinc/platform-homework/raw/master/email-address-image.gif)

### Completion
Please provide us with your optimized queries prior to your demo.
