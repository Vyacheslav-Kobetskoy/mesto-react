function PopupWithForm(props) {
  return (
    <article
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      aria-label="Попап"
    >
      <div className="popup__container">
        <h2 className={`popup__title popup__title_type_${props.name}`}>
          {props.title}
        </h2>
        <form className="popup__form" name={`${props.name}Form`} noValidate>
          <props.children />
        </form>
        <button
          onClick={props.onClose}
          className="popup__close-btn btn-hover popup__close-edit"
          type="button"
        ></button>
      </div>
    </article>
  );
}

export default PopupWithForm;
