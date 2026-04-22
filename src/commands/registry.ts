import { clearCommand } from "./handlers/clear.js";
import { cwdCommand } from "./handlers/cwd.js";
import { exitCommand } from "./handlers/exit.js";
import { helpCommand } from "./handlers/help.js";
import { historyCommand } from "./handlers/history.js";
import { resetCommand } from "./handlers/reset.js";
import { statusCommand } from "./handlers/status.js";
import { Command } from "./types.js";

const commands: Command[] = [
  helpCommand,
  statusCommand,
  resetCommand,
  exitCommand,
  cwdCommand,
  historyCommand,
  clearCommand,
];

export function getCommand(name: string): Command | undefined {
  return commands.find((command) => command.name === name);
}

export function getAllCommands(): Command[] {
  return commands;
}
