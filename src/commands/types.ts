import type {Session} from "../core/session.js"

export type ParsedCommand = {
    name : string,
    args : string[]
}

export type CommandResults = {
    message : string,
    shouldExit?: boolean
}

export type CommandContext = {
    session : Session 
}

export type Command = {
    name : string,
    description : string,
    execute : (context : CommandContext, args : string[]) => CommandResults
};