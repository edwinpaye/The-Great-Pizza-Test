FROM mongo

COPY toppingPizza.json /toppingPizza.json

CMD mongoimport --host pizzadb_mongo_1 --db pizza --collection ToppingsPizza --type json --file /toppingPizza.json --jsonArray