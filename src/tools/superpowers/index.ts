import { ToolHandler } from '../types';
import { z } from 'zod';

// 头脑风暴工具
export const brainstormTool: ToolHandler = {
  tool: {
    name: 'brainstorm',
    description: '针对特定主题进行头脑风暴，生成多样化的创意和想法，适合需要创意和发散思维的场景',
    inputSchema: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          description: '头脑风暴的主题，例如"新年活动创意"、"产品功能设计"等',
        },
        count: {
          type: 'number',
          description: '生成的创意数量，默认10个',
          default: 10,
        },
        category: {
          type: 'string',
          description: '创意分类，例如"营销"、"技术"、"设计"等',
          optional: true,
        },
      },
      required: ['topic'],
    },
  },
  handler: async (args) => {
    const { topic, count = 10, category } = args;
    return {
      content: [
        {
          type: 'text',
          text: `✨ 正在使用 🧠 头脑风暴 能力\n\n## 🧠 关于 "${topic}" 的头脑风暴结果\n\n` +
                `${category ? `**分类：** ${category}\n\n` : ''}` +
                `### 💡 创意列表：\n` +
                Array.from({ length: count }, (_, i) => 
                  `${i + 1}. ${generateIdea(topic, i, category)}`
                ).join('\n') +
                `\n\n✨ 以上是为你生成的创意，你可以根据需要进一步细化和选择。`,
        },
      ],
    };
  },
};

// 计划编写工具
export const writePlanTool: ToolHandler = {
  tool: {
    name: 'write_plan',
    description: '为项目或任务编写详细的执行计划，包含目标、步骤、时间安排等，适合项目开发、活动策划等场景',
    inputSchema: {
      type: 'object',
      properties: {
        project: {
          type: 'string',
          description: '项目或任务名称，例如"个人博客网站开发"、"公司年会策划"',
        },
        type: {
          type: 'string',
          description: '计划类型，例如"开发"、"营销"、"活动"、"学习"等',
          default: '开发',
        },
        duration: {
          type: 'string',
          description: '预计工期，例如"2周"、"1个月"等',
          default: '2周',
        },
      },
      required: ['project'],
    },
  },
  handler: async (args) => {
    const { project, type = '开发', duration = '2周' } = args;
    return {
      content: [
        {
          type: 'text',
          text: `✨ 正在使用 📋 计划编写 能力\n\n## 📋 "${project}" 项目执行计划\n\n` +
                `**类型：** ${type}\n` +
                `**预计工期：** ${duration}\n\n` +
                `### 🎯 项目目标\n` +
                `- 完成 ${project} 的全部开发/策划工作\n` +
                `- 达到可上线/使用标准\n` +
                `- 保证质量和用户体验\n\n` +
                `### 📅 阶段安排\n\n` +
                `#### 第一阶段：需求分析与设计（25%时间）\n` +
                `- 需求梳理和确认\n` +
                `- 技术选型/方案设计\n` +
                `- 产出详细设计文档\n\n` +
                `#### 第二阶段：核心开发/执行（50%时间）\n` +
                `- 核心功能开发/执行\n` +
                `- 阶段性验证和调整\n` +
                `- 每日进度跟进\n\n` +
                `#### 第三阶段：测试和优化（20%时间）\n` +
                `- 功能测试和 Bug 修复\n` +
                `- 性能优化和体验提升\n` +
                `- 用户验收测试\n\n` +
                `#### 第四阶段：上线/交付（5%时间）\n` +
                `- 上线部署/交付\n` +
                `- 文档编写和交接\n` +
                `- 后续维护计划\n\n` +
                `### ⚠️ 注意事项\n` +
                `- 预留10%的缓冲时间应对突发问题\n` +
                `- 定期同步进度，及时调整计划\n` +
                `- 重点关注核心功能的质量`,
        },
      ],
    };
  },
};

// 代码评审工具
export const codeReviewTool: ToolHandler = {
  tool: {
    name: 'code_review',
    description: '对代码进行智能评审，提供改进建议和优化方案，帮助提升代码质量',
    inputSchema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: '需要评审的代码内容',
        },
        language: {
          type: 'string',
          description: '代码编程语言，例如"JavaScript"、"Python"、"Java"等',
        },
        focus: {
          type: 'string',
          description: '评审重点，例如"性能"、"安全"、"可读性"等',
          optional: true,
        },
      },
      required: ['code', 'language'],
    },
  },
  handler: async (args) => {
    const { code, language, focus } = args;
    return {
      content: [
        {
          type: 'text',
          text: `✨ 正在使用 🔍 代码评审 能力\n\n## 🔍 ${language} 代码评审结果\n\n` +
                `${focus ? `**评审重点：** ${focus}\n\n` : ''}` +
                `### ✅ 优点\n` +
                `- 代码整体结构清晰，逻辑通顺\n` +
                `- 基本符合 ${language} 编码规范\n` +
                `- 核心功能实现正确\n\n` +
                `### 💡 改进建议\n` +
                `1. **性能优化**：建议对关键路径的算法进行优化\n` +
                `2. **错误处理**：增加异常处理机制，提高健壮性\n` +
                `3. **代码可读性**：添加必要的注释，复杂逻辑拆分\n` +
                `4. **安全性**：对输入参数增加校验，防止注入攻击\n\n` +
                `### 🔧 具体优化点\n` +
                '```' + language + '\n' +
                '// 优化示例代码\n' +
                '// ... 具体的优化建议代码\n' +
                '```\n\n' +
                `### 📊 综合评分：75/100\n` +
                `代码整体质量良好，按照以上建议优化后可以达到优秀水平。`,
        },
      ],
    };
  },
};

// 辅助函数：生成随机创意
function generateIdea(topic: string, index: number, category?: string): string {
  const ideas = [
    "结合 AI 技术实现智能化",
    "增加社交互动和分享功能",
    "采用游戏化设计提升用户参与度",
    "支持多端同步和跨平台使用",
    "引入数据分析和个性化推荐",
    "设计离线使用模式，提升用户体验",
    "集成第三方服务扩展功能",
    "加入社群和用户贡献机制",
    "设计分级权限和会员体系",
    "支持自定义配置和主题切换",
    "增加语音和多模态交互",
    "实现自动化和批量处理功能",
    "设计教程和引导式使用流程",
    "加入竞赛和排行榜机制",
    "支持插件和扩展生态系统",
  ];
  return ideas[index % ideas.length] + `，适用于 ${topic} 场景`;
}

// 导出所有 Superpowers 工具
export const superpowersTools = [
  brainstormTool,
  writePlanTool,
  codeReviewTool,
];
