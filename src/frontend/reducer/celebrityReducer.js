export const celebrityReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "initialSet":
      return { ...state, celebrityList: payload };
    case "deleteCelebrity":
      return { ...state, deleteList: [...state.deleteList, payload] };
    case "filter":
      return {
        ...state,
        celebrityList: state.celebrityList.filter(
          (user) => state.deleteList.indexOf(user) === -1
        ),
      };
    default:
      return state;
  }
};
