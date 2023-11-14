import React, { useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import styled from "styled-components";

const StList = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;

const StLetter = styled.ul`
  width: 500px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LetterList = ({ letterList, selectedMember }) => {
  let today = new Date();

  const initialArray = [
    {
      id: uuid(),
      nickName: "name1",
      contexts: "hi",
      member: "카리나",
      time: today.toLocaleString(),
    },
    {
      id: uuid(),
      nickName: "name2",
      contexts: "hi2",
      member: "윈터",
      time: today.toLocaleString(),
    },
    {
      id: uuid(),
      nickName: "name3",
      contexts: "hi3",
      member: "지젤",
      time: today.toLocaleString(),
    },
    {
      id: uuid(),
      nickName: "name4",
      contexts: "hi4",
      member: "닝닝",
      time: today.toLocaleString(),
    },
  ];

  return (
    <StList>
      {letterList
        .filter((item) => {
          return item.member === selectedMember;
        })
        .map((item) => {
          const { id, nickName, contexts, time, member } = item;
          return (
            <Link to={`/letter/${id}`} key={id}>
              <StLetter style={{ border: "solid 1px #222" }}>
                <li>To.{member}</li>
                <li>{nickName}</li>
                <li>{time}</li>
                <li>{contexts}</li>
              </StLetter>
            </Link>
          );
        })}
    </StList>
  );
};

export default LetterList;
