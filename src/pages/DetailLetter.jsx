import Avatar from "components/common/Avatar";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getFormattedDate } from "util/data";

const DetailLetter = ({ letterList }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { nickname, avatar, member, createdAt, memberPhoto, content } =
    letterList.find((letter) => letter.id === id);

  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [editedContent, setEditedContent] = useState(content);
  const [editedList, setEditedList] = useState(letterList);

  const handleDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const filteredList = letterList.filter((letter) => letter.id !== id);
      setEditedContent(filteredList);
      navigate("/letter", {
        state: [...filteredList],
      });
    }
  };

  const handleEdit = () => {
    setEditContent(editedContent);
    setEdit(true);
  };

  const handleSubmit = (id) => {
    if (!editContent) return alert("수정사항이 없습니다.");

    if (window.confirm("정말 수정하시겠습니까?")) {
      const newEditedList = letterList.map((item) => {
        return item.id === id ? { ...item, content: editContent } : item;
      });
      setEditedList(newEditedList);
      setEditedContent(editContent);
      setEdit(false);
      setEditContent("");
    } else {
      setEdit(false);
    }
  };

  const goBackHandler = () => {
    navigate("/letter", {
      state: [...editedList],
    });
  };

  return (
    <Container>
      <GoBackButton onClick={goBackHandler}>
        <span className="material-icons">arrow_back</span>
        <span>돌아가기</span>
      </GoBackButton>
      <LetterBox>
        <ProFileContainer>
          <li>
            <Profile>
              <Avatar src={avatar} size="large" />
              <img src={avatar} alt="" width="50px" />
            </Profile>
            <span>From.{nickname}</span>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Profile>
              <img src={memberPhoto} alt="member" />
            </Profile>
            <span>To.{member}</span>
          </li>
        </ProFileContainer>
        <li>{getFormattedDate(createdAt)}</li>
        {edit ? (
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            autoFocus
            defaultValue={content}
            maxLength="150"
            onChange={(e) => setEditContent(e.target.value)}
          />
        ) : (
          <StContent>{editedContent}</StContent>
        )}
        <ButtonSection>
          {edit ? (
            <>
              <StButton onClick={() => setEdit(false)}>취소</StButton>
              <StButton onClick={() => handleSubmit(id)}>완료</StButton>
            </>
          ) : (
            <>
              <StButton onClick={handleEdit}>수정</StButton>
              <StButton onClick={() => handleDelete(id)}>삭제</StButton>
            </>
          )}
        </ButtonSection>
      </LetterBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const GoBackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const LetterBox = styled.ul`
  width: 100%;
  max-width: 650px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--mainWhite);
  border-radius: 1rem;
  transition: 0.3s;
`;

const ProFileContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 0 1rem 0;
  border-bottom: solid 1px #d4d4d4;
`;

const Profile = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: gray;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0.5rem 0.2rem 0 0;
  border-top: solid 1px #d4d4d4;
`;

const StButton = styled.button`
  border: none;
  background-color: var(--aespaMain);
  color: var(--mainWhite);
  font-size: small;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  transition: 0.3s;
  &:hover {
    background-color: var(--aespa4);
  }
`;

const StContent = styled.li`
  white-space: pre-line;
  line-height: 1.5;
`;

export default DetailLetter;
