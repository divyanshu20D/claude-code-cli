import { readSync } from "node:fs";
import { Command } from "../types.js";
import { execSync } from "node:child_process";

export const gitStatusCommand: Command = {
  name: "git-status",
  description: "Show Git status of the current workspace",
  execute(context) {
    try {
      const output = execSync("git status --short", {
        cwd: context.session.workspacePath,
        encoding: "utf-8",
      }).trim();

      return {
        message: output || `Working tree is clean`,
      };
    } catch (error) {
      return {
        message:
          "The repository is not a git repository or git is unavailable.",
      };
    }
  },
};
