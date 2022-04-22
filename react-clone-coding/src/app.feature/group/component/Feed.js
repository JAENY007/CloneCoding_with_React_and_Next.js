import ScreenMainPage from "../screen/ScreenMainPage";
import FilterBar from "./Feed/FilterBar";
import FooterButton from "./Feed/FooterButton";
import NoticeCard from "./Feed/NoticeCard";

const Feed = () => {
  return(
  <ScreenMainPage>
    <FilterBar />
    <NoticeCard />
    <NoticeCard />
    <FooterButton />
  </ScreenMainPage>
  );
};

export default Feed;
