function PopupWithForm(props) {//title name children
    return (
        <article className={`popup popup_type_${props.name}`} aria-label="Попап">
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={`${props.name}Form`} noValidate>


          
          </form>
          <button className="popup__close-btn btn-hover popup__close-edit" type="button"></button>
        </div>
      </article>

    );
  }
  
  export default PopupWithForm;