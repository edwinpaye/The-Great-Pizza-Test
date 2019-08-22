import {DefaultCrudRepository} from '@loopback/repository';
import {Topping} from '../models';
import {PizzadbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ToppingRepository extends DefaultCrudRepository<
  Topping,
  typeof Topping.prototype.topping_id
> {
  constructor(
    @inject('datasources.pizzadb') dataSource: PizzadbDataSource,
  ) {
    super(Topping, dataSource);
  }
}
