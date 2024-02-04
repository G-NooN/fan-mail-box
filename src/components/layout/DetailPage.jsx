import { HomeButton, PageContainer } from "components/styles/GlobalStyle";
import ArtistPhotoSection from "components/mails/ArtistPhotoSection";
import MailDetailSection from "components/mails/MailDetailSection";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CommonContext } from "context/CommonContext";

const DetailPage = () => {
  const { mailList } = useContext(CommonContext);
  const id = useParams().id;
  const foundMail = mailList.find((mail) => mail.id === id);
  return (
    <PageContainer>
      <ArtistPhotoSection foundMail={foundMail} />
      <MailDetailSection id={id} foundMail={foundMail} />
      <Link to="/">
        <HomeButton>HOME</HomeButton>
      </Link>
    </PageContainer>
  );
};

export default DetailPage;
