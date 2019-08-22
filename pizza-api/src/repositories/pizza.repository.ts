import {DefaultCrudRepository} from '@loopback/repository';
import {Pizza} from '../models';
import {PizzadbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PizzaRepository extends DefaultCrudRepository<
  Pizza,
  typeof Pizza.prototype.pizza_id
> {
  constructor(
    @inject('datasources.pizzadb') dataSource: PizzadbDataSource,
  ) {
    super(Pizza, dataSource);
  }
}
