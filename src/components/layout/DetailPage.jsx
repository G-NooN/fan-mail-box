import { HomeButton, PageContainer } from "components/styles/GlobalStyle";
import ArtistPhotoSection from "components/layout/ArtistPhotoSection";
import MailDetailSection from "components/layout/MailDetailSection";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const mailList = useSelector((state) => state.mailList);
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
