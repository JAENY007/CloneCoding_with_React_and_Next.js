import React from "react";
import { Route, Routes } from "react-router-dom";
import BrowseAllPage from "./app.feature/group/component/BrowseAllPage";
import Feed from "./app.feature/group/component/Feed";
import Header from "./app.feature/group/component/Header"
import NavBar from "./app.feature/group/component/NavBar";
import ScreenMainPage from "./app.feature/group/screen/ScreenMainPage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/screenMainPage" element={<ScreenMainPage/>} />
        <Route path="/browseAllPage" element={<BrowseAllPage/>} />
        <Route path="/feed" element={<Feed/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
