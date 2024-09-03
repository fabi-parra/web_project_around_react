import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
        />
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
          required
        />
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Nuevo lugar"
        name="popupAddCards"
        buttonText="Crear"
      >
        <input
          type="text"
          className="popup__form-input popup__form-input_type_place"
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
          id="image-link"
          name="link"
          placeholder="Enlace a la imagen"
          required
        />
      </PopupWithForm>
      <ImagePopup
        link={selectedCard.link}
        title={selectedCard.name}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
