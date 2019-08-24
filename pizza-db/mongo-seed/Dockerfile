FROM mongo

COPY pizza.json /pizza.json

CMD mongoimport --host pizzadb_mongo_1 --db pizza --collection Pizza --type json --file /pizza.json --jsonArray