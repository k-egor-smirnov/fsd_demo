import { createStore } from 'effector';
import { modelFactory } from 'effector-factorio';
import { faker } from '@faker-js/faker';

export const PostFactory = modelFactory(() => {
  const $text = createStore(faker.lorem.lines(3));

  return {
    $text,
  }
})
