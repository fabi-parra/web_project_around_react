import { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      setCards(response);
    }
    getCards();
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    await api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={props.onEditAvatarClick}
        >
          <img
            src={currentUser.avatar}
            alt="espacio con forma circular donde va una foto de perfil del usuario o usuaria"
            className="profile__image"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          />
          <button
            title="editar-foto-perfil"
            className="profile__avatar-button-edit"
            type="button"
          ></button>
        </div>
        <div className="profile__info-container">
          <div className="profile__name-container">
            <h2 className="profile__name">{currentUser.name}</h2>
            <div
              className="profile__edit-button"
              onClick={props.onEditProfileClick}
            ></div>
          </div>
          <p className="profile__description">{currentUser.about}</p>
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
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
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
