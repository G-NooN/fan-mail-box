import {
  SectionContainer,
  SectionTitle,
  ButtonField,
  Avatar,
  Nickname,
  WriterInfo,
} from "components/styles/GlobalStyle";
import {
  MailDetailContainer,
  WriterInfoSection,
  ReceiverInfoSection,
  FullMailContent,
  EditMailArea,
} from "components/styles/MailDetailStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailDetailSection = ({ defaultAvatar, mailList, setMailList, id, foundMail, options }) => {
  const navigate = useNavigate();
  const [editMail, setEditMail] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const checkEditMail = () => {
    const checkEdit = window.confirm("팬레터를 수정하시겠습니까?");
    if (checkEdit) {
      setEditMail(true);
    } else return;
  };
  const cancelEditMail = () => {
    const checkCancelEdit = window.confirm("수정을 취소하시겠습니까?");
    if (checkCancelEdit) {
      setEditMail(false);
      alert("취소되었습니다.");
    } else return;
  };
  const editMailDone = () => {
    if (!editedContent) {
      alert("수정된 내용이 없습니다.");
      return;
    } else {
      const newMailList = mailList.map((mail) => {
        if (mail.id === id.id) {
          const newMail = { ...mail, content: editedContent };
          return newMail;
        } else {
          return mail;
        }
      });
      setMailList(newMailList);
      alert("수정되었습니다.");
      setEditMail(false);
      setEditedContent("");
    }
  };
  const deleteMail = () => {
    const checkDeleteMail = window.confirm("정말 삭제하시겠습니까?");
    if (checkDeleteMail) {
      const newMailList = mailList.filter((mail) => mail.id !== id.id);
      setMailList(newMailList);
      alert("삭제되었습니다.");
      navigate("/");
    } else return;
  };
  const formattedDate = new Date(foundMail.createdAt).toLocaleDateString("ko-KR", options);
  return (
    <SectionContainer>
      <SectionTitle>Mail Detail</SectionTitle>
      <MailDetailContainer>
        <WriterInfoSection>
          <Avatar>
            <img src={foundMail.avatar || defaultAvatar} alt="avatar" />
          </Avatar>
          <WriterInfo>
            <Nickname>{foundMail.nickname}</Nickname>
            <time>{formattedDate}</time>
          </WriterInfo>
        </WriterInfoSection>
        <ReceiverInfoSection>To. {foundMail.writedTo}</ReceiverInfoSection>
        {editMail ? (
          <>
            <EditMailArea
              autoFocus
              defaultValue={foundMail.content}
              onChange={(event) => setEditedContent(event.target.value)}
            ></EditMailArea>
            <ButtonField>
              <button onClick={editMailDone}>수정완료</button>
              <button onClick={cancelEditMail}>취소</button>
            </ButtonField>
          </>
        ) : (
          <>
            <FullMailContent>{foundMail.content}</FullMailContent>
            <ButtonField>
              <button onClick={checkEditMail}>수정</button>
              <button onClick={deleteMail}>삭제</button>
            </ButtonField>
          </>
        )}
      </MailDetailContainer>
    </SectionContainer>
  );
};

export default MailDetailSection;
