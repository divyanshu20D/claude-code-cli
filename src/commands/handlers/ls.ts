import { readdirSync } from "node:fs";
import { Command } from "../types.js";

export const lsCommand: Command = {
  name: "ls",
  description: "Show all the files in the directory",
  execute(context) {
    try {
      const entries = readdirSync(context.session.workspacePath, {
        withFileTypes: true,
      })
        .slice(0, 50)
        .map((entry) =>
          entry.isDirectory() ? `[DIR] ${entry.name}` : entry.name,
        );

      if (entries.length === 0) {
        return {
          message: `No files in ${context.session.workspacePath} directory.`,
        };
      }
      return {
        message: entries.join("\n"),
      };
    } catch (error) {
      return {
        message: `Failed to load files ${(error as Error).message}`,
      };
    }
  },
};
