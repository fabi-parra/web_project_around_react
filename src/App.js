import headerLogo from './images/header__logo.svg';
import profileAvatar from './images/profile__image.png';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="header__logo"
          src={ headerLogo }
          alt="Logo del encabezado, con la frase 'Alrededor de Chile'"
        />
        <span className="header__line"></span>
      </header>

      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              src={ profileAvatar }
              alt="espacio con forma circular donde va una foto de perfil del usuario o usuaria"
              className="profile__image"
            />
            <button
              title="editar-foto-perfil"
              className="profile__avatar-button-edit"
              type="button"
            ></button>
          </div>
          <div className="profile__info-container">
            <div className="profile__name-container">
              <h2 className="profile__name">Fabiola Parra</h2>
              <div className="profile__edit-button"></div>
            </div>
            <p className="profile__description">Estudiante</p>
          </div>
          <div className="profile__add-button"></div>
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
      </main>

      <footer className="footer">
        <p className="footer__copyright">&#169;2024. Fabiola Parra Vejar</p>
      </footer>

      <section className="popup" id="popup-profile">
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

      <section className="popup" id="popup-cards">
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

      <section className="popup" id="popup-photo">
        <div className="popup__container popup__container_type_popup-photo">
          <div className="popup__close-button"> </div>
          <img src=" " className="popup__image" alt="" />
          <h2 className="popup__subtitle"></h2>
        </div>
      </section>

      <section className="popup" id="popup-avatar-profile">
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
      </section>

      <section className="popup" id="popup-delete-confirmation">
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
    </div>
  );
}

export default App;
