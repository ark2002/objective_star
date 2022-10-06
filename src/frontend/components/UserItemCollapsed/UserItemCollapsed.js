import "./UserItemCollapsed.css";

const UserItemCollapsed = ({ star, setIsOpen }) => {
  const { id, first, last, picture } = star;
  return (
    <div
      className="flex__row-center user-collapsed__container"
      onClick={() => setIsOpen(id)}
    >
      <img className="user__img" src={picture} alt={first} />
      <div className="user__name flex__row-center">
        <p className="name__first">{first}</p>
        <p className="name__last">{last}</p>
      </div>
      <span className="material-icons expand__icon">expand_more</span>
    </div>
  );
};

export { UserItemCollapsed };
