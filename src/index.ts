import { add } from "./commands/add.js";
import { list } from "./commands/list.js";
import { done } from "./commands/done.js";
import { deleteNote } from "./commands/delete.js";

let command = process.argv[2];
let args = process.argv[3];

if (command === "add") {
  await add(`${import.meta.dirname}/notes.json`, args);
} else if (command === "list") {
  await list(`${import.meta.dirname}/notes.json`);
} else if (command === "done") {
  await done(`${import.meta.dirname}/notes.json`, Number(args));
} else if (command === "delete") {
  await deleteNote(`${import.meta.dirname}/notes.json`, Number(args));
} else {
  console.log("This command doesn't exist: " + command);
}