node-docker-cakes
=================

Description
-----------

The project is a proof of concept for docker, docker-compose and a micro service using node js. It has two containers, one for the micro service and another for the mysql database.

##### Be advised, this project runs better on node 6 and beyond!

Dependencies
------------

node js: https://nodejs.org/en/

docker: https://www.docker.com/

docker-compose: https://docs.docker.com/compose/install/

Start
-----

`./start.sh`

and then go to http://localhost:8888/cakes

You may have to give execution permissions on the file first

`chmod u+x start.sh`

Stop
----

`ctrl+c` to shutdown the service.

##### Don't force the shutdown or you may find some trouble like ports left open.

Unit tests
----------

Don't forget to change to the cake service directory and install the node dependencies. Do check the node version you are using.

`npm run test`

Integration tests
-----------------

Don't forget to change to the cake service integration tests directory and install node dependencies. Do check the node version you are using.

`npm start`
