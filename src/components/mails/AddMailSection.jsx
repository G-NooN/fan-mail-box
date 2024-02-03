import { SectionContainer } from "components/styles/MainPageStyle";
import ArtistList from "./ArtistList";
import AddForm from "./AddForm";

function AddMailSection({ activeArtist, setActiveArtist }) {
  return (
    <SectionContainer>
      <ArtistList activeArtist={activeArtist} setActiveArtist={setActiveArtist} />
      <AddForm />
    </SectionContainer>
  );
}

export default AddMailSection;
