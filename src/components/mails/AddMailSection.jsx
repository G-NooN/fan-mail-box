import AddMailContainer from "components/styles/AddMailSectionStyle";
import ArtistList from "./ArtistList";
import AddForm from "./AddForm";

function AddMailSection() {
  return (
    <AddMailContainer>
      <ArtistList />
      <AddForm />
    </AddMailContainer>
  );
}

export default AddMailSection;
