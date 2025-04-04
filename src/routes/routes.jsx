import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from "../layouts/Layout";
import TopPage from '../pages/TopPage/TopPage';
import Post from '../pages/posts/Post';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<TopPage />} />
        <Route path="/posts/:id" element={<Post />} />
      </Route>
    </>
  )
);

export default routes;
