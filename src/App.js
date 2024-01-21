import DrawerContentFooterLayout from "./components/layout/DrawerContentFooterLayout";
import Footer from "./components/content/Footer";
import Profile from "./components/content/Profile";
import NavList from "./components/atoms/NavList";
import pages from "./data/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const mainPages = pages.filter((page) => page.main);

  return (
    <BrowserRouter>
      <DrawerContentFooterLayout
        drawerContents={
          [
            <Profile key='profile'/>,
            <NavList key='navlist' pages={mainPages} />
          ]}
        content={
          <Routes>
            {pages.map((page) => (
              <Route key={page.path} path={page.path} element={page.content} />
            ))}
          </Routes>
        }
        footer={<Footer />}
      />
    </BrowserRouter>

  );
}

export default App;
