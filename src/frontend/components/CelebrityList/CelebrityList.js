import { useEffect, useState } from "react";
import { useCelebrity } from "../../context/CelebrityContext";
import { UserItem } from "../UserItem/UserItem";
import "./CelebrityList.css";

const CelebrityList = () => {
  const { list, dispatchList } = useCelebrity();
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    dispatchList({ type: "filter" });
  }, [dispatchList, list.deleteList]);

  return (
    <>
      {list &&
        list.celebrityList.map((star) => (
          <UserItem
            key={star.id}
            star={star}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
    </>
  );
};

export { CelebrityList };
