import { modelFactory } from 'effector-factorio';
import { PostFactory } from '../../../widgets/Post';

export const HomeFactory = modelFactory(() => {
  const postModel = PostFactory.createModel();

  return {
    models: {
      postModel,
    }
  }
});
