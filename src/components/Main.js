function Main(props) {
  return (
    <main className="main">
      <section className="profile" aria-label="Профиль">
        <div className="profile__docket">
          <img className="profile__avatar" src={require("../images/Avatar.jpg")} alt="Аватар" />
          <button onClick={props.onEditAvatar} className="profile__avatar-btn btn-hover"></button>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name"></h1>
              <button onClick={props.onEditProfile} className="profile__edit-btn btn-hover" type="button"></button>
            </div>
            <p className="profile__about"></p>
          </div>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-btn btn-hover" type="button"></button>
      </section>

      <section className="gallery" aria-label="Галерея"></section>
    </main>
  );
}




export default Main;
