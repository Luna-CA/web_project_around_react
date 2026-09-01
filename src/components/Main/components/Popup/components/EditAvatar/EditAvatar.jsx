export default function EditAvatar() {
  return (
    <form className="popup__form" id="avatar-form" name="edit-form">
      <label className="popup__field">
        <input
          type="url"
          className="popup__input popup__input_type_url"
          id="avatar-image"
          name="avatar-image"
          placeholder="Image Link"
          required
        />
        <span className="popup__input-error add-url-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
