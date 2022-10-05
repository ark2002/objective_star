import { CelebrityList } from "../CelebrityList/CelebrityList";
import "./Main.css";

const Main = () => {
  return (
    <div className="flex__column-center main__container">
      <h1 className="main__title">Objective Stars</h1>
      <div className="flex__row-center input__container">
        <input className="input__box" placeholder="Search User" />
        <span className="material-icons input__icon">search</span>
      </div>
      <CelebrityList />
    </div>
  );
};

export { Main };
