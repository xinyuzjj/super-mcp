import { Tool } from '@modelcontextprotocol/sdk/types.js';

export interface ToolHandler {
  tool: Tool;
  handler: (args: any) => Promise<any>;
}

export interface Skill {
  name: string;
  description: string;
  examples: string[];
  keywords: string[];
  handler: (context: any, args: any) => Promise<any>;
}

export interface Command {
  name: string;
  description: string;
  examples: string[];
  keywords: string[];
  handler: (args: any) => Promise<any>;
}
