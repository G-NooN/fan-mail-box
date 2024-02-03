import AddMailContainer from "components/styles/AddMailStyle";
import ArtistList from "./ArtistList";
import AddForm from "./AddForm";

function AddMail() {
  return (
    <AddMailContainer>
      <ArtistList />
      <AddForm />
    </AddMailContainer>
  );
}

export default AddMail;
