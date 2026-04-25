import { supportedProviders } from "../../core/provider-options.js";
import { Command } from "../types.js";

export const providersCommand: Command = {
  name: "providers",
  description: "List all the providers",
  execute() {
    return {
      message: ["Available providers:", ...supportedProviders].join("\n"),
    };
  },
};
