const { NoMailContainer } = require("components/styles/NoMailStyle");

const NoMail = ({ activeArtist }) => {
  return (
    <NoMailContainer>{activeArtist} 님에게 전달된 팬레터가 없어요 ㅠㅠㅠㅠㅠㅠ</NoMailContainer>
  );
};

export default NoMail;
