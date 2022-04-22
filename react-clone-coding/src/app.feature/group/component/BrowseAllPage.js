import SearchBar from "./SearchBar";
import MainPage from "../screen/MainPage";
import JoinedGroupPage from "./JoinedGroupPage";
import RecommendedGroupPage from "./RecommendedGroupPage";

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
