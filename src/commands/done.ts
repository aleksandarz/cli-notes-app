import { readJSONFile, writeJSONFile } from "../utils/fileHelper.js";
import { NoteType } from "./list.js";

export const done = async (filePath: string, id: number) => {
  const notes = await readJSONFile(filePath);
  const parsedNotes = JSON.parse(notes);

  const note = parsedNotes.find((note: NoteType) => note.id === id);
  note.done = true;

  await writeJSONFile(filePath, JSON.stringify(parsedNotes, null, 2));
  console.log("Note marked as done!");
}