import { SectionTitle } from "components/styles/GlobalStyle";
import { ArtistsContainer, Artist } from "components/styles/ArtistListStyle";

const ArtistList = ({ activeArtist, setActiveArtist }) => {
  const onClickArtist = (event) => {
    if (event.target === event.currentTarget) {
      return;
    } else {
      setActiveArtist(event.target.innerText);
    }
  };

  return (
    <>
      <SectionTitle>Our Artists</SectionTitle>
      <ArtistsContainer onClick={onClickArtist}>
        <Artist $activeArtist={activeArtist}>방현재</Artist>
        <Artist $activeArtist={activeArtist}>장미</Artist>
        <Artist $activeArtist={activeArtist}>장윤서</Artist>
        <Artist $activeArtist={activeArtist}>최원장</Artist>
        <Artist $activeArtist={activeArtist}>이재상</Artist>
        <Artist $activeArtist={activeArtist}>윤창식</Artist>
        <Artist $activeArtist={activeArtist}>권혁우</Artist>
        <Artist $activeArtist={activeArtist}>김병연</Artist>
        <Artist $activeArtist={activeArtist}>박가현</Artist>
      </ArtistsContainer>
    </>
  );
};

export default ArtistList;
