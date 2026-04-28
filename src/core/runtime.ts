import { Session } from "./session.js";
import { handleChatMessage } from "./chat.js";
import { getCommand } from "../commands/registry.js";
import { CommandResults } from "../commands/types.js";
import { parseCommands } from "../commands/parser.js";

export function handleInput(session: Session, input: string): CommandResults {
  const trimedInput = input.trim();
  if (trimedInput.length === 0) {
    return {
      message: "",
    };
  }
  const parsedCommand = parseCommands(trimedInput);
  if (parsedCommand) {
    const command = getCommand(parsedCommand.name);
    if (!command) {
      return {
        message: `Unknown Command ${parsedCommand.name}`,
      };
    }

    return command.execute({ session }, parsedCommand.args);
  }
  return handleChatMessage(session, trimedInput);
}
