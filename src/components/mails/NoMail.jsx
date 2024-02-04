import { ActiveContext } from "context/ActiveContext";
import { useContext } from "react";
import { NoMailContainer } from "components/styles/NoMailStyle";

const NoMail = () => {
  const { activeArtist } = useContext(ActiveContext);
  return (
    <NoMailContainer>{activeArtist} 님에게 전달된 팬레터가 없어요 ㅠㅠㅠㅠㅠㅠ</NoMailContainer>
  );
};

export default NoMail;
