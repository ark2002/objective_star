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
      return {
        ...state,
        celebrityList: state.celebrityList.filter(
          (user) => user.id !== payload
        ),
      };
    case "edit":
      return {
        ...state,
        celebrityList: state.celebrityList.map((user) =>
          user.id === payload.id ? { ...payload } : user
        ),
      };
    case "search":
      return {
        ...state,
        FilterList: state.celebrityList.filter((user) =>
          user.fullName.toLowerCase().includes(payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};
