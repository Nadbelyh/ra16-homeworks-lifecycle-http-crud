import Note from "../note";
import "./index.css";

function NotesList({ notes, onRemoveNote }) {
  return (
    <div className="notesList">
      {notes?.map((note) => (
        <div className="col" key={note.id}>
          <Note note={note} onRemove={onRemoveNote} />
        </div>
      ))}
    </div>
  );
}

export default NotesList;
