FROM mongo

COPY toppingPizza.json /toppingPizza.json

CMD mongoimport --host pizzadb_mongo_1 --db Pizza --collection ToppingsPizza --type json --file /toppingPizza.json --jsonArray