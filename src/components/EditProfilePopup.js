import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about);
  }, [currentUser])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({ name, about: description });
  };

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onUpdateUser={onUpdateUser}
      onSubmit={handleSubmit}
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
        value={name}
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
        value={description}
        onChange={handleDescriptionChange}
      ></input>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
