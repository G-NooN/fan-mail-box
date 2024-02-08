import { PageContainer } from "components/styles/GlobalStyle";
import AddMailSection from "components/layout/AddMailSection";
import MailListSection from "components/layout/MailListSection";
import { useSelector } from "react-redux";

const MainPage = () => {
  const mailList = useSelector((state) => state.mailList);
  const activeArtist = useSelector((state) => state.activeArtist);
  const filteredMailList = mailList.filter((mail) => mail.writedTo === activeArtist);
  return (
    <PageContainer>
      <AddMailSection />
      <MailListSection filteredMailList={filteredMailList} />
    </PageContainer>
  );
};

export default MainPage;
