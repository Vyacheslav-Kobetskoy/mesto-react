import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = props.ownerId === currentUser._id;
  const isLiked = props.likes.some((i) => i._id === currentUser._id);

  function handleCardClick() {
    props.onImage({ link: props.link, name: props.name });
  }

  return (
    <div className="gallery__card">
      <img
        className="gallery__photo"
        onClick={handleCardClick}
        src={props.link}
        alt={props.name}
      />
      <div className="gallery__caption">
        <h2 className="gallery__photo-title">{props.name}</h2>
        <div className="gallery__like-container">
          <button
            className={`btn-hover gallery__like ${
              isLiked ? "gallery__like_active" : ""
            }`}
            type="button"
          ></button>
          <span className="gallery__like-counter">{props.likes.length}</span>
        </div>
      </div>
      <button
        className={`btn-hover ${isOwn ? "gallery__delete-btn" : ""}`}
      ></button>
    </div>
  );
}

export default Card;
