import {Entity, model, property} from '@loopback/repository';

@model()
export class Pizza extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  pizza_id?: string;

  @property({
    type: 'string',
    required: true,
  })
  pizza_name: string;


  constructor(data?: Partial<Pizza>) {
    super(data);
  }
}
