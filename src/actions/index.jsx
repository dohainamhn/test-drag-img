const action = (type, data) => {
  return {
    type: type,
    payload: data || null,
  };
};

export default action;
