import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ToppingsPizza} from '../models';
import {ToppingsPizzaRepository} from '../repositories';

export class ToppingsPizzaController {
  constructor(
    @repository(ToppingsPizzaRepository)
    public toppingsPizzaRepository : ToppingsPizzaRepository,
  ) {}

  @post('/toppings-pizzas', {
    responses: {
      '200': {
        description: 'ToppingsPizza model instance',
        content: {'application/json': {schema: {'x-ts-type': ToppingsPizza}}},
      },
    },
  })
  async create(@requestBody() toppingsPizza: ToppingsPizza): Promise<ToppingsPizza> {
    return await this.toppingsPizzaRepository.create(toppingsPizza);
  }

  @get('/toppings-pizzas/count', {
    responses: {
      '200': {
        description: 'ToppingsPizza model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ToppingsPizza)) where?: Where,
  ): Promise<Count> {
    return await this.toppingsPizzaRepository.count(where);
  }

  @get('/toppings-pizzas', {
    responses: {
      '200': {
        description: 'Array of ToppingsPizza model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ToppingsPizza}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ToppingsPizza)) filter?: Filter,
  ): Promise<ToppingsPizza[]> {
    return await this.toppingsPizzaRepository.find(filter);
  }

  @patch('/toppings-pizzas', {
    responses: {
      '200': {
        description: 'ToppingsPizza PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() toppingsPizza: ToppingsPizza,
    @param.query.object('where', getWhereSchemaFor(ToppingsPizza)) where?: Where,
  ): Promise<Count> {
    return await this.toppingsPizzaRepository.updateAll(toppingsPizza, where);
  }

  @get('/toppings-pizzas/{id}', {
    responses: {
      '200': {
        description: 'ToppingsPizza model instance',
        content: {'application/json': {schema: {'x-ts-type': ToppingsPizza}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<ToppingsPizza> {
    return await this.toppingsPizzaRepository.findById(id);
  }

  @patch('/toppings-pizzas/{id}', {
    responses: {
      '204': {
        description: 'ToppingsPizza PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() toppingsPizza: ToppingsPizza,
  ): Promise<void> {
    await this.toppingsPizzaRepository.updateById(id, toppingsPizza);
  }

  @put('/toppings-pizzas/{id}', {
    responses: {
      '204': {
        description: 'ToppingsPizza PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() toppingsPizza: ToppingsPizza,
  ): Promise<void> {
    await this.toppingsPizzaRepository.replaceById(id, toppingsPizza);
  }

  @del('/toppings-pizzas/{id}', {
    responses: {
      '204': {
        description: 'ToppingsPizza DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.toppingsPizzaRepository.deleteById(id);
  }
}
