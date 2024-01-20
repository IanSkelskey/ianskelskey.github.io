import DrawerContentFooterLayout from "./components/layout/DrawerContentFooterLayout";
import { useState } from "react";
import Footer from "./components/content/Footer";
import Profile from "./components/content/Profile";
import NavList from "./components/atoms/NavList";
import pages from "./data/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);

  const mainPages = pages.filter((page) => page.main);

  return (
    <BrowserRouter>
      <DrawerContentFooterLayout
        drawerContents={
          [
            <Profile />,
            <NavList pages={mainPages} setSelectedItem={setSelectedPageIndex} selectedItem={selectedPageIndex} />
          ]}
        content={
          <Routes>
            {pages.map((page) => (
              <Route path={page.path} element={page.content} />
            ))}
          </Routes>
        }
        footer={<Footer />}
      />
    </BrowserRouter>

  );
}

export default App;
