import { SectionContainer, SectionTitle } from "components/styles/GlobalStyle";
import { MailListContainer } from "components/styles/MailStyle";
import Mail from "./Mail";
import NoMail from "./NoMail";

const MailListSection = ({ defaultAvatar, activeArtist, filteredMailList, options }) => {
  return (
    <SectionContainer>
      <SectionTitle>Mail LIST</SectionTitle>
      <MailListContainer>
        {filteredMailList.length === 0 ? (
          <NoMail activeArtist={activeArtist} />
        ) : (
          filteredMailList.map((mail) => (
            <Mail key={mail.id} mail={mail} defaultAvatar={defaultAvatar} options={options} />
          ))
        )}
      </MailListContainer>
    </SectionContainer>
  );
};

export default MailListSection;
