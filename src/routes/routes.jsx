import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from "../layouts/Layout";
import TopPage from '../pages/TopPage/TopPage';
import Post from '../pages/posts/Post';
import Contact from '../pages/contact/Contact';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<TopPage />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </>
  )
);

export default routes;
