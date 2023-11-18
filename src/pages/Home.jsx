import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "shared/data";

const PROFILE_PHOTO = "aespa-profile.jpeg";

const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  min-width: 550px;
`;

const ProfileImg = styled.img`
  max-width: 100%;
`;

const ProfileContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px blue;
`;

const Title = styled.h1`
  font-size: xx-large;
  font-weight: bold;
  padding: 1rem;
`;

const TeamInfo = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 2rem 1.5rem;
  margin: 2rem 0;
  border-radius: 1rem;
  font-size: large;
  font-weight: 500;
`;

const TeamSection = styled.section`
  //
`;

const InfoTitle = styled.label`
  font-weight: 700;
  font-size: 1.3rem;
`;

const InfoUl = styled.ul`
  display: flex;
  gap: 1rem;
`;

const InfoLi = styled.li`
  padding-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MemberProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: #fff;
  padding: 0.25rem;
  border-radius: 0.25rem;
`;

function Home() {
  return (
    <Container>
      <ProfileContainer>
        <Title>aespa</Title>
        <ProfileImg src={PROFILE_PHOTO} alt="" />
        <TeamInfo>
          <TeamSection>
            <InfoTitle htmlFor="">팀명</InfoTitle>
            <InfoUl>
              <InfoLi>에스파</InfoLi>
            </InfoUl>
          </TeamSection>
          <TeamSection>
            <InfoTitle htmlFor="">멤버</InfoTitle>
            <InfoUl>
              {data.map((item) => (
                <InfoLi key={item.id}>
                  <MemberProfile>
                    <img src={item.memberPhoto} alt="" width="100px" />
                    <span>{item.member}</span>
                  </MemberProfile>
                </InfoLi>
              ))}
            </InfoUl>
          </TeamSection>
          <TeamSection>
            <InfoTitle>공식 계정</InfoTitle>
            <InfoUl>
              <InfoLi>
                <Link to="https://www.youtube.com/@aespa">유튜브</Link>{" "}
                <Link to="">트위터</Link> <Link to="">홈페이지</Link>
              </InfoLi>
            </InfoUl>
          </TeamSection>
        </TeamInfo>
      </ProfileContainer>
    </Container>
  );
}

export default Home;
