import { Command } from "../types.js";

export const exitCommand: Command = {
  name: "Exit",
  description: "Exit the CLI...",
  execute: () => {
    return {
      message: "Exiting the cli..",
      shouldExit: true,
    };
  },
};
