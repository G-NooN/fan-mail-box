import { SectionContainer } from "components/styles/GlobalStyle";
import ArtistList from "./ArtistList";
import AddForm from "./AddForm";

function AddMailSection({ activeArtist, setActiveArtist, setMailList }) {
  return (
    <SectionContainer>
      <ArtistList activeArtist={activeArtist} setActiveArtist={setActiveArtist} />
      <AddForm setMailList={setMailList} />
    </SectionContainer>
  );
}

export default AddMailSection;
