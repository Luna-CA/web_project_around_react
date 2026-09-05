import Popup from "../../Popup";

export default function ImagePopup({ card, onClose }) {
  return (
    <Popup Onclose={onClose}>
      <img className="popup__image" src={card.link} alt={card.name} />

      <p className="popup__caption">{card.name}</p>
    </Popup>
  );
}
