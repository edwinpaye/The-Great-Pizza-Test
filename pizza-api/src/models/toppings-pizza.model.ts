import {Entity, model, property} from '@loopback/repository';

@model()
export class ToppingsPizza extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  toppings_pizza_id?: string;

  @property({
    type: 'string',
    required: true,
  })
  pizza_id: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  toppings_ids?: string[];


  constructor(data?: Partial<ToppingsPizza>) {
    super(data);
  }
}
