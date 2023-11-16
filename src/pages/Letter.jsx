import React, { useState } from "react";
import { data } from "../shared/data";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";
import uuid from "react-uuid";

const jsonData = require("../letterData.json");
console.log(jsonData[0].member);
let today = new Date();

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StButtonSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StFilterMember = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  gap: 0.7rem;
`;

const StBox = styled.div`
  width: 6rem;
  height: 6rem;
  margin-bottom: 0.25rem;
  transform: ${(props) => (props.selected ? "scale(1.1)" : "scale(1)")};
  border-radius: 100px;
  border: ${(props) => (props.selected ? "2.5px solid transparent" : "none")};
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to right,
      var(--aespaMain) 0%,
      #44107a 29%,
      var(--aespa5) 67%,
      var(--aespa4) 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
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

function Letter() {
  const [letterList, setLetterList] = useState(jsonData);
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");
  const [selectedMember, setSelectedMember] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleMember = (e) => {
    setMember(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname === "" || content === "")
      return alert("닉네임과 내용을 입력해주세요");

    const contentsReplaceNewline = () => {
      return content.replaceAll("<br>", "\r\n");
    };

    const newLetter = {
      id: uuid(),
      nickname,
      content,
      member,
      createdAt: today.toLocaleString(),
      avatar:
        "https://i.namu.wiki/i/Zaxq-ravM_BA5eKMIZEFhP5Xx_qBeMZ9LNox_ojRpnKAXnNbySKOtzKweH58A0QUekP7XhHrGZKyrjHmolMH63HQFAi2gohNGY7_XPLXzRp6EFtLZjBaeghzjXdR7GWqfOxFxIIu2xDkbAqRKQhCNw.webp",
    };
    const newLetterList = [newLetter, ...letterList];
    setLetterList(newLetterList);
    setNickname("");
    setContent("");
  };

  const selectedMemberHandler = (member) => {
    setSelectedMember(member);
  };

  const handleModal = () => {
    setModalOpen(true);
  };

  return (
    <StContainer>
      <StButtonSection>
        {data.map((item) => (
          <StFilterMember
            key={item.id}
            onClick={() => selectedMemberHandler(item.member)}
            selected={selectedMember === item.member}
          >
            <StBox selected={selectedMember === item.member}>
              <img src="" alt="" />
            </StBox>
            {item.member}
          </StFilterMember>
        ))}
      </StButtonSection>

      {modalOpen ? (
        <LetterForm
          handleNickname={handleNickname}
          handleContent={handleContent}
          handleMember={handleMember}
          handleSubmit={handleSubmit}
          nickname={nickname}
          content={content}
          setModalOpen={setModalOpen}
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
