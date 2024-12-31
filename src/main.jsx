import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import Talks from './pages/Talks';
import TalkDetail from './pages/TalkDetail';

const router = createBrowserRouter([
  { path: '/', element: <App /> }, // Home Page
  { path: '/blogs', element: <Blog /> }, // Blog Listing
  { path: '/blogs/:slug', element: <BlogPost /> }, // Blog Post
  { path: '/talks', element: <Talks /> }, // Blog Listing
  { path: '/talks/:slug', element: <TalkDetail /> }, // Blog Post
  { path: '*', element: <h1>404 - Page Not Found</h1> }, // 404 Route
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);