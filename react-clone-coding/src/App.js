import React from "react";
import { Route, Routes } from "react-router-dom";
import BrowseAllPage from "./app.feature/group/component/BrowseAllPage";
import Header from "./app.feature/group/component/Header"
import NavBar from "./app.feature/group/component/navBar";
import MainPage from "./app.feature/group/screen/mainPage";


function App () {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/mainPage" element={<MainPage/>} />
        <Route path="/browseAllPage" element={<BrowseAllPage/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
