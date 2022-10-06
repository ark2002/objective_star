import moment from "moment";

export const celebrityReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "initialSet":
      return {
        ...state,
        celebrityList: payload.map((user) => {
          return {
            ...user,
            age: moment().diff(user.dob, "years"),
            fullName: `${user.first} ${user.last}`,
          };
        }),
      };
    case "deleteCelebrity":
      return { ...state, deleteList: [...state.deleteList, payload] };
    case "filter":
      return {
        ...state,
        celebrityList: state.celebrityList.filter(
          (user) => state.deleteList.indexOf(user) === -1
        ),
      };
    case "edit":
      return {
        ...state,
        celebrityList: state.celebrityList.map((user) =>
          user.id === payload.id ? { ...payload } : user
        ),
      };
    default:
      return state;
  }
};
