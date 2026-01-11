/**
 * Claude Code 学习项目主入口
 * 
 * 本项目用于深入学习Claude Code的架构和工作原理
 */

// 工具类型定义示例
interface Tool {
  name: string;
  description: string;
  category: 'file' | 'code-analysis' | 'execution' | 'project-management' | 'special';
  parameters?: Record<string, unknown>;
}

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

interface WorkflowStep {
  name: string;
  action: string;
  description: string;
  tools: string[];
}

// 工具集合
export const TOOLS: Record<string, Tool> = {
  // 文件操作
  create_file: {
    name: 'create_file',
    description: '创建新文件',
    category: 'file',
  },
  read_file: {
    name: 'read_file',
    description: '读取文件内容',
    category: 'file',
  },
  replace_string_in_file: {
    name: 'replace_string_in_file',
    description: '替换文件内容',
    category: 'file',
  },
  // 代码分析
  grep_search: {
    name: 'grep_search',
    description: '文本搜索',
    category: 'code-analysis',
  },
  semantic_search: {
    name: 'semantic_search',
    description: '语义搜索',
    category: 'code-analysis',
  },
  list_code_usages: {
    name: 'list_code_usages',
    description: '列出代码使用情况',
    category: 'code-analysis',
  },
};

// 工作流程示例
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    name: '请求理解',
    action: '解析用户输入',
    description: '理解用户需求和上下文',
    tools: [],
  },
  {
    name: '任务分解',
    action: '将大任务分解成小步骤',
    description: '制定执行计划',
    tools: ['manage_todo_list'],
  },
  {
    name: '信息收集',
    action: '收集必要的代码和文件信息',
    description: '读取相关文件，分析代码结构',
    tools: ['read_file', 'grep_search', 'semantic_search'],
  },
  {
    name: '方案制定',
    action: '设计修改或实现方案',
    description: '确定工具选择和执行顺序',
    tools: [],
  },
  {
    name: '执行修改',
    action: '使用工具执行修改',
    description: '创建文件、修改代码、执行命令',
    tools: ['create_file', 'replace_string_in_file', 'run_in_terminal'],
  },
  {
    name: '验证结果',
    action: '验证修改是否完成',
    description: '检查代码正确性，测试功能',
    tools: ['get_errors', 'run_notebook_cell'],
  },
  {
    name: '反馈用户',
    action: '提供进展和结果信息',
    description: '清晰的进度和结果报告',
    tools: [],
  },
];

// 最佳实践
export const BEST_PRACTICES = {
  file_operations: [
    '在修改前先读取文件内容',
    '包含3-5行上下文确保唯一匹配',
    '使用multi_replace_string_in_file批量修改',
    '验证修改结果的正确性',
  ],
  code_generation: [
    '优先使用增量修改而非重写',
    '保持代码风格和结构一致',
    '添加适当的类型注解',
    '包含错误处理和验证',
  ],
  task_management: [
    '将复杂任务分解为小步骤',
    '及时更新任务状态',
    '一次只标记一个任务为in-progress',
    '完成后立即更新为completed',
  ],
  tool_usage: [
    '选择最合适的工具完成任务',
    '并行执行无依赖的工具调用',
    '等待前一步结果再进行下一步',
    '处理工具调用失败的情况',
  ],
};

// 导出类型和常量
export type { Tool, Task, WorkflowStep };
