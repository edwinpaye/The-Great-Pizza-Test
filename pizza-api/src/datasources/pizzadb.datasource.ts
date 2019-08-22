import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './pizzadb.datasource.json';

export class PizzadbDataSource extends juggler.DataSource {
  static dataSourceName = 'pizzadb';

  constructor(
    @inject('datasources.config.pizzadb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
