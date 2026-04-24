import { clearCommand } from "./handlers/clear.js";
import { cwdCommand } from "./handlers/cwd.js";
import { exitCommand } from "./handlers/exit.js";
import { gitStatusCommand } from "./handlers/git-status.js";
import { helpCommand } from "./handlers/help.js";
import { historyCommand } from "./handlers/history.js";
import { loginCommand } from "./handlers/login.js";
import { lsCommand } from "./handlers/ls.js";
import { modelCommand } from "./handlers/model.js";
import { modelsCommand } from "./handlers/models.js";
import { providerCommand } from "./handlers/provider.js";
import { providersCommand } from "./handlers/providers.js";
import { readCommand } from "./handlers/read.js";
import { resetCommand } from "./handlers/reset.js";
import { statusCommand } from "./handlers/status.js";
import { whoamiCommand } from "./handlers/whoami.js";
import { Command } from "./types.js";

const commands: Command[] = [
  helpCommand,
  cwdCommand,
  statusCommand,
  historyCommand,
  clearCommand,
  resetCommand,
  providerCommand,
  providersCommand,
  modelCommand,
  modelsCommand,
  lsCommand,
  readCommand,
  gitStatusCommand,
  loginCommand,
  whoamiCommand,
  exitCommand,
];

export function getCommand(name: string): Command | undefined {
  return commands.find((command) => command.name === name);
}

export function getAllCommands(): Command[] {
  return commands;
}
