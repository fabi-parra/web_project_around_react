import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getValues() {
      const response = await api.getUserInfo();
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
    }
    getValues();
  }, []);

  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      setCards(response);
      console.log(response)
    }
    getCards();
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
            <h2 className="profile__name">{userName}</h2>
            <div
              className="profile__edit-button"
              onClick={props.onEditProfileClick}
            ></div>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <div
          className="profile__add-button"
          onClick={props.onAddPlaceClick}
        ></div>
      </section>

      <section className="cards">
        {cards.map((card) => (
          <Card
            onCardClick={props.onCardClick}
            card={card}
            key={card._id}
            name={card.name}
            link={card.link}
            likes={card.likes}
          />
        ))}
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
    </main>
  );
}
