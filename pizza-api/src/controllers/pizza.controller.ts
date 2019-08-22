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
import {Pizza} from '../models';
import {PizzaRepository} from '../repositories';

export class PizzaController {
  constructor(
    @repository(PizzaRepository)
    public pizzaRepository : PizzaRepository,
  ) {}

  @post('/pizzas', {
    responses: {
      '200': {
        description: 'Pizza model instance',
        content: {'application/json': {schema: {'x-ts-type': Pizza}}},
      },
    },
  })
  async create(@requestBody() pizza: Pizza): Promise<Pizza> {
    return await this.pizzaRepository.create(pizza);
  }

  @get('/pizzas/count', {
    responses: {
      '200': {
        description: 'Pizza model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Pizza)) where?: Where,
  ): Promise<Count> {
    return await this.pizzaRepository.count(where);
  }

  @get('/pizzas', {
    responses: {
      '200': {
        description: 'Array of Pizza model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Pizza}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pizza)) filter?: Filter,
  ): Promise<Pizza[]> {
    return await this.pizzaRepository.find(filter);
  }

  @patch('/pizzas', {
    responses: {
      '200': {
        description: 'Pizza PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() pizza: Pizza,
    @param.query.object('where', getWhereSchemaFor(Pizza)) where?: Where,
  ): Promise<Count> {
    return await this.pizzaRepository.updateAll(pizza, where);
  }

  @get('/pizzas/{id}', {
    responses: {
      '200': {
        description: 'Pizza model instance',
        content: {'application/json': {schema: {'x-ts-type': Pizza}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Pizza> {
    return await this.pizzaRepository.findById(id);
  }

  @patch('/pizzas/{id}', {
    responses: {
      '204': {
        description: 'Pizza PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() pizza: Pizza,
  ): Promise<void> {
    await this.pizzaRepository.updateById(id, pizza);
  }

  @put('/pizzas/{id}', {
    responses: {
      '204': {
        description: 'Pizza PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() pizza: Pizza,
  ): Promise<void> {
    await this.pizzaRepository.replaceById(id, pizza);
  }

  @del('/pizzas/{id}', {
    responses: {
      '204': {
        description: 'Pizza DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.pizzaRepository.deleteById(id);
  }
}
