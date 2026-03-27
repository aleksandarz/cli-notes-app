import { readJSONFile, writeJSONFile } from "../utils/fileHelper.js";
import { NoteType } from "./list.js";

export const deleteNote = async (filePath: string, id: number) => {
  const notes = await readJSONFile(filePath);
  const parsedNotes = JSON.parse(notes);

  const updatedNotes = parsedNotes.filter((note: NoteType) => note.id !== id);
  await writeJSONFile(filePath, JSON.stringify(updatedNotes, null, 2));

  console.log("Note deleted");
}