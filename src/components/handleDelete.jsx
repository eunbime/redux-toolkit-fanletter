const handleDelete = (id) => {
  const filteredList = letterList.filter((letter) => letter.id !== id);
  setLetterList(filteredList);
};

export default handleDelete;
