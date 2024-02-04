import { SectionContainer } from "components/styles/GlobalStyle";
import ArtistList from "./ArtistList";
import AddForm from "./AddForm";

function AddMailSection() {
  return (
    <SectionContainer>
      <ArtistList />
      <AddForm />
    </SectionContainer>
  );
}

export default AddMailSection;
