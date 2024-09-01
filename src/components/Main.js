import profileAvatar from "../images/profile__image.png";

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={profileAvatar}
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
  );
}
