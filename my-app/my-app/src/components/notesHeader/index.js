import "./index.css";
import { ReactComponent as UpdateButton } from "../../img/update.svg";

function NotesHeader({ onUpdate }) {
  return (
    <div className="row">
      <div className="col">
        <h1>Notes</h1>
      </div>
      <div className="col">
        <button onClick={onUpdate} className="svgButton" title="Обновить">
          <UpdateButton></UpdateButton>
        </button>
      </div>
    </div>
  );
}

export default NotesHeader;
