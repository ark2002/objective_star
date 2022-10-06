import { useState } from "react";
import { UserItem } from "../UserItem/UserItem";
import "./CelebrityList.css";

const CelebrityList = ({ filteredList }) => {
  const [isOpen, setIsOpen] = useState(null);
  const [edit, setEdit] = useState(false);

  return (
    <>
      {filteredList.length > 0 ? (
        filteredList.map((star) => (
          <UserItem
            key={star.id}
            star={star}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            edit={edit}
            setEdit={setEdit}
          />
        ))
      ) : (
        <h3>No User Found :(</h3>
      )}
    </>
  );
};

export { CelebrityList };
