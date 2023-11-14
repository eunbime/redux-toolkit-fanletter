import React, { useState } from "react";
import { data } from "../shared/data";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";
import uuid from "react-uuid";

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

function Artist() {
  const [letterList, setLetterList] = useState([]);
  const [nickName, setNickName] = useState("");
  const [contexts, setContexts] = useState("");
  const [member, setMember] = useState("");
  const [selectedMember, setSelectedMember] = useState("");

  const handleNickName = (e) => {
    setNickName(e.target.value);
  };

  const handleContexts = (e) => {
    setContexts(e.target.value);
  };

  const handleMember = (e) => {
    setMember(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickName === "" || contexts === "" || member === "")
      return alert("닉네임과 내용을 입력해주세요");

    const newLetter = {
      id: uuid(),
      nickName,
      contexts,
      member,
    };
    const newLetterList = [...letterList, newLetter];
    setLetterList(newLetterList);
    setNickName("");
    setContexts("");
    setMember("");
  };

  const selectedMemberHandler = (member) => {
    setSelectedMember(member);
  };

  return (
    <StContainer>
      <div>
        {data.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => selectedMemberHandler(item.member)}
            >
              {item.member}
            </button>
          );
        })}
      </div>
      <LetterForm
        handleNickName={handleNickName}
        handleContexts={handleContexts}
        handleMember={handleMember}
        handleSubmit={handleSubmit}
        nickName={nickName}
        contexts={contexts}
      />
      <LetterList letterList={letterList} selectedMember={selectedMember} />
    </StContainer>
  );
}

export default Artist;
