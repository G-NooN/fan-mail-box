import DetailPage from "components/layout/DetailPage";

const Detail = ({ defaultAvatar, mailList, setMailList, options }) => {
  return (
    <>
      <DetailPage
        defaultAvatar={defaultAvatar}
        mailList={mailList}
        setMailList={setMailList}
        options={options}
      />
    </>
  );
};

export default Detail;
