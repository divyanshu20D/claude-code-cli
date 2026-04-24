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
        "/provider - Show or switch provider",
        "/providers - List available providers",
        "/model - Show or switch model",
        "/models - List models for current provider",
        "/ls - List files in workspace",
        "/search <text> - Search text in workspace files",
        "/git-status - Show git status",
        "/login <subscription|api-key> - Set login mode",
        "/whoami - Show current session identity",
        "/exit   - Exit the CLI",
      ].join("\n"),
    };
  },
};
