import {DefaultCrudRepository} from '@loopback/repository';
import {ToppingsPizza} from '../models';
import {PizzadbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ToppingsPizzaRepository extends DefaultCrudRepository<
  ToppingsPizza,
  typeof ToppingsPizza.prototype.toppings_pizza_id
> {
  constructor(
    @inject('datasources.pizzadb') dataSource: PizzadbDataSource,
  ) {
    super(ToppingsPizza, dataSource);
  }
}
