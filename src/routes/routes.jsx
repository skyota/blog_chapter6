import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { posts } from '../data/posts';
import Layout from "../layouts/Layout";
import TopPage from '../pages/TopPage/TopPage';
import Post from '../pages/post/Post';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<TopPage posts={posts} />} />
        <Route path="/posts/:id" element={<Post posts={posts} />} />
      </Route>
    </>
  )
);

export default routes;
