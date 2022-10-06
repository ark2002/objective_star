import { UserItemCollapsed } from "../UserItemCollapsed/UserItemCollapsed";
import { UserItemExpanded } from "../UserItemExpanded/UserItemExpanded";
import "./UserItem.css";

const UserItem = ({ star, isOpen, setIsOpen, setEdit, edit }) => {
  return (
    <div className="user__container">
      {isOpen === star.id ? (
        <UserItemExpanded
          star={star}
          setIsOpen={setIsOpen}
          edit={edit}
          setEdit={setEdit}
        />
      ) : (
        <UserItemCollapsed star={star} setIsOpen={setIsOpen} edit={edit} />
      )}
    </div>
  );
};

export { UserItem };
