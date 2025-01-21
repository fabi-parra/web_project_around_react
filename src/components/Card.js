import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Cards({ link, name, likes, onCardClick, card }) {
  const currentUser = useContext(CurrentUserContext);
  function handleClick() {
    onCardClick(card);
  }
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__icon_type_like${
    isLiked ? 'card__icon_type_like-active' : ''
  }`;
  return (
    <article className="card">
      <img alt=" " className="card__image" src={link} onClick={handleClick} />
      <h2 className="card__title">{name}</h2>
      <div className="card__icon card__icon_type_delete"></div>
      <div className="card__like-elements-container">
        <div className={ cardLikeButtonClassName }></div>
        <span className="card__like-counter">{likes.length}</span>
      </div>
    </article>
  );
}
