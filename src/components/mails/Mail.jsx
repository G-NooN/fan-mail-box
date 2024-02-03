import {
  MailContainer,
  Avatar,
  MailInfo,
  WriterInfo,
  MailContent,
} from "components/styles/MailStyle";

import defaultAvatar from "assets/defaultAvatar.png";

const Mail = ({ mail }) => {
  const options = {
    hour12: false,
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDate = new Date(mail.createdAt).toLocaleDateString("ko-KR", options);

  return (
    <MailContainer>
      <Avatar>
        <img src={mail.avatar || defaultAvatar} alt="avatar" />
      </Avatar>
      <MailInfo>
        <WriterInfo>
          <p>{mail.nickname}</p>
          <time>{formattedDate}</time>
        </WriterInfo>
        <MailContent>{mail.content}</MailContent>
      </MailInfo>
    </MailContainer>
  );
};

export default Mail;
