import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { posts } from '../data/posts';
import TopPage from '../pages/TopPage';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopPage posts={posts} />} />
    </>
  )
);

export default routes;
