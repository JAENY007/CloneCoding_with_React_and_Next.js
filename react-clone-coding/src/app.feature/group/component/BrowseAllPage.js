import SearchBar from "./BrowseAll/SearchBar";
import MainPage from "../screen/MainPage";
import JoinedGroupPage from "./BrowseAll/JoinedGroupPage";
import RecommendedGroupPage from "./BrowseAll/RecommendedGroupPage";

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
