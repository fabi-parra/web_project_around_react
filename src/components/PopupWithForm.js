export default function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${ props.isOpen ? 'popup_open' : ''}` }>
      <div className="popup__container">
        <div className="popup__close-button" onClick={ props.onClose } ></div>
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={props.name}
          className={`popup__form popup__form_${props.name}`}
        >
          {props.children}
          <button type="submit" value="submit" className="popup__form-button">
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
