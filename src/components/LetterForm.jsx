import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "../shared/data";

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 650px;
  margin: 0 auto;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: var(--aespa3);
`;

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
`;

const StLabel = styled.label`
  padding: 0.5rem 0;
`;

const StInput = styled.input.attrs({
  required: true,
  maxLength: 20,
  placeholder: "20자 이내로 작성해주세요",
})`
  width: 25rem;
  font-size: small;
  padding: 0.25rem;
`;

const StTextArea = styled.textarea.attrs({
  required: true,
  maxLength: 150,
  placeholder: "150자 이내로 작성해주세요.",
})`
  height: 10rem;
  padding: 0.25rem;
  /* 줄바꿈 적용 처리 */
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5rem;
  margin-top: 1rem;
`;

const StButton = styled.button`
  border: none;
  font-size: medium;
  padding: 0.25rem 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    background-color: var(--aespa3);
    border: solid 1px var(--mainWhite);
  }
`;

const LetterForm = ({
  handleNickname,
  handleContent,
  handleMember,
  handleSubmit,
  nickname,
  content,
  setModalOpen,
}) => {
  const [selected, setSelected] = useState("카리나");

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <StForm onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <StSection>
            <StLabel>닉네임</StLabel>
            <StInput type="text" value={nickname} onChange={handleNickname} />
          </StSection>
          <StSection>
            <StLabel>내용</StLabel>
            <StTextArea type="text" value={content} onChange={handleContent} />
          </StSection>
          <StSection>
            <StLabel>아티스트를 선택해주세요.</StLabel>
            <select id="member" onChange={handleMember}>
              {data.map((item) => (
                <option key={item.id} value={item.member}>
                  {item.member}
                </option>
              ))}
            </select>
          </StSection>
        </div>
        <ButtonSection>
          <StButton type="submit">등록</StButton>
          <StButton onClick={closeModal}>닫기</StButton>
        </ButtonSection>
      </StForm>
    </div>
  );
};

export default LetterForm;
