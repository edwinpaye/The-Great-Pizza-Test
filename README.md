Pizza Order RestAPI
====
This is a Backend and FrontEnd project based on node.js technologies, and they are organized as follow:
Backend RestAPIs
====
1. [Loopback](https://loopback.io/)
---
FrontEnd
====
1. [Bootstrap](https://getbootstrap.com/)
2. [Reactstrap] (https://reactstrap.github.io/)
---
Requirements:
====
1. To have installed docker.
2. To have installed git
3. To installed nodejs installed min version 10.13.0 or higher
---
Steps:
====
1. Download the project
* Clone the project from GitHub
`git clone https://github.com/edwinpaye/The-Great-Pizza-Test.git`
---
2. Install and start mongodb:
* Go to the cloned directory, build docker image, and start docker container for mongodb.
```
cd The-Great-Pizza-Test/pizza-db/
sudo docker-compose build
sudo docker-compose up
```
---
3. Install and start RestAPI application:
* Go to the RestAPI project, install and start the service. 
```
cd The-Great-Pizza-Test/pizza-api/
npm i
npm start
```
* Test service, opening following link in your favorite browser.
`http://localhost:3000/explorer/`
* The list of endpoints should be listed. These lists of endpoints can be used to test the GET and POST requests and responses (similar to Postman tool).
---
4. Install and start FrontEnd application:
* Go to the RestAPI project, install and start the service. 
```
cd The-Great-Pizza-Test/pizza-ui/
npm i
npm start
```
* Test frontend service, opening following link in your favorite browser.
`http://localhost:3001/`
---
Code, Order Pizza, Eat, and Be Extremely Happy!
