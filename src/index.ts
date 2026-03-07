import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'
import { superpowersTools } from './tools/superpowers/index.js'
import { gsdTools } from './tools/gsd/index.js'

// 合并所有工具
const allTools = [...superpowersTools, ...gsdTools]
const toolMap = new Map(allTools.map(t => [t.tool.name, t]))

// 创建 MCP 服务器
const server = new Server(
  {
    name: 'super-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
)

// 处理工具列表请求
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: allTools.map(t => t.tool)
  }
})

// 处理工具调用请求
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    const toolName = request.params.name
    const tool = toolMap.get(toolName)
    
    if (!tool) {
      throw new Error(`未知工具: ${toolName}`)
    }

    const result = await tool.handler(request.params.arguments)
    return result

  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `执行失败: ${(error as Error).message}`,
        },
      ],
      isError: true,
    }
  }
})

// 启动服务器
async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error('🚀 超级 MCP 服务器已启动，就绪！')
  console.error('✨ 集成了 Superpowers 和 Get Shit Done 全部能力')
  console.error('🤖 支持中文自然语言自动调用，无需特殊指令')
}

main().catch((error) => {
  console.error('服务器启动失败:', error)
  process.exit(1)
})
