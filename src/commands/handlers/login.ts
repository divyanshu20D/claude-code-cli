import { setLoginState } from "../../core/session.js";
import { Command } from "../types.js";

export const loginCommand: Command = {
  name: "login",
  description: "Login status",
  execute(context, args) {
    if (args.length === 0) {
      return {
        message: "Nothing",
      };
    }

    const mode = args[0].toLowerCase();
    if (mode !== "subscription" && mode !== "api-key") {
      return {
        message: "Invlaid login mode.",
      };
    }

    setLoginState(context.session, true, mode);
    return {
      message: `Logged in for this session using ${mode}`,
    };
  },
};
