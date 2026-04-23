import { resolve } from "node:path";
import { Command } from "../types.js";
import { existsSync, readFileSync, statSync } from "node:fs";

export const readCommand: Command = {
  name: "read",
  description: "Read the content of the file",
  execute(context, args) {
    if (args.length === 0) {
      return {
        message: "Nothing",
      };
    }

    const filePath = resolve(context.session.workspacePath, args.join("\n"));
    if (!existsSync(filePath)) {
      return {
        message: "File not found",
      };
    }

    if (!statSync(filePath).isDirectory()) {
      return {
        message: `File is not a directory or file.`,
      };
    }

    const content = readFileSync(filePath, "utf-8");
    const preview =
      content.length > 4000
        ? `${content.slice(0, 4000)}\n\n.......[Truncated]`
        : `${content}`;

    return {
      message: [`Reading file ${filePath}`, "", preview].join("\n"),
    };
  },
};
