import { useState } from "react";
import toast from "react-hot-toast";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { EditCard } from "../EditCard/EditCard";
import "./UserItemExpanded.css";

const UserItemExpanded = ({ star, setIsOpen, edit, setEdit }) => {
  const [modal, setModal] = useState(false);
  const { fullName, picture, gender, age, country, description } = star;

  return (
    <>
      {edit ? (
        <div className="edit__restriction">
          <EditCard setEdit={setEdit} star={star} />
        </div>
      ) : (
        <div className="flex__column-center user-expanded__container">
          <div
            className="flex__row-center user__top"
            onClick={() => setIsOpen(null)}
          >
            <img className="user__img" src={picture} alt={fullName} />
            <p className="user__name">{fullName}</p>
            <span className="material-icons collapsed__icon">expand_less</span>
          </div>
          <div className="flex__row-center user__middle">
            <div className="flex__column">
              <p className="user__label">Age</p>
              <p className="user__details">{age} years</p>
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
            <span
              className="material-icons delete__icon"
              onClick={() => {
                setModal(true);
              }}
            >
              delete
            </span>
            <span
              className="material-icons edit__icon"
              onClick={() =>
                age > 17
                  ? setEdit(true)
                  : toast.error("User is not an adult! Can't Edit.")
              }
            >
              edit
            </span>
          </div>
        </div>
      )}
      <DeleteModal modal={modal} setModal={setModal} star={star} />
    </>
  );
};

export { UserItemExpanded };
