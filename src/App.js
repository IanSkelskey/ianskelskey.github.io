import DrawerContentFooterLayout from "./components/layout/DrawerContentFooterLayout";
import { useState } from "react";
import Footer from "./components/content/Footer";
import Profile from "./components/sections/Profile";
import NavList from "./components/atoms/NavList";
import pages from "./components/data/pages";

function App() {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);

  return (
    <DrawerContentFooterLayout
      drawerContents={
        [
          <Profile />,
          <NavList pages={pages} setSelectedItem={setSelectedPageIndex} selectedItem={selectedPageIndex} />
        ]}
      content={pages[selectedPageIndex].content}
      footer={<Footer />}
    />
  );
}

export default App;
