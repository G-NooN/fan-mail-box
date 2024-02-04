import { Avatar, Nickname, WriterInfo } from "components/styles/GlobalStyle";
import { MailContainer, MailInfo, MailContent } from "components/styles/MailStyle";
import { useNavigate } from "react-router-dom";

const Mail = ({ mail, defaultAvatar, options }) => {
  const formattedDate = new Date(mail.createdAt).toLocaleDateString("ko-KR", options);

  const navigate = useNavigate();

  return (
    <MailContainer onClick={() => navigate(`/detail/${mail.id}`)}>
      <Avatar>
        <img src={mail.avatar || defaultAvatar} alt="avatar" />
      </Avatar>
      <MailInfo>
        <WriterInfo>
          <Nickname>{mail.nickname}</Nickname>
          <time>{formattedDate}</time>
        </WriterInfo>
        <MailContent>{mail.content}</MailContent>
      </MailInfo>
    </MailContainer>
  );
};

export default Mail;
