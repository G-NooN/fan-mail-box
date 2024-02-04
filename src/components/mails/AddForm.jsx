import { SectionTitle, ButtonField } from "components/styles/GlobalStyle";
import { Form, InputLabel, InputField, SelectField, Option } from "components/styles/AddFormStyle";
import { useRef, useState } from "react";
import { v4 as idv4 } from "uuid";

const AddForm = ({ setMailList }) => {
  const nicknameRef = useRef("");
  const contentRef = useRef("");
  const receiverRef = useRef("");

  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [receiver, setReceiver] = useState("");

  const addNewMail = (event) => {
    event.preventDefault();
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
      nicknameRef.current.focus();
      return;
    } else if (!content) {
      alert("내용을 입력해주세요.");
      contentRef.current.focus();
      return;
    } else if (!receiver) {
      alert("받는 사람을 선택해주세요.");
      receiverRef.current.focus();
    } else if (nickname.length > 20) {
      alert("닉네임은 최대 20자까지만 입력할 수 있습니다.");
      nicknameRef.current.focus();
      return;
    } else if (content.length > 100) {
      alert("내용은 최대 100자까지만 입력할 수 있습니다.");
      contentRef.current.focus();
      return;
    } else {
      const checkAddMail = window.confirm("등록하시겠습니까?");
      if (checkAddMail) {
        const newMail = {
          id: idv4(),
          nickname,
          content,
          avatar: "",
          writedTo: receiver,
          createdAt: new Date(),
        };
        setMailList((prevMailList) => [...prevMailList, newMail]);
        alert("등록되었습니다.");
        setNickname("");
        setContent("");
        setReceiver("");
      } else return;
    }
  };

  return (
    <>
      <SectionTitle>Write Your Mail</SectionTitle>
      <Form onSubmit={addNewMail}>
        <InputField>
          <InputLabel htmlFor="writerNickname">닉네임</InputLabel>
          <input
            type="text"
            id="writerNickname"
            ref={nicknameRef}
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="최대 20자까지만 작성할 수 있습니다."
          />
        </InputField>
        <InputField>
          <InputLabel htmlFor="mailContent">내용</InputLabel>
          <textarea
            id="mailContent"
            ref={contentRef}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="최대 100자까지만 작성할 수 있습니다."
          />
        </InputField>
        <SelectField>
          <InputLabel htmlFor="receiver">받는 사람</InputLabel>
          <select
            id="receiver"
            ref={receiverRef}
            value={receiver}
            onChange={(event) => setReceiver(event.target.value)}
          >
            <option value={""}>선택</option>
            <hr />
            <optgroup label="매니저 (Manager)">
              <Option value="방현재">방현재</Option>
              <Option value="장미">장미</Option>
              <Option value="장윤서">장윤서</Option>
            </optgroup>
            <optgroup label="튜터 (Tutor)">
              <Option value="최원장">최원장</Option>
              <Option value="이재상">이재상</Option>
              <Option value="윤창식">윤창식</Option>
              <Option value="권혁우">권혁우</Option>
              <Option value="김병연">김병연</Option>
              <Option value="박가현">박가현</Option>
            </optgroup>
          </select>
        </SelectField>
        <ButtonField>
          <button type="submit">등록</button>
        </ButtonField>
      </Form>
    </>
  );
};

export default AddForm;
