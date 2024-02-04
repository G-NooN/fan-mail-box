import { HomeButton, PageContainer } from "components/styles/GlobalStyle";
import ArtistPhotoSection from "components/mails/ArtistPhotoSection";
import MailDetailSection from "components/mails/MailDetailSection";
import { Link, useParams } from "react-router-dom";

const DetailPage = ({ defaultAvatar, mailList, setMailList, options }) => {
  const id = useParams();
  const foundMail = mailList.find((mail) => mail.id === id.id);
  return (
    <PageContainer>
      <ArtistPhotoSection foundMail={foundMail} />
      <MailDetailSection
        defaultAvatar={defaultAvatar}
        mailList={mailList}
        setMailList={setMailList}
        id={id}
        foundMail={foundMail}
        options={options}
      />
      <Link to="/">
        <HomeButton>HOME</HomeButton>
      </Link>
    </PageContainer>
  );
};

export default DetailPage;
