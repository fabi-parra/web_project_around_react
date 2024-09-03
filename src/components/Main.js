import { useState, useEffect } from "react";
import api from "../utils/api";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    async function getValues() {
      const response = await api.getUserInfo();
      console.log(response);
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
    }
    getValues();
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={props.onEditAvatarClick}
        >
          <img
            src={userAvatar}
            alt="espacio con forma circular donde va una foto de perfil del usuario o usuaria"
            className="profile__image"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <button
            title="editar-foto-perfil"
            className="profile__avatar-button-edit"
            type="button"
          ></button>
        </div>
        <div className="profile__info-container">
          <div className="profile__name-container">
            <h2 className="profile__name">{userName }</h2>
            <div
              className="profile__edit-button"
              onClick={props.onEditProfileClick}
            ></div>
          </div>
          <p className="profile__description">{ userDescription }</p>
        </div>
        <div
          className="profile__add-button"
          onClick={props.onAddPlaceClick}
        ></div>
      </section>

      <section className="cards"></section>

      <template className="card-template">
        <article className="card">
          <img id="card-image" alt=" " className="card__image" />
          <h2 className="card__title"></h2>
          <div className="card__icon card__icon_type_delete"></div>
          <div className="card__like-elements-container">
            <div className="card__icon card__icon_type_like"></div>
            <span className="card__like-counter"></span>
          </div>
        </article>
      </template>

      <section className="popup" id="popupWithPhoto">
        <div className="popup__container popup__container_type_popup-photo">
          <div className="popup__close-button"> </div>
          <img src=" " className="popup__image" alt="" />
          <h2 className="popup__subtitle"></h2>
        </div>
      </section>

      <section className="popup" id="popupDeleteConfirmation">
        <div className="popup__container popup__container_type_delete-confirmation">
          <div className="popup__close-button"></div>
          <h2 className="popup__title">¿Estás segura/o?</h2>
          <form
            name="delete-confirmation-form"
            className="popup__form popup__form_delete-confirmation"
          >
            <button type="submit" value="submit" className="popup__form-button">
              Sí
            </button>
          </form>
        </div>
      </section>

      {/* <section className="popup" id="popupEditProfile">
        <div className="popup__container">
          <div className="popup__close-button"></div>
          <h2 className="popup__title">Editar perfil</h2>
          <form
            name="edit-profile-form"
            className="popup__form popup__form_profile"
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
            <span className="popup__form-error-message name-error"></span>

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
            <span className="popup__form-error-message about-error"></span>
            <button type="submit" value="submit" className="popup__form-button">
              Guardar
            </button>
          </form>
        </div>
      </section>

      <section className="popup" id="popupAddCards">
        <div className="popup__container">
          <div className="popup__close-button"></div>
          <h2 className="popup__title">Nuevo lugar</h2>
          <form name="add-card-form" className="popup__form popup__form_cards">
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
            <span className="popup__form-error-message place-name-error"></span>
            <input
              type="url"
              className="popup__form-input popup__form-input_type_link"
              id="image-link"
              name="link"
              placeholder="Enlace a la imagen"
              required
            />
            <span className="popup__form-error-message image-link-error"></span>
            <button type="submit" value="submit" className="popup__form-button">
              Crear
            </button>
          </form>
        </div>
      </section>

      <section className="popup" id="popupEditAvatar">
        <div className="popup__container">
          <div className="popup__close-button"></div>
          <h2 className="popup__title">Cambiar foto de perfil</h2>
          <form
            name="profile-avatar-form"
            className="popup__form popup__form_avatar-profile"
          >
            <input
              type="url"
              className="popup__form-input popup__form-input_type_link"
              id="avatar-link"
              name="avatarLink"
              placeholder="Enlace a la imagen"
              required
            />
            <span className="popup__form-error-message avatar-link-error"></span>
            <button type="submit" value="submit" className="popup__form-button">
              Guardar
            </button>
          </form>
        </div>
      </section> */}
    </main>
  );
}
