import MainPageContainer from "components/styles/MainPageStyle";
import AddMail from "components/mails/AddMail";
import MailList from "components/mails/MailList";

const MainPage = () => {
  return (
    <MainPageContainer>
      <AddMail />
      <MailList />
    </MainPageContainer>
  );
};

export default MainPage;
