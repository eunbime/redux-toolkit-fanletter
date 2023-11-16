import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  padding: 1rem;
`;

const LetterBox = styled.ul`
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

const MemberProfile = styled.div`
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

const StContent = styled.li``;

const DetailLetter = ({ setLetterList, ...props }) => {
  const location = useLocation();
  const letterList = location.state.letterList;
  const { id, nickname, avatar, member, createdAt, content } =
    location.state.data;

  const handleDelete = (id) => {
    //
  };
  const handleEdit = (id) => {
    //
  };

  return (
    <Container>
      <Link to={"/letter"}>
        <BackButton>뒤로가기</BackButton>
      </Link>
      <LetterBox>
        <ProFileContainer>
          <li>
            <MemberProfile>
              <img src={avatar} alt="" width="50px" />
            </MemberProfile>
            <span>From.{nickname}</span>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <MemberProfile></MemberProfile>
            <span>To.{member}</span>
          </li>
        </ProFileContainer>
        <li>{createdAt}</li>
        <StContent>{content}</StContent>
        <ButtonSection>
          <StButton onClick={() => handleEdit(id)}>수정</StButton>
          <StButton onClick={() => handleDelete(id)}>삭제</StButton>
        </ButtonSection>
      </LetterBox>
    </Container>
  );
};

export default DetailLetter;
