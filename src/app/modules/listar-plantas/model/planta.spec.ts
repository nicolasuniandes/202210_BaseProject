import { Planta } from './planta';
import { faker } from '@faker-js/faker';

describe('Planta', () => {
  it('should create an instance', () => {

    expect(new Planta(
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(10)
    )).toBeTruthy();
  });
});
