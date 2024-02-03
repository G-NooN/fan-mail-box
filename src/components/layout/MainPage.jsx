import { MainPageContainer } from "components/styles/MainPageStyle";
import AddMailSection from "components/mails/AddMailSection";
import MailListSection from "components/mails/MailListSection";
import { useState } from "react";

const MainPage = () => {
  const [activeArtist, setActiveArtist] = useState("방현재");

  return (
    <MainPageContainer>
      <AddMailSection activeArtist={activeArtist} setActiveArtist={setActiveArtist} />
      <MailListSection activeArtist={activeArtist} />
    </MainPageContainer>
  );
};

export default MainPage;
