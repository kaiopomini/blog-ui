import { Outlet } from 'react-router-dom';
import { Footer, Topbar } from '../components';

function BaseLayout() {
  return (
    <main className="content">
      <Topbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default BaseLayout;
