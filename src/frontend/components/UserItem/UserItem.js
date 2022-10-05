import "./UserItem.css";

const UserItem = ({ star, isOpen, setIsOpen }) => {
  const { id, first, last, picture, email, gender, dob, country, description } =
    star;
  return (
    <div
      className="user__container"
      onClick={() =>
        isOpen === star.id ? setIsOpen(null) : setIsOpen(star.id)
      }
    >
      <div className="flex__row-center user-collapsed__container">
        <img className="user__img" src={picture} alt={first} />
        <div className="user__name flex__row-center">
          <p className="name__first">{first}</p>
          <p className="name__last">{last}</p>
        </div>
        <span className="material-icons expand__icon">expand_more</span>
      </div>
    </div>
  );
};

export { UserItem };
