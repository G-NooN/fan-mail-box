import { HomeButton, PageContainer } from "components/styles/GlobalStyle";
import AddMailSection from "components/mails/AddMailSection";
import MailListSection from "components/mails/MailListSection";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CommonContext } from "context/CommonContext";
import { ActiveContext } from "context/ActiveContext";

const MainPage = () => {
  const { mailList } = useContext(CommonContext);
  const { activeArtist } = useContext(ActiveContext);
  const filteredMailList = mailList.filter((mail) => mail.writedTo === activeArtist);
  return (
    <PageContainer>
      <AddMailSection />
      <MailListSection filteredMailList={filteredMailList} />
      <Link to="/">
        <HomeButton>HOME</HomeButton>
      </Link>
    </PageContainer>
  );
};

export default MainPage;
