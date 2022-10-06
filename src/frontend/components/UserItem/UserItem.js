import { UserItemCollapsed } from "../UserItemCollapsed/UserItemCollapsed";
import { UserItemExpanded } from "../UserItemExpanded/UserItemExpanded";
import "./UserItem.css";

const UserItem = ({ star, isOpen, setIsOpen }) => {
  return (
    <div className="user__container">
      {isOpen === star.id ? (
        <UserItemExpanded star={star} setIsOpen={setIsOpen} />
      ) : (
        <UserItemCollapsed star={star} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export { UserItem };
