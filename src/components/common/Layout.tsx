import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: #efebf7;
`;
