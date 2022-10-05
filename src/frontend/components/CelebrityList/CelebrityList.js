import axios from "axios";
import { useEffect, useState } from "react";
import { UserItem } from "../UserItem/UserItem";
import "./CelebrityList.css";

const CelebrityList = () => {
  const [list, SetList] = useState([]);
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("celebrities.json");
      console.log(data);
      SetList(data);
    })();
  }, []);

  return (
    <>
      {list &&
        list.map((star) => (
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
