FROM mongo

COPY topping.json /topping.json

CMD mongoimport --host pizzadb_mongo_1 --db pizza --collection Topping --type json --file /topping.json --jsonArray