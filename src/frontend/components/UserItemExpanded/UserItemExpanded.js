import moment from "moment";
import "./UserItemExpanded.css";

const UserItemExpanded = ({ star, setIsOpen }) => {
  const { first, last, picture, gender, dob, country, description } = star;
  return (
    <div className="flex__column-center user-expanded__container">
      <div
        className="flex__row-center user__top"
        onClick={() => setIsOpen(null)}
      >
        <img className="user__img" src={picture} alt={first} />
        <div className="user__name flex__row-center">
          <p className="name__first">{first}</p>
          <p className="name__last">{last}</p>
        </div>
        <span className="material-icons collapsed__icon">expand_less</span>
      </div>
      <div className="flex__row-center user__middle">
        <div className="flex__column">
          <p className="user__label">Age</p>
          <p className="user__details">{moment().diff(dob, "years")} years</p>
        </div>
        <div className="flex__column">
          <p className="user__label">Gender</p>
          <p className="user__details">{gender}</p>
        </div>
        <div className="flex__column">
          <p className="user__label">Country</p>
          <p className="user__details">{country}</p>
        </div>
      </div>
      <div className="flex__column user__bottom">
        <p className="user__label">Description</p>
        <p className="user__description">{description}</p>
      </div>
      <div className="flex__row-center user__options">
        <span className="material-icons delete__icon">delete</span>
        <span className="material-icons edit__icon">edit</span>
      </div>
    </div>
  );
};

export { UserItemExpanded };
