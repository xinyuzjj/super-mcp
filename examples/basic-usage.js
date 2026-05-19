#!/usr/bin/env node

/**
 * Super MCP 基础使用示例
 * 
 * 本示例展示了如何在 Node.js 项目中使用 Super MCP 的各种功能
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * 启动 Super MCP 服务器并与之通信
 */
async function startSuperMCP() {
  console.log('🚀 启动 Super MCP 服务器...\n');

  // 启动 MCP 服务器
  const mcpProcess = spawn('node', [join(__dirname, '../dist/index.js')], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  // 处理输出
  mcpProcess.stdout.on('data', (data) => {
    console.log('📥 收到消息:', data.toString());
  });

  mcpProcess.stderr.on('data', (data) => {
    console.error('⚠️  错误:', data.toString());
  });

  mcpProcess.on('close', (code) => {
    console.log(`\n👋 MCP 服务器已关闭，退出码: ${code}`);
  });

  // 发送初始化请求
  const initRequest = {
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: {
        name: 'super-mcp-example',
        version: '1.0.0'
      }
    }
  };

  console.log('📤 发送初始化请求...');
  mcpProcess.stdin.write(JSON.stringify(initRequest) + '\n');

  // 等待一段时间后关闭
  setTimeout(() => {
    console.log('\n🛑 关闭 MCP 服务器...');
    mcpProcess.kill();
  }, 5000);
}

/**
 * 使用示例：项目管理
 */
async function projectManagementExample() {
  console.log('\n📋 项目管理示例');
  console.log('================');
  console.log('
你可以向 Super MCP 发送如下请求：');
  console.log('- "帮我规划一个电商网站项目"');
  console.log('- "创建一个个人博客的开发计划"');
  console.log('- "分析当前项目的代码结构"');
  console.log('- "帮我调试这个登录功能的问题"');
}

/**
 * 使用示例：创意生成
 */
async function creativityExample() {
  console.log('\n💡 创意生成示例');
  console.log('================');
  console.log('\n你可以向 Super MCP 发送如下请求：');
  console.log('- "帮我想几个新年促销活动的创意"');
  console.log('- "为我的产品设计几个新功能"');
  console.log('- "帮我头脑风暴一下这个项目的解决方案"');
}

/**
 * 使用示例：代码开发
 */
async function developmentExample() {
  console.log('\n💻 代码开发示例');
  console.log('================');
  console.log('\n你可以向 Super MCP 发送如下请求：');
  console.log('- "帮我写一个用户认证的 API"');
  console.log('- "为这段代码编写单元测试"');
  console.log('- "帮我重构这个函数，让它更易读"');
  console.log('- "分析一下这个 bug 的原因"');
}

/**
 * 主函数
 */
async function main() {
  console.log('╔════════════════════════════════════════╗');
  console.log('║     Super MCP 基础使用示例             ║');
  console.log('╚════════════════════════════════════════╝\n');

  // 展示各种使用场景
  await projectManagementExample();
  await creativityExample();
  await developmentExample();

  console.log('\n\n📚 更多信息：');
  console.log('- 查看 README.md 获取完整的配置说明');
  console.log('- 访问 https://github.com/xinyuzjj/super-mcp 获取最新文档');
  console.log('- 在 Trae、Claude Desktop 或 Cursor 中配置后直接使用\n');

  // 可选：启动 MCP 服务器进行测试
  // await startSuperMCP();
}

// 运行示例
main().catch(console.error);
