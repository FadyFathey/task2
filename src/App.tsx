import React from "react";
import SideBar from "./components/sideBar/sideBar";
import Header from "./components/header/header";
import LeftSection from "./components/leftSection/leftSection";
import RightSection from "./rightSection/rightSection";

const App = () => {
  return (
    <div>
      <SideBar />
      <Header />
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default App;
