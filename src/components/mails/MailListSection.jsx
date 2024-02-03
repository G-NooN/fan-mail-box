import { SectionContainer, SectionTitle } from "components/styles/MainPageStyle";
import { MailListContainer } from "components/styles/MailStyle";
import fakeData from "fakeData.json";
import Mail from "./Mail";

const MailListSection = ({ activeArtist }) => {
  const filteredMailList = fakeData.filter((mail) => mail.writedTo === activeArtist);

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
