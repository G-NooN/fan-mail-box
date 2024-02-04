import { MainPageContainer } from "components/styles/MainPageStyle";
import AddMailSection from "components/mails/AddMailSection";
import MailListSection from "components/mails/MailListSection";
import { useState } from "react";
import fakeData from "fakeData.json";

const MainPage = () => {
  const [activeArtist, setActiveArtist] = useState("방현재");
  const [mailList, setMailList] = useState(fakeData);

  return (
    <MainPageContainer>
      <AddMailSection
        activeArtist={activeArtist}
        setActiveArtist={setActiveArtist}
        setMailList={setMailList}
      />
      <MailListSection activeArtist={activeArtist} mailList={mailList} />
    </MainPageContainer>
  );
};

export default MainPage;
