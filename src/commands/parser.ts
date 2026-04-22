import { ParsedCommand } from "./types.js";


export function parseCommands(input : string) : ParsedCommand | null{
    const trimedInput = input.trim();
    if(!trimedInput.startsWith("/")){
        return null;
    }

    const parts = trimedInput.slice(1).trim().split(/\s+/).filter(Boolean);
    if(parts.length === 0){
        return null;
    }

    const [name, ...args] = parts

    return {
        name : name.toLowerCase(),
        args
    }
}