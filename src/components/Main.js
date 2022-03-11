import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import ReactDOM from "react-dom";

import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [cards, setCards] = React.useState();
  const { currentUser } = useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getInitialCards().then((initialCards) => {
      setCards(initialCards);
      ReactDOM.render(
        initialCards.map((card) => {
          return (
            <div className="template" key={card._id}>
              <CurrentUserContext.Provider value={{ currentUser }}>
                <Card
                  name={card.name}
                  link={card.link}
                  likes={card.likes}
                  ownerId={card.owner._id}
                  onImage={props.onImage}
                />
              </CurrentUserContext.Provider>
            </div>
          );
        }),
        document.querySelector(".gallery")
      );
    });
  }, [props.onImage,currentUser]);

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
