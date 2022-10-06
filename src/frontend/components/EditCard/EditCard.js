import { useState } from "react";
import toast from "react-hot-toast";
import { useCelebrity } from "../../context/CelebrityContext";
import "./EditCard.css";

const EditCard = ({ star, setEdit }) => {
  const { dispatchList } = useCelebrity();
  const [userDetails, setUserDetails] = useState({ ...star });
  const { fullName, picture, gender, age, country, description } = userDetails;

  const inputChange = (e, type) => {
    switch (type) {
      case "age":
        setUserDetails({
          ...userDetails,
          age: e.target.value.replace(/\D/g, ""),
        });
        break;
      case "name":
        setUserDetails({
          ...userDetails,
          fullName: e.target.value.replace(/[^a-z/ s]/gi, ""),
        });
        break;
      case "country":
        setUserDetails({
          ...userDetails,
          country: e.target.value.replace(/[^a-z/ s]/gi, ""),
        });
        break;
      case "description":
        setUserDetails({
          ...userDetails,
          description: e.target.value,
        });
        break;
      default:
        setUserDetails(userDetails);
    }
  };

  const editHandler = () => {
    if (
      fullName.length > 0 &&
      `${age}`.length > 0 &&
      age > 18 &&
      country.length > 0 &&
      description.length > 0
    ) {
      dispatchList({ type: "edit", payload: userDetails });
      setEdit(false);
    } else toast.error("All inputs should be valid");
  };
  return (
    <div className="flex__column-center user-expanded__container">
      <div className="flex__row-center user__top-disabled">
        <img className="user__img" src={picture} alt={fullName} />
        <input
          value={fullName}
          className="user__name-input"
          maxLength="20"
          onChange={(e) => inputChange(e, "name")}
        />
        <span className="material-icons collapse__icon-disabled">
          expand_less
        </span>
      </div>
      <div className="flex__row-center user__middle">
        <div className="flex__column">
          <p className="user__label">Age</p>
          <input
            className="user__details-input"
            value={age}
            maxLength="2"
            onChange={(e) => inputChange(e, "age")}
          />
        </div>
        <div className="flex__column">
          <p className="user__label">Gender</p>
          <select
            className="user__details-input"
            value={gender}
            onChange={(e) =>
              setUserDetails({ ...userDetails, gender: e.target.value })
            }
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="transgender">transgender</option>
            <option value="rather not say">rather not say</option>
            <option value="others">others</option>
          </select>
        </div>
        <div className="flex__column">
          <p className="user__label">Country</p>
          <input
            className="user__details-input"
            value={country}
            type="text"
            onChange={(e) => inputChange(e, "country")}
          />
        </div>
      </div>
      <div className="flex__column user__bottom">
        <p className="user__label">Description</p>
        <textarea
          className="user__description-input"
          value={description}
          onChange={(e) => inputChange(e, "description")}
          maxLength="300"
        />
      </div>
      <div className="flex__row-center user__options">
        <span
          className="material-icons delete__icon"
          onClick={() => {
            setEdit(false);
            setUserDetails({ ...star });
          }}
        >
          cancel
        </span>
        <span
          className={`material-icons ${
            JSON.stringify(star) === JSON.stringify(userDetails)
              ? "disable__btn"
              : "save__icon"
          }`}
          onClick={() =>
            JSON.stringify(star) === JSON.stringify(userDetails)
              ? null
              : editHandler()
          }
        >
          check_circle
        </span>
      </div>
    </div>
  );
};

export { EditCard };
