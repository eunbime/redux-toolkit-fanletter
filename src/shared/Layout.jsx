import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  width: "100%";
  border-bottom: solid 1px #222;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StFooter = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px #222;
`;
const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: "100%";

  min-height: 90vh;
`;

function Layout({ children }) {
  return (
    <div>
      <StHeader>Header</StHeader>
      <StLayout>{children}</StLayout>
      <StFooter>Footer</StFooter>
    </div>
  );
}

export default Layout;
