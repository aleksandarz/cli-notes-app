import { readJSONFile, writeJSONFile } from "../utils/fileHelper.js";

export const add = async (filePath: string, args: string) => {
  const notes = await readJSONFile(filePath);
  const parsedNotes = JSON.parse(notes);

  const newNote = {
    id: Date.now(),
    text: args,
    done: false
  }
  parsedNotes.push(newNote);
  await writeJSONFile(filePath, JSON.stringify(parsedNotes, null, 2));

  console.log("New note added: " + newNote.text);
}