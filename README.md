# 🚀 超级 MCP 服务器

Super MCP 是集成了 [Superpowers](https://github.com/obra/superpowers) 和 [Get Shit Done](https://github.com/gsd-build/get-shit-done) 所有能力的统一 MCP (Model Context Protocol) 服务器，完美适配 Trae、Claude Desktop、Cursor 等 MCP 客户端。

## ✨ 核心特性

- 🧠 **双系统融合**：同时拥有 Superpowers 和 GSD 的全部功能
- 🤖 **自动识别**：无需特殊指令，中文日常聊天即可自动调用对应功能
- 🔧 **零配置使用**：安装后即可使用，无需额外设置
- 🇨🇳 **完美中文支持**：针对中文使用场景深度优化
- 🔌 **无缝集成**：完美适配 Trae、Claude Desktop、Cursor 等 MCP 客户端
- ⚡ **高性能**：基于 TypeScript 开发，运行高效稳定

## 📦 安装

### 全局安装（推荐）

```bash
npm install -g super-mcp
```

### 从源码安装

```bash
git clone https://github.com/xinyuzjj/super-mcp.git
cd super-mcp
npm install
npm run build
npm link
```

## 🚀 快速开始

### 1. 安装 Super MCP

```bash
npm install -g super-mcp
```

### 2. 配置到 MCP 客户端

根据你使用的客户端，选择对应的配置方式：

#### Trae

在 Trae 的 MCP 配置文件中添加：

```json
{
  "mcpServers": {
    "super-mcp": {
      "command": "super-mcp"
    }
  }
}
```

#### Claude Desktop

编辑配置文件：
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "super-mcp": {
      "command": "super-mcp"
    }
  }
}
```

#### Cursor

在 Cursor 的 MCP 设置中添加：

```json
{
  "mcpServers": {
    "super-mcp": {
      "command": "super-mcp"
    }
  }
}
```

### 3. 开始使用

重启你的 MCP 客户端，然后直接开始对话：

```
用户：帮我设计一个个人博客网站
-> Super MCP 自动调用 GSD 的项目规划和执行能力

用户：帮我想几个新年活动的创意
-> Super MCP 自动调用 Superpowers 的头脑风暴能力
```

## 🔧 配置到不同客户端

### Trae 配置

1. 打开 Trae 设置
2. 导航到 MCP 配置页面
3. 添加以下配置：

```json
{
  "mcpServers": {
    "super-mcp": {
      "command": "super-mcp"
    }
  }
}
```

4. 保存并重启 Trae

### Claude Desktop 配置

1. 打开 Claude Desktop
2. 进入设置 > 开发者 > MCP 服务器
3. 点击 "编辑配置"
4. 添加以下配置：

```json
{
  "mcpServers": {
    "super-mcp": {
      "command": "super-mcp"
    }
  }
}
```

5. 保存并重启 Claude Desktop

### Cursor 配置

1. 打开 Cursor 设置
2. 找到 MCP 配置选项
3. 添加以下配置：

```json
{
  "mcpServers": {
    "super-mcp": {
      "command": "super-mcp"
    }
  }
}
```

4. 保存并重启 Cursor

## 🛠️ 内置功能

### 📋 Superpowers 能力

- 🧠 **头脑风暴**：快速生成创意和想法
- 📝 **计划编写**：智能生成项目开发计划
- ⚡ **计划执行**：自动化执行开发任务
- 🔍 **系统性调试**：智能定位和修复代码问题
- 🧪 **测试驱动开发**：自动生成测试用例
- 👥 **子代理并行开发**：多代理协作完成复杂任务
- 📋 **代码评审**：智能代码审查和优化建议
- 🔄 **Git 工作流**：自动化 Git 操作和版本管理
- ✅ **完成前验证**：多轮验证确保输出质量
- 📖 **技能编写**：自定义扩展新的技能

### 🚀 Get Shit Done 能力

- 🎯 **项目管理**：完整的项目生命周期管理
- 📊 **里程碑规划**：智能拆分项目为可执行里程碑
- 📈 **阶段执行**：分阶段执行开发任务，保证质量
- 🐛 **智能调试**：自动定位和修复代码缺陷
- 🔬 **代码库分析**：自动理解现有项目结构
- 📚 **研究合成**：自动收集和整理技术信息
- ✅ **质量验证**：内置多轮验证机制，确保代码质量
- 📝 **文档生成**：自动生成项目文档和说明
- 🔄 **持续集成**：自动化构建、测试和部署流程

## 💡 使用示例

### 日常使用场景

```
用户：帮我设计一个个人博客网站
-> 自动调用 GSD 的项目规划和执行能力，生成完整的项目方案和代码

用户：帮我想几个新年活动的创意
-> 自动调用 Superpowers 的头脑风暴能力，生成多样化的创意

用户：这个 bug 帮我看看为什么登录会失败
-> 自动调用调试技能，分析问题并提供解决方案

用户：帮我做一个项目的技术选型
-> 自动调用研究和规划能力，生成完整的技术选型报告
```

### 无需特殊指令

所有功能都会根据你的聊天内容自动识别和调用，不需要特殊的触发词或命令。

## 📚 API 文档

Super MCP 实现了标准的 Model Context Protocol (MCP) 接口。详细的 API 文档请参考：

- [MCP 协议规范](https://modelcontextprotocol.io/)
- [示例代码](./examples/) - 查看 `examples/` 目录获取使用示例

### 核心工具

| 工具名称 | 描述 | 所属系统 |
|---------|------|---------|
| `brainstorm` | 头脑风暴生成创意 | Superpowers |
| `plan` | 项目计划编写 | Superpowers |
| `execute` | 计划执行 | Superpowers |
| `debug` | 系统性调试 | Superpowers |
| `project_init` | 项目初始化 | GSD |
| `milestone_plan` | 里程碑规划 | GSD |
| `phase_execute` | 阶段执行 | GSD |
| `code_review` | 代码审查 | 共用 |

## 📁 项目结构

```
super-mcp/
├── src/
│   ├── index.ts              # MCP 服务器主入口
│   ├── tools/                # 所有 MCP 工具定义
│   │   ├── superpowers/      # Superpowers 相关工具
│   │   └── gsd/              # GSD 相关工具
│   │   └── types.ts          # 类型定义
├── examples/                 # 使用示例
├── dist/                     # 编译输出目录
└── package.json
```

## 🔧 开发指南

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/xinyuzjj/super-mcp.git
cd super-mcp

# 安装依赖
npm install

# 构建项目
npm run build

# 开发模式（自动监听文件变化）
npm run dev

# 运行测试
npm test
```

### 添加新功能

1. 在 `src/tools/` 目录下添加新的工具定义
2. 更新相关类型定义
3. 重新构建：`npm run build`
4. 测试新功能

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

### 提交规范

- 使用语义化提交信息
- 确保代码通过所有测试
- 更新相关文档

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 感谢 [obra](https://github.com/obra) 开发的 [superpowers](https://github.com/obra/superpowers) 项目
- 感谢 [TÂCHES](https://github.com/gsd-build) 开发的 [get-shit-done](https://github.com/gsd-build/get-shit-done) 项目
- 感谢 MCP 协议提供的标准化扩展能力

## 🔗 相关链接

- [GitHub 仓库](https://github.com/xinyuzjj/super-mcp)
- [问题反馈](https://github.com/xinyuzjj/super-mcp/issues)
- [NPM 包](https://www.npmjs.com/package/@mcp/super-mcp)
