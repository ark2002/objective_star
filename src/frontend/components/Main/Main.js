import { useEffect, useState } from "react";
import { useCelebrity } from "../../context/CelebrityContext";
import { CelebrityList } from "../CelebrityList/CelebrityList";
import "./Main.css";

const Main = () => {
  const {
    list: { celebrityList },
  } = useCelebrity();

  const [filteredList, setFilteredList] = useState([...celebrityList]);
  const [search, setSearch] = useState("");

  useEffect(
    () =>
      setFilteredList(
        celebrityList.filter((user) =>
          user.fullName.toLowerCase().includes(search.toLowerCase())
        )
      ),
    [celebrityList, search]
  );

  return (
    <div className="flex__column-center main__container">
      <h1 className="main__title">Objective Stars</h1>
      <div className="flex__row-center input__container">
        <input
          className="input__box"
          placeholder="Search User"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="material-icons input__icon">search</span>
      </div>
      <CelebrityList filteredList={filteredList} />
    </div>
  );
};

export { Main };
