import styled from "styled-components";

const MailListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const MailContainer = styled.li`
  display: flex;
  width: 600px;
  margin: 10px 0;
  padding: 10px;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const MailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  margin: 15px 5px;
`;

const MailContent = styled.p`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export { MailListContainer, MailContainer, MailInfo, MailContent };
