import MainPage from "../screen/mainPage";
import FilterBar from "./FilterBar";
import FooterButton from "./footerButton";
import NoticeCard from "./noticeCard";

const Feed = () => {
  return(
  <MainPage>
    <FilterBar/>
    <NoticeCard />
    <FooterButton />
  </MainPage>
  );
};

export default Feed;
