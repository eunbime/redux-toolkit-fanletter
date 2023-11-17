import React, { useState } from "react";
import { data } from "../shared/data";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";
import uuid from "react-uuid";

const jsonData = require("../letterData.json");
let today = new Date();

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StButtonSection = styled.section`
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const StFilterMember = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  gap: 1rem;
`;

const StBox = styled.div`
  width: 7rem;
  height: 7rem;
  margin-bottom: 0.25rem;
  transform: ${(props) => (props.selected ? "scale(1.1)" : "scale(1)")};
  border-radius: 100px;
  /* border: ${(props) =>
    props.selected ? "2.5px solid transparent" : "none"}; */
  border: 2.5px solid transparent;
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
  overflow: hidden;
  box-shadow: ${(props) =>
    props.selected ? "0px 0px 10px 5px #eee" : "0px 0px 15px 1px #666"};
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
  const [memberPhoto, setMemberPhoto] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleMember = (e) => {
    const photo = data.filter((item) => item.member === e.target.value);
    setMember(e.target.value);
    setMemberPhoto(photo[0].memberPhoto);
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
      memberPhoto,
      createdAt: today.toLocaleString(),
      avatar:
        "https://i.namu.wiki/i/M0j6sykCciGaZJ8yW0CMumUigNAFS8Z-dJA9h_GKYSmqqYSQyqJq8D8xSg3qAz2htlsPQfyHZZMmAbPV-Ml9UA.webp",
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
              <img
                src={item.memberPhoto}
                alt=""
                width="120rem"
                style={{ objectFit: "cover" }}
              />
            </StBox>
            <span>{item.member}</span>
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
        setContent={setContent}
      />
    </StContainer>
  );
}

export default Letter;
