import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { Command } from "../types.js";

const ignoredDirs = new Set([".git", "node_modules", "dist"]);

function walk(dir: string): string[] {
  const files: string[] = [];

  for (const entry of readdirSync(dir)) {
    if (ignoredDirs.has(entry)) continue;

    const path = join(dir, entry);
    const stat = statSync(path);

    if (stat.isDirectory()) {
      files.push(...walk(path));
    } else {
      files.push(path);
    }
  }

  return files;
}

export const searchCommand: Command = {
  name: "search",
  description: "Search text in workspace files",
  execute(context, args) {
    const query = args.join(" ");

    if (!query) {
      return { message: "Usage: /search <text>" };
    }

    const matches = walk(context.session.workspacePath)
      .flatMap((file) => {
        try {
          const lines = readFileSync(file, "utf-8").split("\n");

          return lines
            .map((line, index) => ({ file, line, number: index + 1 }))
            .filter((result) =>
              result.line.toLowerCase().includes(query.toLowerCase()),
            );
        } catch {
          return [];
        }
      })
      .slice(0, 50);

    if (matches.length === 0) {
      return { message: `No matches for "${query}".` };
    }

    return {
      message: matches
        .map((match) => `${match.file}:${match.number}: ${match.line.trim()}`)
        .join("\n"),
    };
  },
};
