import PopupWithForm from "../Popup";
import { createRef } from "react";

function NewCard({ isOpen, onClose, onAddPlace }) {
  const titleRef = createRef();
  const imageLinkRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: titleRef.current.value,
      link: imageLinkRef.current.value,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Nuevo lugar"
      name="popupAddCards"
      buttonText="Crear"
    >
      <input
        type="text"
        className="popup__form-input popup__form-input_type_place"
        ref={titleRef}
        id="place-name"
        name="name"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        required
      />
      <input
        type="url"
        className="popup__form-input popup__form-input_type_link"
        ref={imageLinkRef}
        id="image-link"
        name="link"
        placeholder="Enlace a la imagen"
        required
      />
    </PopupWithForm>
  );
}

export default NewCard;
