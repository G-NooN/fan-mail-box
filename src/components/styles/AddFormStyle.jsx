import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 600px;
  margin: 20px 0;
  padding: 20px;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 5px;
`;

const InputLabel = styled.label`
  width: 80px;
  font-size: 16px;
  font-weight: 700;
`;

const InputField = styled.div`
  display: flex;
  align-items: center;

  & input,
  textarea {
    width: 500px;
    padding: 10px;
  }

  & input {
    height: 35px;
  }

  & textarea {
    height: 60px;
    resize: none;
  }
`;

const SelectField = styled.div`
  display: flex;
  align-items: center;

  & select {
    width: 120px;
    height: 30px;
    padding-left: 5px;
  }

  & select option {
    font-weight: 600;
  }
`;

const MaleOption = styled.option`
  color: dodgerblue;
`;

const FemaleOption = styled.option`
  color: hotpink;
`;

const ButtonField = styled.div`
  display: flex;
  justify-content: flex-end;

  & button {
    width: 100px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    background-color: powderblue;
    border: 1px solid dodgerblue;
    cursor: pointer;

    &:hover {
      background-color: lightblue;
      transform: scale(1.05);
    }
  }
`;

export { Form, InputLabel, InputField, SelectField, MaleOption, FemaleOption, ButtonField };
