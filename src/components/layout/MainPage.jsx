import { PageContainer } from "components/styles/GlobalStyle";
import AddMailSection from "components/mails/AddMailSection";
import MailListSection from "components/mails/MailListSection";
import { useState } from "react";
import fakeData from "fakeData.json";

const MainPage = () => {
  const [activeArtist, setActiveArtist] = useState("방현재");
  const [mailList, setMailList] = useState(fakeData);

  return (
    <PageContainer>
      <AddMailSection
        activeArtist={activeArtist}
        setActiveArtist={setActiveArtist}
        setMailList={setMailList}
      />
      <MailListSection activeArtist={activeArtist} mailList={mailList} />
    </PageContainer>
  );
};

export default MainPage;
