import logo from "./imag";

function App() {
  return (
    <div className="page__content">
      <header className="header page__section">
        <img
          alt="Logotipo Around The U.S."
          className="logo header__logo"
          src="./images/logo.svg"
        />
      </header>
      <main className="content">
        <section className="profile page__section">
          <img
            className="profile__image"
            src="./images/avatar-img.jpeg"
            alt="Avatar"
          />
          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
            ></button>
            <p className="profile__description">Explorador</p>
          </div>
          <button
            aria-label="Adicionar cartão"
            className="profile__add-button"
            type="button"
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
      </main>
      <footer className="footer page__section">
        <p className="footer__copyright">&copy; 2025 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;
