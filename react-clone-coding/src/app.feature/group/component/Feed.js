import MainPage from "../screen/MainPage";
import FilterBar from "./FilterBar";
import FooterButton from "./FooterButton";
import NoticeCard from "./NoticeCard";

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
