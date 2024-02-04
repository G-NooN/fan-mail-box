import { SectionContainer, SectionTitle } from "components/styles/GlobalStyle";
import { MailListContainer } from "components/styles/MailStyle";
import Mail from "./Mail";
import NoMail from "./NoMail";

const MailListSection = ({ filteredMailList }) => {
  return (
    <SectionContainer>
      <SectionTitle>Mail LIST</SectionTitle>
      <MailListContainer>
        {filteredMailList.length === 0 ? (
          <NoMail />
        ) : (
          filteredMailList.map((mail) => <Mail key={mail.id} mail={mail} />)
        )}
      </MailListContainer>
    </SectionContainer>
  );
};

export default MailListSection;
