import ScreenMainPage from "../screen/ScreenMainPage";
import FilterBar from "./Feed/FilterBar";
import FooterButton from "./Feed/FooterButton";
import NoticeCard from "./Feed/NoticeCard";

const Feed = () => {

  const ImageSrcAddress = [
    {
      id: 1,
      ImageSrcAddress: "http://placeimg.com/720/540/tech"
    },
    {
      id: 2,
      ImageSrcAddress: "http://placeimg.com/720/540/any"
    }
  ]

  return(
  <ScreenMainPage>
    <FilterBar />
    <NoticeCard ImageSrc={ImageSrcAddress[0].ImageSrcAddress} />
    <NoticeCard ImageSrc={ImageSrcAddress[1].ImageSrcAddress} />
    <FooterButton />
  </ScreenMainPage>
  );
};

export default Feed;
