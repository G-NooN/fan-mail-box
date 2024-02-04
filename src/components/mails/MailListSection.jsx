import { SectionContainer, SectionTitle } from "components/styles/MainPageStyle";
import { MailListContainer } from "components/styles/MailStyle";
import Mail from "./Mail";

const MailListSection = ({ activeArtist, mailList }) => {
  const filteredMailList = mailList.filter((mail) => mail.writedTo === activeArtist);

  return (
    <SectionContainer>
      <SectionTitle>Mail LIST</SectionTitle>
      <MailListContainer>
        {filteredMailList.map((mail) => (
          <Mail mail={mail} />
        ))}
      </MailListContainer>
    </SectionContainer>
  );
};

export default MailListSection;
