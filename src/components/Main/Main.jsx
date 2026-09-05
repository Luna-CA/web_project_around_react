import { useState } from "react";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import avatar from "../../images/avatar-img.jpeg";
import ImagePopup from "./components/Popup/components/ImagePopup/ImagePopup";
import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleCardClick(card) {
    setPopup({
      children: <ImagePopup card={card} onClose={handleClosePopup} />,
    });
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content page__content">
      <section className="profile page__section">
        <div className="profile profile__avatar">
          <button
            aria-label="Editar avatar"
            className="profile__avatar-button"
            type="button"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img className="profile__image" src={avatar} alt="Avatar" />
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">Explorador</p>
        </div>
        <button
          aria-label="Adicionar cartão"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={handleCardClick} />
          ))}
        </ul>
        <template id="card-template">
          <li className="card">
            <img className="card__image" src="" alt="" />
            <button
              aria-label="Excluir cartão"
              className="card__delete-button"
              type="button"
            ></button>
            <div className="card__description">
              <h2 className="card__title"></h2>
              <button
                aria-label="Botão de curtir"
                className="card__like-button"
                type="button"
              ></button>
            </div>
          </li>
        </template>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
