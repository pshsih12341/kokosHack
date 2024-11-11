import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;