# Super MCP 使用示例

本目录包含 Super MCP 的各种使用示例，帮助你快速上手。

## 文件说明

### basic-usage.js
基础使用示例，展示了：
- 如何在 Node.js 中启动和连接 MCP 服务器
- 项目管理场景示例
- 创意生成场景示例
- 代码开发场景示例

## 运行示例

```bash
# 确保已经构建项目
npm run build

# 运行基础示例
node examples/basic-usage.js
```

## 实际使用场景

### 在 Trae 中使用

1. 打开 Trae 设置
2. 找到 MCP 配置
3. 添加 Super MCP：
```json
{
  "mcpServers": {
    "super-mcp": {
      "command": "super-mcp"
    }
  }
}
```

### 在 Claude Desktop 中使用

编辑 `~/Library/Application Support/Claude/claude_desktop_config.json`：

```json
{
  "mcpServers": {
    "super-mcp": {
      "command": "super-mcp"
    }
  }
}
```

### 在 Cursor 中使用

1. 打开 Cursor 设置
2. 找到 MCP 配置
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

## 示例对话

### 项目管理
```
用户：帮我规划一个电商网站项目
AI：我来帮你规划这个项目。首先，让我分析一下需求...

用户：创建里程碑计划
AI：好的，我将为这个项目创建以下里程碑...
```

### 创意生成
```
用户：帮我想几个新年促销活动的创意
AI：以下是几个新年促销活动创意：...

用户：哪个方案最适合小型团队执行？
AI：考虑到小型团队的资源限制，我建议...
```

### 代码开发
```
用户：帮我写一个用户认证的 API
AI：我来为你设计一个完整的用户认证 API：...

用户：添加密码重置功能
AI：好的，我来添加密码重置功能：...
```

## 更多示例

欢迎提交更多使用示例！你可以：
1. Fork 本仓库
2. 在 `examples/` 目录下添加你的示例
3. 提交 Pull Request
