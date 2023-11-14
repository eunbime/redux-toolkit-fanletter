import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/letter");
        }}
      >
        To.Artist
      </button>
    </div>
  );
}

export default Home;
