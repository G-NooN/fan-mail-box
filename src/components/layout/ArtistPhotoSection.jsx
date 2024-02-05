import { ArtistPhoto, ArtistPhotoContainer } from "components/styles/ArtistPhotoStyle";
import { SectionContainer, SectionTitle } from "components/styles/GlobalStyle";
import m_hyunjae from "assets/m_hyunjae.jpg";
import m_jangmi from "assets/m_jangmi.jpeg";
import m_yoonseo from "assets/m_yoonseo.jpg";
import t_byungyeon from "assets/t_byungyeon.jpeg";
import t_changsik from "assets/t_changsik.jpg";
import t_gahyun from "assets/t_gahyun.jpg";
import t_hyukwoo from "assets/t_hyukwoo.png";
import t_jaesang from "assets/t_jaesang.png";
import t_wonjang from "assets/t_wonjang.png";

const pickArtistPhoto = (artistName) => {
  switch (artistName) {
    case "방현재":
      return m_hyunjae;
    case "장미":
      return m_jangmi;
    case "장윤서":
      return m_yoonseo;
    case "김병연":
      return t_byungyeon;
    case "윤창식":
      return t_changsik;
    case "박가현":
      return t_gahyun;
    case "권혁우":
      return t_hyukwoo;
    case "이재상":
      return t_jaesang;
    case "최원장":
      return t_wonjang;
    default:
      return;
  }
};

const ArtistPhotoSection = ({ foundMail }) => {
  const artistPhoto = pickArtistPhoto(foundMail.writedTo);
  return (
    <SectionContainer>
      <SectionTitle>Artist {foundMail.writedTo}</SectionTitle>
      <ArtistPhotoContainer>
        <ArtistPhoto src={artistPhoto} />
      </ArtistPhotoContainer>
    </SectionContainer>
  );
};

export default ArtistPhotoSection;
