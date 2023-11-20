import React, { useCallback, useState } from "react";
import { data } from "../shared/data";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled, { css } from "styled-components";
import uuid from "react-uuid";
import Tabs from "components/Tabs";

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 650px;
  height: 3rem;
  border-radius: 2rem;
  background-color: var(--mainWhite);
  font-size: medium;
  color: #666;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #eee;
  }
`;

function Letter({ letterList, setLetterList }) {
  const [selectedMember, setSelectedMember] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(true);
  };

  return (
    <StContainer>
      <Tabs
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />

      {modalOpen ? (
        <LetterForm
          letterList={letterList}
          setLetterList={setLetterList}
          setModalOpen={setModalOpen}
          setSelectedMember={setSelectedMember}
        />
      ) : (
        <InputBox onClick={handleModal}>
          아티스트를 위한 팬레터를 작성해주세요!
        </InputBox>
      )}

      <LetterList
        letterList={letterList}
        selectedMember={selectedMember}
        setLetterList={setLetterList}
      />
    </StContainer>
  );
}

export default Letter;
