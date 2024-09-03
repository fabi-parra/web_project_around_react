import React from "react";

export default function Cards({ link, name, likes }) {
  return (
    <article className="card">
      <img alt=" " className="card__image" src={link} />
      <h2 className="card__title">{name}</h2>
      <div className="card__icon card__icon_type_delete"></div>
      <div className="card__like-elements-container">
        <div className="card__icon card__icon_type_like"></div>
        <span className="card__like-counter">{likes.length}</span>
      </div>
    </article>
  )};
