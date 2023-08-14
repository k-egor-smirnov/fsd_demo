import React from "react";
import { modelView } from "effector-factorio";
import { HomeFactory } from "../models";
import { Post } from "../../../widgets/Post";

export const Home = modelView(HomeFactory, () => {
  const model = HomeFactory.useModel();

  return (
    <div>
      <h1>Home</h1>
      <Post model={model.models.postModel} />
    </div>
  );
});
