export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup">
      <div className="popup__content">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <h3 class="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
