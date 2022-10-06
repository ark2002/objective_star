import "./UserItemCollapsed.css";

const UserItemCollapsed = ({ star, setIsOpen, edit }) => {
  const { id, fullName, picture } = star;
  return (
    <div
      className="flex__row-center user-collapsed__container"
      onClick={() => (edit ? null : setIsOpen(id))}
    >
      <img className="user__img" src={picture} alt={fullName} />
      <p className="user__name ">{fullName}</p>
      <span className="material-icons expand__icon">expand_more</span>
    </div>
  );
};

export { UserItemCollapsed };
