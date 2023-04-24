import "./index.css";
import { ReactComponent as CloseButton } from "../../img/close.svg";
function Note({ note, onRemove }) {
  return (
    <div body className="note">
      <button onClick={() => onRemove(note.id)} className="closeSvgButton">
        <CloseButton></CloseButton>
      </button>
      <div className="noteContent"> {note.content}</div>
    </div>
  );
}

export default Note;
