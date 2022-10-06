import toast from "react-hot-toast";
import { useCelebrity } from "../../context/CelebrityContext";
import "./DeleteModal.css";

const DeleteModal = ({ modal, setModal, star }) => {
  const { dispatchList } = useCelebrity();
  return (
    <>
      {modal && (
        <div className="delete__modal-wrapper" onClick={() => setModal(false)}>
          <div
            className="delete__modal flex__column-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal__top flex__row-center">
              <p className="user__description">
                Are you sure you want to delete ?
              </p>
              <span
                className="material-icons close__icon"
                onClick={() => setModal(false)}
              >
                close
              </span>
            </div>
            <div className="modal__choice flex__row-center">
              <button
                className="modal__btn cancel__btn"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
              <button
                className="modal__btn delete__btn"
                onClick={() => {
                  dispatchList({ type: "deleteCelebrity", payload: star });
                  toast.error("User Deleted");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { DeleteModal };
