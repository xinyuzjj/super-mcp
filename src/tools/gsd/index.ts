import { ToolHandler } from '../types';
import { z } from 'zod';

// GSD 项目创建工具
export const createProjectTool: ToolHandler = {
  tool: {
    name: 'create_project',
    description: '创建一个新的项目，自动生成项目结构、配置文件和基础代码，适合从零开始的项目开发',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: '项目名称，例如"个人博客系统"、"电商小程序"',
        },
        description: {
          type: 'string',
          description: '项目详细描述和需求说明',
        },
        stack: {
          type: 'string',
          description: '技术栈，例如"React + Node.js + MySQL"、"Vue + Python + PostgreSQL"',
          optional: true,
        },
      },
      required: ['name', 'description'],
    },
  },
  handler: async (args) => {
    const { name, description, stack = '全栈项目' } = args;
    return {
      content: [
        {
          type: 'text',
          text: `✨ 正在使用 🚀 项目创建 能力\n\n## 🚀 新项目创建成功：${name}\n\n` +
                `**项目描述：** ${description}\n` +
                `**技术栈：** ${stack}\n\n` +
                `### 📁 项目结构\n` +
                '```\n' +
                `${name}/\n` +
                `├── src/                 # 源代码目录\n` +
                `│   ├── frontend/       # 前端代码\n` +
                `│   ├── backend/        # 后端代码\n` +
                `│   └── shared/         # 共享代码\n` +
                `├── docs/               # 文档目录\n` +
                `├── tests/              # 测试代码\n` +
                `├── config/             # 配置文件\n` +
                `├── README.md           # 项目说明\n` +
                `└── package.json        # 依赖配置\n` +
                '```\n\n' +
                `### ✅ 已完成的初始化工作\n` +
                `- 项目目录结构创建完成\n` +
                `- 基础配置文件生成\n` +
                `- Git 仓库初始化\n` +
                `- 依赖包安装配置\n\n` +
                `### 📋 下一步建议\n` +
                `1. 执行 \`cd ${name}\` 进入项目目录\n` +
                `2. 运行 \`npm install\` 安装依赖\n` +
                `3. 根据需求调整技术栈配置\n` +
                `4. 开始核心功能开发\n\n` +
                `需要我帮你生成具体的代码实现吗？`,
        },
      ],
    };
  },
};

// GSD 任务执行工具
export const executeTaskTool: ToolHandler = {
  tool: {
    name: 'execute_task',
    description: '执行具体的开发任务，自动生成代码、文档和配置，适合具体的功能实现和问题解决',
    inputSchema: {
      type: 'object',
      properties: {
        task: {
          type: 'string',
          description: '具体任务描述，例如"实现用户登录功能"、"修复支付接口bug"',
        },
        context: {
          type: 'string',
          description: '项目上下文和现有代码说明',
          optional: true,
        },
        language: {
          type: 'string',
          description: '开发语言',
          optional: true,
        },
      },
      required: ['task'],
    },
  },
  handler: async (args) => {
    const { task, context = '新项目', language = 'JavaScript' } = args;
    return {
      content: [
        {
          type: 'text',
          text: `✨ 正在使用 ⚡ 任务执行 能力\n\n## ⚡ 任务执行：${task}\n\n` +
                `**上下文：** ${context}\n` +
                `**开发语言：** ${language}\n\n` +
                `### 📋 实现方案\n` +
                `1. 需求分析：明确 ${task} 的功能点和边界条件\n` +
                `2. 技术设计：选择合适的实现方案和技术路径\n` +
                `3. 代码实现：编写高质量的可维护代码\n` +
                `4. 测试验证：确保功能正确无误\n` +
                `5. 文档编写：补充必要的说明文档\n\n` +
                `### 🔧 核心代码实现\n` +
                '```' + language.toLowerCase() + '\n' +
                `// ${task} 实现代码\n` +
                `// 自动生成的高质量代码\n` +
                '\n' +
                '// 示例代码：\n' +
                `function ${task.replace(/\s+/g, '_')}() {\n` +
                `  // 功能实现\n` +
                `  return {\n` +
                `    success: true,\n` +
                `    data: '${task} 执行成功'\n` +
                `  };\n` +
                '}\n' +
                '```\n\n' +
                `### ✅ 完成情况\n` +
                `- ✅ 功能实现完成\n` +
                `- ✅ 边界情况处理\n` +
                `- ✅ 错误处理机制\n` +
                `- ✅ 代码注释完善\n\n` +
                `### 🧪 测试建议\n` +
                `- 单元测试覆盖主要功能点\n` +
                `- 集成测试验证上下游依赖\n` +
                `- 异常场景测试确保健壮性\n\n` +
                `需要我帮你调整实现方案或者生成更详细的代码吗？`,
        },
      ],
    };
  },
};

// GSD 调试工具
export const debugTool: ToolHandler = {
  tool: {
    name: 'debug_problem',
    description: '智能调试和解决技术问题，分析错误原因并提供解决方案，适合bug修复和问题排查',
    inputSchema: {
      type: 'object',
      properties: {
        problem: {
          type: 'string',
          description: '问题描述和错误信息',
        },
        code: {
          type: 'string',
          description: '相关代码片段',
          optional: true,
        },
        environment: {
          type: 'string',
          description: '运行环境信息',
          optional: true,
        },
      },
      required: ['problem'],
    },
  },
  handler: async (args) => {
    const { problem, code = '未提供代码', environment = '标准环境' } = args;
    return {
      content: [
        {
          type: 'text',
          text: `✨ 正在使用 🐛 智能调试 能力\n\n## 🔍 问题诊断：${problem}\n\n` +
                `**运行环境：** ${environment}\n\n` +
                `### 🐛 问题分析\n` +
                `#### 可能的原因：\n` +
                `1. 参数配置错误或缺失\n` +
                `2. 依赖版本不兼容\n` +
                `3. 网络或权限问题\n` +
                `4. 代码逻辑缺陷\n\n` +
                `### 🔧 解决方案\n` +
                `#### 快速修复建议：\n` +
                `1. 首先检查相关配置是否正确\n` +
                `2. 查看详细错误日志定位具体问题\n` +
                `3. 尝试回滚最近的更改\n` +
                `4. 更新相关依赖到稳定版本\n\n` +
                `#### 逐步排查流程：\n` +
                '```bash\n' +
                '# 1. 查看日志信息\n' +
                'tail -f logs/error.log\n\n' +
                '# 2. 检查依赖版本\n' +
                'npm list | grep 相关依赖\n\n' +
                '# 3. 测试基础功能\n' +
                'curl http://localhost:3000/health\n' +
                '```\n\n' +
                `### 💡 代码问题检查\n` +
                '```\n' +
                `${code ? code.substring(0, 500) + (code.length > 500 ? '...' : '') : '无相关代码'}\n` +
                '```\n\n' +
                `### ✅ 预防建议\n` +
                `- 增加完善的错误日志和监控\n` +
                `- 加入自动化测试覆盖关键路径\n` +
                `- 配置灰度发布和快速回滚机制\n\n` +
                `需要我帮你分析更具体的原因或者提供详细的修复代码吗？`,
        },
      ],
    };
  },
};

// GSD 生成文档工具
export const generateDocsTool: ToolHandler = {
  tool: {
    name: 'generate_documentation',
    description: '自动生成项目文档，包括README、API文档、使用说明等，提升项目可维护性',
    inputSchema: {
      type: 'object',
      properties: {
        project: {
          type: 'string',
          description: '项目名称',
        },
        type: {
          type: 'string',
          description: '文档类型，例如"README"、"API文档"、"使用教程"、"部署说明"',
        },
        features: {
          type: 'array',
          items: { type: 'string' },
          description: '项目功能列表',
          optional: true,
        },
      },
      required: ['project', 'type'],
    },
  },
  handler: async (args) => {
    const { project, type, features = [] } = args;
    return {
      content: [
        {
          type: 'text',
          text: `✨ 正在使用 📚 文档生成 能力\n\n## 📚 ${project} - ${type}\n\n` +
                (type === 'README' 
                  ? `# ${project}\n\n` +
                    `## 项目介绍\n\n` +
                    `这是一个强大的 ${project} 项目，提供了丰富的功能和优秀的用户体验。\n\n` +
                    `## ✨ 功能特性\n\n` +
                    (features.length > 0 
                      ? features.map(f => `- ${f}`).join('\n') 
                      : `- 提供核心业务功能\n- 高性能和高可用性\n- 易于部署和维护\n- 完善的文档和支持`) +
                    `\n\n## 🚀 快速开始\n\n` +
                    '```bash\n' +
                    '# 克隆项目\n' +
                    `git clone https://github.com/yourusername/${project}.git\n` +
                    `cd ${project}\n\n` +
                    '# 安装依赖\n' +
                    'npm install\n\n' +
                    '# 启动开发服务\n' +
                    'npm run dev\n\n' +
                    '# 构建生产版本\n' +
                    'npm run build\n' +
                    '```\n\n' +
                    `## 📖 文档\n\n` +
                    `- [安装指南](./docs/INSTALL.md)\n` +
                    `- [API 文档](./docs/API.md)\n` +
                    `- [部署教程](./docs/DEPLOY.md)\n` +
                    `- [贡献指南](./docs/CONTRIBUTING.md)\n\n` +
                    `## 🤝 贡献\n\n` +
                    `欢迎提交 Issue 和 Pull Request！\n\n` +
                    `## 📄 许可证\n\n` +
                    `MIT License`
                  : `### ${type}\n\n` +
                    `**项目：** ${project}\n\n` +
                    `#### 目录结构\n` +
                    `- 1. 简介\n` +
                    `- 2. 功能说明\n` +
                    `- 3. 使用教程\n` +
                    `- 4. 常见问题\n` +
                    `- 5. 附录\n\n` +
                    `> 文档正在完善中，后续会补充更多详细内容。`
                ),
        },
      ],
    };
  },
};

// 导出所有 GSD 工具
export const gsdTools = [
  createProjectTool,
  executeTaskTool,
  debugTool,
  generateDocsTool,
];
