import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import ReactDOM from "react-dom";

import Card from "./Card.js";

function Main(props) {
  const { currentUser } = useContext(CurrentUserContext);

  React.useEffect(() => {
    ReactDOM.render(
      props.cards.map((card) => {
        return (
          <div className="template" key={card._id}>
            <CurrentUserContext.Provider value={{ currentUser }}>
              <Card
                card={card}
                onImage={props.onImage}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            </CurrentUserContext.Provider>
          </div>
        );
      }),
      document.querySelector(".gallery")
    );
  }, [
    props.cards,
    currentUser,
    props.onImage,
    props.onCardLike,
    props.onCardDelete,
  ]);

  return (
    <main className="main">
      <section className="profile" aria-label="Профиль">
        <div className="profile__docket">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар"
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar-btn btn-hover"
          ></button>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                onClick={props.onEditProfile}
                className="profile__edit-btn btn-hover"
                type="button"
              ></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-btn btn-hover"
          type="button"
        ></button>
      </section>

      <section className="gallery" aria-label="Галерея"></section>
    </main>
  );
}

export default Main;
