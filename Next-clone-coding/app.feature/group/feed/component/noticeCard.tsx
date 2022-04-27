import { NextPage } from 'next';
import styled from 'styled-components';
import AccountInfo from './accountInfo';
import ShortenInfo from './shortenInfo';
import NoticeText from './noticeText';
import ImportantMessage from './importantMessage';

const NoticeCard = (props) => {
  return (
    <StyledWrapper>
      <div className="ImageBox">
        <img src={props.attachedImageSrc} />
      </div>
      <div className="InfoBox">
        <AccountInfo
          accountImageSrc={props.accountImageSrc}
          userId={props.userId}
        />
        <ShortenInfo subject={props.subject} createdDate={props.createdDate} />
      </div>
      <NoticeText title={props.title} text={props.text} />
      <ImportantMessage />
    </StyledWrapper>
  );
};

export default NoticeCard;

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto 0 auto;
  padding-bottom: 10px;

  .ImageBox {
    width: 100%;
    display: flex;
    overflow: scroll;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .InfoBox {
    width: 100%;
    line-height: 40px;
    margin: 10px 0 0 0;
    vertical-align: baseline;
  }
`;
