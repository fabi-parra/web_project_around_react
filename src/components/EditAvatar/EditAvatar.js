import React, { createRef } from "react";
import Popup from "../Popup";

function EditAvatar({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = createRef();
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
  }

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Cambiar foto de perfil"
      name="popupEditAvatar"
      buttonText="Guardar"
    >
      <input
        type="url"
        className="popup__form-input popup__form-input_type_link"
        id="avatar-link"
        name="avatarLink"
        placeholder="Enlace a la imagen"
        ref={inputRef}
        required
      />
    </Popup>
  );
}

export default EditAvatar;
