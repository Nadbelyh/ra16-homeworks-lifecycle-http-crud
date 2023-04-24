import "./index.css";
import { ReactComponent as AddButton } from "../../img/add.svg";
function NotesAdd({ text, formDisable, onFormChange, onAddNote }) {
  return (
    <div>
      <fieldset disabled={formDisable}>
        <div className="addNote">
          <div>New note</div>
          <textarea
            aria-label="New note"
            value={text}
            style={{ height: "200px" }}
            onChange={onFormChange}
            required
          />
          <button onClick={onAddNote} className="addSvgButton">
            <AddButton></AddButton>
          </button>
        </div>
      </fieldset>
    </div>
  );
}

export default NotesAdd;
