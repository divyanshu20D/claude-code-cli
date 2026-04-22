import { Command } from "../types.js";

export const clearCommand: Command = {
  name: "clear",
  description: "Clear the terminal completetly.",
  execute(context) {
    console.clear();
    return {
      message: "",
    };
  },
};
