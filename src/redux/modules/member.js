const SET_MEMBER = "member/SET_MEMBER";

export const setSelectedMember = (payload) => {
  return { type: SET_MEMBER, payload };
};

const initialState = "";

const member = (state = initialState, action) => {
  switch (action.payload) {
    case SET_MEMBER:
      const selectedMember = action.payload;
      return selectedMember;
    default:
      return state;
  }
};

export default member;
