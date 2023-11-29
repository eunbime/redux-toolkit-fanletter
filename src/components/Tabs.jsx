import React from "react";
import { data } from "shared/data";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMember } from "redux/modules/member";

const Tabs = () => {
  // 상태 가져오기
  const selectedMember = useSelector((state) => state.member);
  console.log(selectedMember);
  console.log(useSelector((state) => state));

  // 상태 변경하기
  const dispatch = useDispatch();

  const selectMemberHandler = (member) => {
    dispatch(setSelectedMember(member));
  };

  return (
    <StButtonSection>
      {data.map((item) => (
        <StFilterMember
          key={item.id}
          onClick={() => selectMemberHandler(item.member)}
          $selected={selectedMember === item.member}
        >
          <StBox $selected={selectedMember === item.member}>
            <img
              src={item.memberPhoto}
              alt=""
              width="120rem"
              style={{ objectFit: "cover" }}
            />
          </StBox>
          {item.member}
        </StFilterMember>
      ))}
    </StButtonSection>
  );
};

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

export default Tabs;
