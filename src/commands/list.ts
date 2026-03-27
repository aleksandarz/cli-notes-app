import { readJSONFile } from "../utils/fileHelper.js";

export type NoteType = {
  id: number;
  text: string;
  done: boolean;
}

export const list = async (filePath: string) => {
  const notes = await readJSONFile(filePath);
  const parsedNotes = JSON.parse(notes);

  parsedNotes.map((note: NoteType) => {
    console.log(note);
  });
}