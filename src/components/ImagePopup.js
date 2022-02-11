function ImagePopup() {
    return (
        <article className="popup zoom" aria-label="Попап">
        <div className="zoom__container">
          <img className="zoom__img" src="#" alt="#" />
          <h2 className="zoom__title"></h2>
          <button className="popup__close-btn btn-hover popup__close-zoom" type="button"></button>
        </div>
      </article>
    );
  }
  
  export default ImagePopup;
  