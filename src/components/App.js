import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="container">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
      </div>

      <article className="popup popup_type_edit" aria-label="Попап">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="editForm" noValidate>
            <div className="popup__input-container">
              <input id="editName" className="popup__input-text popup__input-text_type_name" name="editName" type="text" minLength="2" maxLength="40" required />
              <span id="editName-error" className="popup__input-error"></span>
            </div>
            <div className="popup__input-container">
              <input id="editAbout" className="popup__input-text popup__input-text_type_about" name="editAbout" type="text" minLength="2" maxLength="200" required />
              <span id="editAbout-error" className="popup__input-error"></span>
            </div>
            <input type="submit" value="Сохранить" className="btn-hover popup__save-btn" />
          </form>
          <button className="popup__close-btn btn-hover popup__close-edit" type="button"></button>
        </div>
      </article>

      <article className="popup popup_type_edit-avatar" aria-label="Попап">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="edit-avatarForm" noValidate>
            <div className="popup__input-container">
              <input id="linkAvatar" className="popup__input-text popup__input-text_type_link-Avatar" name="linkAvatar" type="url" placeholder="Ссылка на аватар" required />
              <span id="linkAvatar-error" className="popup__input-error"></span>
            </div>
            <input type="submit" value="Сохранить" className="btn-hover popup__save-btn" />
          </form>
          <button className="popup__close-btn btn-hover popup__close-add" type="button"></button>
        </div>
      </article>

      <article className="popup popup_type_add-img" aria-label="Попап">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="add-imgForm" noValidate>
            <div className="popup__input-container">
              <input id="TitleImg" className="popup__input-text popup__input-text_type_title-img" name="TitleImg" type="text" placeholder="Название" minLength="2" maxLength="30" required />
              <span id="TitleImg-error" className="popup__input-error"></span>
            </div>
            <div className="popup__input-container">
              <input id="linkImg" className="popup__input-text popup__input-text_type_link-img" name="linkImg" type="url" placeholder="Ссылка на картинку" required />
              <span id="linkImg-error" className="popup__input-error"></span>
            </div>
            <input type="submit" value="Создать" className="btn-hover popup__save-btn" />
          </form>
          <button className="popup__close-btn btn-hover popup__close-add" type="button"></button>
        </div>
      </article>

      <article className="popup popup_type_delete-card" aria-label="Попап">
        <div className="popup__container">
          <h2 className="popup__title popup__title_type_delete-card">Вы уверены?</h2>
          <form className="popup__form" name="delete-cardForm" noValidate>
            <input type="submit" value="Да" className="btn-hover popup__save-btn" />
          </form>
          <button className="popup__close-btn btn-hover popup__close-add" type="button"></button>
        </div>
      </article>

      <template className="template">
        <div className="gallery__card">
          <img className="gallery__photo" src="#" alt="#" />
          <div className="gallery__caption">
            <h2 className="gallery__photo-title"></h2>
            <div className="gallery__like-container">
              <button className="btn-hover gallery__like" type="button"></button>
              <span className="gallery__like-counter"></span>
            </div>
          </div>
          <button className="btn-hover gallery__delete-btn"> </button>
        </div>
      </template>
    </div>
  );
}

function handleEditAvatarClick() {
  document.querySelector(".popup_type_edit-avatar").classList.add("popup_opened");
}
function handleEditProfileClick() {
  document.querySelector(".popup_type_edit").classList.add("popup_opened");
}
function handleAddPlaceClick() {
  document.querySelector(".popup_type_add-img").classList.add("popup_opened");
}
function closeAllPopups() {
  document.querySelector(".popup").classList.remove("popup_opened");
}


// isEditProfilePopupOpen
// isAddPlacePopupOpen
// isEditAvatarPopupOpen


export default App;
