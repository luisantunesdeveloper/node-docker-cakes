node-docker-cakes
=================

Be advised, this project runs better on node 6 and beyond
---------------------------------------------------------

Start the services
------------------

`./start.sh`

and then go to http://localhost:8888/cakes

You may have to give execution permissions on the file first

`chmod u+x start.sh`

Unit tests on the cake service
------------------------------

Don't forget to change to the cake service directory and install the node dependencies. Do check the node version you are using.

`npm run test`

Integration tests on the cake service
-------------------------------------

Don't forget to change to the cake service integration tests directory and install node dependencies. Do check the node version you are using.

`npm start`

### To shutdown docker `ctrl+c`. Don't force the shutdown or you may find some troubles like ports left open.
