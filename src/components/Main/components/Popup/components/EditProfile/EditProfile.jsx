export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form" name="edit-form">
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_profile-name"
          id="profile-name"
          maxLength="30"
          minLength="1"
          name="profile-name"
          placeholder="Name"
          required
          type="text"
        />
        <span className="popup__input-error profile-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_profile-description"
          id="profile-description"
          maxLength="30"
          minLength="1"
          name="profile-description"
          placeholder="Profession"
          required
          type="text"
        />
        <span className="popup__input-error profile-description-error"></span>
      </label>
      <button className="popup__submit" type="submit">
        Salvar
      </button>
    </form>
  );
}
