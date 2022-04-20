import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Page_Home = () => {
  return (
    <StyledWrapper>
      <Link to={"#"}>
        <Button>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      </Link>
      <span>그룹</span>
      <Link to={"#"}>
        <Button>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </Button>
      </Link>
    </StyledWrapper>
  );
};

export default Page_Home;

const StyledWrapper = styled.div`
  width: 720px;
  line-height: 40px;
  margin-top: 0;
  color: #996633;
  font-weight: bold;
  background: #ffe602;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 60px 600px 60px);
`;

const Button = styled.button`
  color: #996633;
  font-size: 20px;
  text-decoration: none;
`;
