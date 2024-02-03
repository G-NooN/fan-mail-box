import MainPageContainer from "components/style/MainPageStyle";
import AddMail from "components/mail/AddMail";
import MailList from "components/mail/MailList";

const MainPage = () => {
  return (
    <MainPageContainer>
      <AddMail />
      <MailList />
    </MainPageContainer>
  );
};

export default MainPage;
