import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { celebrityReducer } from "../reducer/celebrityReducer";

const CelebrityContext = createContext();

const CelebrityProvider = ({ children }) => {
  const [list, dispatchList] = useReducer(celebrityReducer, {
    celebrityList: [],
  });

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("celebrities.json");
      console.log(data);
      dispatchList({ type: "initialSet", payload: data });
    })();
  }, []);

  return (
    <CelebrityContext.Provider value={{ list, dispatchList }}>
      {children}
    </CelebrityContext.Provider>
  );
};

const useCelebrity = () => useContext(CelebrityContext);

export { CelebrityProvider, useCelebrity };
