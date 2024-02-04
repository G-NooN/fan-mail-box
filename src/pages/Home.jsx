import MainPage from "components/layout/MainPage";

const Home = ({ defaultAvatar, mailList, setMailList, options }) => {
  return (
    <>
      <MainPage
        defaultAvatar={defaultAvatar}
        mailList={mailList}
        setMailList={setMailList}
        options={options}
      />
    </>
  );
};

export default Home;
