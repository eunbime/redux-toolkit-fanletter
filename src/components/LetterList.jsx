import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import LetterCard from "./LetterCard";
import { LetterContext } from "context/LetterContext";
import { MemberContext } from "context/MemberContext";

const LetterList = () => {
  const { letterList, setLetterList } = useContext(LetterContext);
  const { selectedMember } = useContext(MemberContext);
  const location = useLocation();
  const filteredLetters = location.state;

  const filterdDrawLetters = letterList.filter(
    (item) => item.member === selectedMember || selectedMember === ""
  );

  useEffect(() => {
    if (filteredLetters) setLetterList(filteredLetters);
  }, [filteredLetters]);

  return (
    <StList>
      {filterdDrawLetters.length === 0 ? (
        <p>
          {selectedMember}에게 남겨진 팬레터가 없습니다. <br />
          팬레터를 남겨보세요
        </p>
      ) : (
        filterdDrawLetters.map((item) => <LetterCard letter={item} />)
      )}
    </StList>
  );
};

const StList = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export default React.memo(LetterList);
