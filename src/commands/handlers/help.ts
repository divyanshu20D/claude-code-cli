import { Command } from "../types.js";

export const helpCommand: Command = {
  name: "help",
  description: "Show Available Commands",
  execute() {
    return {
      message: [
        "Available commands:",
        "/help   - Show available commands",
        "/cwd    - Show current workspace path",
        "/status - Show current session status",
        "/reset  - Clear conversation history",
        "/exit   - Exit the CLI",
      ].join("\n"),
    };
  },
};
