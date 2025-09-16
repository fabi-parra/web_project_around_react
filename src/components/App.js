import { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    async function getValues() {
      const response = await api.getUserInfo();
      setCurrentUser(response);
    }
    getValues();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .editProfile(data)
        .then((newData) => {
          setCurrentUser(newData);
          closeAllPopups();
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleUpdateAvatar = (link) => {
    (async () => {
      await api
        .editAvatarProfile(link)
        .then((newAvatar) => {
          setCurrentUser(newAvatar);
          closeAllPopups();
        })
        .catch((error) => console.error(error));
    })();
  }

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
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          />
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
