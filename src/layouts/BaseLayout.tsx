import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

function BaseLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseLayout;
