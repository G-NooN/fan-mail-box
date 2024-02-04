import { Content, HeaderContainer, StrongText, Title } from "components/styles/HeaderStyle";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Title>[React_4] Fan Mail Page</Title>
        <Content>
          수많은 학생들을 <StrongText>React</StrongText> 의 세계로 이끄는 그룹{" "}
          <StrongText>[ React 4 ]</StrongText> 의 팬레터함입니다.{" "}
        </Content>
      </HeaderContainer>
    </>
  );
};

export default Header;
