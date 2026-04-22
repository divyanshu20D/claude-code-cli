#!/usr/bin/env node
import readline from "node:readline";
import { createSession } from "./core/session.js";
import { handleInput } from "./core/runtime.js";

const workspacePath = process.cwd();

const session = createSession(workspacePath);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser() {
  rl.question("> ", (input) => {
    const message = input.trim();
    const result = handleInput(session, input);

    if (result.message) {
      console.log("result", result.message);
    }
    if (result.shouldExit) {
      rl.close();
      return;
    }
    promptUser();
  });
}

promptUser();
console.log("mycli started");
console.log(`workspace: ${workspacePath}`);
