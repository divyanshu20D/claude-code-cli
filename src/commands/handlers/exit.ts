import { Command } from "../types.js";

export const exitCommand: Command = {
  name: "exit",
  description: "Exit the CLI...",
  execute: () => ({
    message: "Exiting the cli...",
    shouldExit: true,
  }),
};
