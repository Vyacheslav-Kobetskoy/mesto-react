import React from "react";

import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

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
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    document.removeEventListener("keydown", handleEscClose);
  }
  function handleEscClose(evt) {
    if (evt.key === "Escape") {
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
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={editAvatarChildren}
        name={"edit-avatar"}
        title={"Обновить аватар"}
      />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={EditProfileChildren}
        name={"edit"}
        title={"Редактировать профиль"}
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={AddPlaceChildren}
        name={"add-img"}
        title={"Новое место"}
      />

      <template className="template">
        <div className="gallery__card">
          <img className="gallery__photo" src="#" alt="#" />
          <div className="gallery__caption">
            <h2 className="gallery__photo-title"></h2>
            <div className="gallery__like-container">
              <button
                className="btn-hover gallery__like"
                type="button"
              ></button>
              <span className="gallery__like-counter"></span>
            </div>
          </div>
          <button className="btn-hover gallery__delete-btn"> </button>
        </div>
      </template>
    </>
  );
}

export default App;
