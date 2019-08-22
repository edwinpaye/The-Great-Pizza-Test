import {Entity, model, property} from '@loopback/repository';

@model()
export class Topping extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  topping_id?: string;

  @property({
    type: 'string',
    required: true,
  })
  topping_name: string;


  constructor(data?: Partial<Topping>) {
    super(data);
  }
}
