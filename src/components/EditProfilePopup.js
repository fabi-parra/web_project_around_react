import PopupWithForm from './PopupWithForm';
import { useState, useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    title="Editar perfil"
    name="popupEditProfile"
    buttonText="Guardar"
  >
    <input
      type="text"
      className="popup__form-input popup__form-input_type_name"
      name="name"
      id="name"
      placeholder="Nombre"
      required
      minLength="2"
      maxLength="40"
      onChange={handleNameChange}
    />
    <input
      type="text"
      className="popup__form-input popup__form-input_type_about"
      name="about"
      id="about"
      placeholder="Acerca de mí"
      required
      minLength="2"
      maxLength="200"
      onChange={handleDescriptionChange}
    ></input>
  </PopupWithForm>
  )
}

export default EditProfilePopup