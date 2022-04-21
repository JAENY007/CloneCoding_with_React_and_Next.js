import SearchBar from "./searchBar";
import MainPage from "../screen/mainPage";
import JoinedGroupPage from "./joinedGroupPage";
import RecommendedGroupPage from "./recommendedGroupPage";

const BrowseAllPage = () => {
  return(
  <MainPage>
    <SearchBar />
    <JoinedGroupPage />
    <RecommendedGroupPage />
  </MainPage>
  );
};

export default BrowseAllPage;
