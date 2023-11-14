import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "../shared/data";
import uuid from "react-uuid";

const LetterForm = ({
  handleNickName,
  handleContexts,
  handleMember,
  handleSubmit,
  nickName,
  contexts,
}) => {
  // const [letterList, setLetterList] = useState([]);
  // const [nickName, setNickName] = useState("");
  // const [contexts, setContexts] = useState("");
  // const [member, setMember] = useState("");

  // const handleNickName = (e) => {
  //   setNickName(e.target.value);
  // };

  // const handleContexts = (e) => {
  //   setContexts(e.target.value);
  // };

  // const handleMember = (e) => {
  //   setMember(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (nickName === "" || contexts === "" || member === "")
  //     return alert("닉네임과 내용을 입력해주세요");

  //   const newLetter = {
  //     id: uuid(),
  //     nickName,
  //     contexts,
  //     member,
  //   };
  //   const newLetterList = [...letterList, newLetter];
  //   setLetterList(newLetterList);
  //   setNickName("");
  //   setContexts("");
  //   setMember("");
  // };

  return (
    <>
      <form>
        <div>
          <span>닉네임</span>
          <input type="text" value={nickName} onChange={handleNickName} />
        </div>
        <div>
          <span>내용</span>
          <input type="text" value={contexts} onChange={handleContexts} />
        </div>
        <select id="member" onChange={handleMember}>
          {data.map((item) => {
            return (
              <option key={item.id} value={item.member}>
                {item.member}
              </option>
            );
          })}
        </select>
        <button onClick={handleSubmit}>등록</button>
      </form>
    </>
  );
};

export default LetterForm;
