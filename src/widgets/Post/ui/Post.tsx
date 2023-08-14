import React from 'react';
import { modelView } from "effector-factorio";
import { PostFactory } from "../models";
import { useUnit } from "effector-react";

export const Post = modelView(PostFactory, () => {
  const model = useUnit(PostFactory);

  return (
    <div>
      <h3>Post</h3>
      <p>{model.text}</p>
    </div>
  );
});
