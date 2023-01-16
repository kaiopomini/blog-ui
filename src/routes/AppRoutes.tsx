import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from '../layouts';
import { CreatePost, Home, Post } from '../pages';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="post/create" element={<CreatePost />} />
        <Route path="post/edit/:postId" element={<CreatePost />} />
        <Route path="post/:postId" element={<Post />} />
      </Route>
      <Route path="*" element={<>Pagina não encontrada</>} />
    </Routes>
  );
}

export default AppRoutes;
