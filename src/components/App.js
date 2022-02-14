import React from "react";

import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  function handleCardClick({ link, name }) {
    setSelectedCard({ link, name });
    setIsImagePopupOpen(true);
    document.addEventListener("keydown", handleEscClose);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    document.addEventListener("keydown", handleEscClose);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    document.addEventListener("keydown", handleEscClose);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    document.addEventListener("keydown", handleEscClose);
  }
  function closeAllPopups(evt) {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    document.removeEventListener("keydown", handleEscClose);
  }
  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }
  function handleOverClickClose(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closeAllPopups();
    }
  }

  function EditProfileChildren() {
    return (
      <>
        <div className="popup__input-container">
          <input
            id="editName"
            className="popup__input-text popup__input-text_type_name"
            name="editName"
            type="text"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="editName-error" className="popup__input-error"></span>
        </div>
        <div className="popup__input-container">
          <input
            id="editAbout"
            className="popup__input-text popup__input-text_type_about"
            name="editAbout"
            type="text"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="editAbout-error" className="popup__input-error"></span>
        </div>
        <input
          type="submit"
          value="Сохранить"
          className="btn-hover popup__save-btn"
        />
      </>
    );
  }

  function AddPlaceChildren() {
    return (
      <>
        <div className="popup__input-container">
          <input
            id="TitleImg"
            className="popup__input-text popup__input-text_type_title-img"
            name="TitleImg"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="TitleImg-error" className="popup__input-error"></span>
        </div>
        <div className="popup__input-container">
          <input
            id="linkImg"
            className="popup__input-text popup__input-text_type_link-img"
            name="linkImg"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="linkImg-error" className="popup__input-error"></span>
        </div>
        <input
          type="submit"
          value="Создать"
          className="btn-hover popup__save-btn"
        />
      </>
    );
  }

  function editAvatarChildren() {
    return (
      <>
        <div className="popup__input-container">
          <input
            id="linkAvatar"
            className="popup__input-text popup__input-text_type_link-Avatar"
            name="linkAvatar"
            type="url"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="linkAvatar-error" className="popup__input-error"></span>
        </div>
        <input
          type="submit"
          value="Сохранить"
          className="btn-hover popup__save-btn"
        />
      </>
    );
  }
  // function deleteCardChildren() {
  //   return (
  //     <input type="submit" value="Да" className="btn-hover popup__save-btn" />
  //   );
  // }
  return (
    <>
      <div className="page" onKeyDown={handleEscClose}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onImage={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onOverClickClose={handleOverClickClose}
        children={editAvatarChildren}
        name={"edit-avatar"}
        title={"Обновить аватар"}
      />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onOverClickClose={handleOverClickClose}
        children={EditProfileChildren}
        name={"edit"}
        title={"Редактировать профиль"}
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onOverClickClose={handleOverClickClose}
        children={AddPlaceChildren}
        name={"add-img"}
        title={"Новое место"}
      />

      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        onOverClickClose={handleOverClickClose}
        link={selectedCard.link}
        name={selectedCard.name}
      />
    </>
  );
}

export default App;
