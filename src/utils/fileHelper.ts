import * as fs from "fs/promises";

export const readJSONFile = async (filePath: string) => {
  return await fs.readFile(filePath, "utf-8");
}

export const writeJSONFile = async (filePath: string, data: string) => {
  try {
    await fs.writeFile(filePath, data, "utf-8");
    console.log("Successfully written");
  } catch (err) {
    console.error("Error writing the file: " + err);
  }
}

