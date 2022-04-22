import MainPage from "../screen/MainPage";
import FilterBar from "./Feed/FilterBar";
import FooterButton from "./Feed/FooterButton";
import NoticeCard from "./Feed/NoticeCard";

const Feed = () => {
  return(
  <MainPage>
    <FilterBar />
    <NoticeCard />
    <NoticeCard />
    <FooterButton />
  </MainPage>
  );
};

export default Feed;
