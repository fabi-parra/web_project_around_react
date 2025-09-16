export default function ImagePopup({ link, title, onClose, isOpen }) {
  return (
    <section className={`popup ${ isOpen ? 'popup_open' : ''}` } id="popupWithPhoto">
      <div className="popup__container popup__container_type_popup-photo">
        <div className="popup__close-button" onClick={onClose} ></div>
        <img src={link} className="popup__image" alt="" />
        <h2 className="popup__subtitle">{title}</h2>
      </div>
    </section>
  );
}