import SearchBar from "./BrowseAll/SearchBar";
import ScreenMainPage from "../screen/ScreenMainPage";
import JoinedGroupPage from "./BrowseAll/JoinedGroupPage";
import RecommendedGroupPage from "./BrowseAll/RecommendedGroupPage";

const BrowseAllPage = () => {
  return(
  <ScreenMainPage>
    <SearchBar />
    <JoinedGroupPage />
    <RecommendedGroupPage />
  </ScreenMainPage>
  );
};

export default BrowseAllPage;
