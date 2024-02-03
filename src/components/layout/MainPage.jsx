import { MainPageContainer } from "components/styles/MainPageStyle";
import AddMailSection from "components/mails/AddMailSection";
import MailListSection from "components/mails/MailListSection";

const MainPage = () => {
  return (
    <MainPageContainer>
      <AddMailSection />
      <MailListSection />
    </MainPageContainer>
  );
};

export default MainPage;
