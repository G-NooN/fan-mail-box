import { SectionTitle } from "components/styles/MainPageStyle";
import { ArtistsContainer, MaleArtist, FemaleArtist } from "components/styles/ArtistListStyle";
import { useState } from "react";

const ArtistList = () => {
  const [activeArtist, setActiveArtist] = useState("방현재");

  const onClickArtist = (event) => {
    setActiveArtist(event.target.innerText);
  };

  return (
    <>
      <SectionTitle>Our Artists</SectionTitle>
      <ArtistsContainer onClick={onClickArtist}>
        <MaleArtist $activeArtist={activeArtist}>방현재</MaleArtist>
        <FemaleArtist $activeArtist={activeArtist}>장미</FemaleArtist>
        <FemaleArtist $activeArtist={activeArtist}>장윤서</FemaleArtist>
        <MaleArtist $activeArtist={activeArtist}>최원장</MaleArtist>
        <MaleArtist $activeArtist={activeArtist}>이재상</MaleArtist>
        <MaleArtist $activeArtist={activeArtist}>윤창식</MaleArtist>
        <MaleArtist $activeArtist={activeArtist}>권혁우</MaleArtist>
        <MaleArtist $activeArtist={activeArtist}>김병연</MaleArtist>
        <FemaleArtist $activeArtist={activeArtist}>박가현</FemaleArtist>
      </ArtistsContainer>
    </>
  );
};

export default ArtistList;
