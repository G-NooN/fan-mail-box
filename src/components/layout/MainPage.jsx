import { HomeButton, PageContainer } from "components/styles/GlobalStyle";
import AddMailSection from "components/mails/AddMailSection";
import MailListSection from "components/mails/MailListSection";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainPage = ({ defaultAvatar, mailList, setMailList, options }) => {
  const [activeArtist, setActiveArtist] = useState("방현재");
  const filteredMailList = mailList.filter((mail) => mail.writedTo === activeArtist);
  return (
    <PageContainer>
      <AddMailSection
        activeArtist={activeArtist}
        setActiveArtist={setActiveArtist}
        setMailList={setMailList}
      />
      <MailListSection
        defaultAvatar={defaultAvatar}
        activeArtist={activeArtist}
        filteredMailList={filteredMailList}
        options={options}
      />
      <Link to="/">
        <HomeButton>HOME</HomeButton>
      </Link>
    </PageContainer>
  );
};

export default MainPage;
