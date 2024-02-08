import { SectionTitle } from "components/styles/GlobalStyle";
import { ArtistsContainer, Artist } from "components/styles/ArtistListStyle";
import { useDispatch, useSelector } from "react-redux";
import { setArtist } from "shared/redux/modules/activeArtist";

const ArtistList = () => {
  const artistList = [
    "방현재",
    "장미",
    "장윤서",
    "최원장",
    "이재상",
    "윤창식",
    "권혁우",
    "김병연",
    "박가현",
  ];

  const activeArtist = useSelector((state) => state.activeArtist);
  const dispatch = useDispatch();
  const onClickArtist = (event) => {
    if (event.target === event.currentTarget) return;
    dispatch(setArtist(event.target.innerText));
  };

  return (
    <>
      <SectionTitle>Our Artists</SectionTitle>
      <ArtistsContainer onClick={onClickArtist}>
        {artistList.map((artist) => (
          <Artist $activeArtist={activeArtist}>{artist}</Artist>
        ))}
      </ArtistsContainer>
    </>
  );
};

export default ArtistList;
