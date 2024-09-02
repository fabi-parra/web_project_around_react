import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        title="Editar perfil"
        name="popupEditProfile"
        buttonText="Guardar"
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title="Cambiar foto de perfil"
        name="popupEditAvatar"
        buttonText="Guardar"
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title="Nuevo lugar"
        name="popupAddCards"
        buttonText="Crear"
      />
    </div>
  );
}

export default App;
