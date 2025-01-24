import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose}) {
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
    ></input>
  </PopupWithForm>
  )
}

export default EditProfilePopup