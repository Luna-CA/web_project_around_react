import { useState } from "react";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import avatar from "../../images/avatar-img.jpeg";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar">
          <button
            aria-label="Editar avatar"
            className="profile__edit-button"
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
        <ul className="cards__list"></ul>
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
