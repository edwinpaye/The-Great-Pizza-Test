FROM mongo

COPY topping.json /topping.json

CMD mongoimport --host pizzadb_mongo_1 --db Pizza --collection Topping --type json --file /topping.json --jsonArray