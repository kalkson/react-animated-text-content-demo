import { Outlet } from 'react-router';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
