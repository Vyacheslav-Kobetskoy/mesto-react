import React from "react";
import ReactDOM from "react-dom";

import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState();

  React.useEffect(() => {
    api.getProfile().then((profileInfo) => {
      setUserName(profileInfo.name);
      setUserDescription(profileInfo.about);
      setUserAvatar(profileInfo.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((initialCards) => {
      setCards(initialCards);
      ReactDOM.render(
        initialCards.map((card) => {
          return (
            <div className="template" key={card._id}>
              <Card
                name={card.name}
                link={card.link}
                likes={card.likes}
                onImage={props.onImage}
              />
            </div>
          );
        }),
        document.querySelector(".gallery")
      );
    });
  }, [props.onImage]);

  return (
    <main className="main">
      <section className="profile" aria-label="Профиль">
        <div className="profile__docket">
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar-btn btn-hover"
          ></button>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{userName}</h1>
              <button
                onClick={props.onEditProfile}
                className="profile__edit-btn btn-hover"
                type="button"
              ></button>
            </div>
            <p className="profile__about">{userDescription}</p>
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
