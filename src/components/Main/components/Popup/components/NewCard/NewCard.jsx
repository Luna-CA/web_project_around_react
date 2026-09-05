export default function NewCard() {
  return (
    <form className="popup__form" id="edit-profile-form" name="edit-form">
      <label class="popup__field">
        <input
          className="popup__input"
          id="profile-name"
          name="name"
          placeholder="Nome"
          type="text"
          required
          minlength="2"
          maxlength="40"
        />
        <span class="popup__input-error profile-name-error"></span>
      </label>
      <label class="popup__field">
        <input
          className="popup__input"
          id="profile-description"
          name="job"
          placeholder="link"
          type="text"
          required
          minlength="2"
          maxlength="200"
        />
        <span className="popup__input-error profile-description-error"></span>
      </label>
      <button type="submit" className="popup__submit">
        Salvar
      </button>
    </form>
  );
}
