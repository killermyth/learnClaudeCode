# Claude Code 学习项目

深入学习和理解Claude Code的工作原理、架构设计和开发最佳实践。

## 📚 项目结构

```
learnClaudeCode/
├── docs/                          # 文档目录
│   ├── ARCHITECTURE.md           # Claude Code 架构文档
│   ├── TOOLS.md                  # 工具系统文档
│   ├── CODE_GENERATION.md        # 代码生成策略
│   └── WORKFLOW.md               # 工作流程文档
├── examples/                      # 学习示例
│   ├── basic_file_operations.md  # 基础文件操作
│   ├── code_search.md            # 代码搜索示例
│   └── task_management.md        # 任务管理示例
├── src/                           # 源代码目录（待填充）
├── resources/                     # 资源目录
├── claude_code_architecture.tsx  # 架构可视化组件
├── package.json                  # 项目配置
├── .gitignore                    # Git忽略文件
└── README.md                     # 项目说明（本文件）
```

## 🎯 核心学习内容

### 1. 架构设计
- 单线程主循环模式
- 工具集成系统
- 代码生成与执行机制

### 2. 工具系统
- 文件操作工具
- 代码分析工具
- 执行工具
- 项目管理工具

### 3. 代码生成
- 增量修改策略
- 代码质量保证
- 修改验证机制

### 4. 工作流程
- 请求处理流程
- 决策制定方式
- 交互模式设计

## 📖 文档导航

| 文档 | 说明 |
|------|------|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | 系统架构和核心概念 |
| [TOOLS.md](docs/TOOLS.md) | 工具系统详解 |
| [CODE_GENERATION.md](docs/CODE_GENERATION.md) | 代码生成策略 |
| [WORKFLOW.md](docs/WORKFLOW.md) | 工作流程和最佳实践 |

## 💡 学习路线

1. **基础概念** → 阅读 [ARCHITECTURE.md](docs/ARCHITECTURE.md)
2. **工具系统** → 学习 [TOOLS.md](docs/TOOLS.md)
3. **代码生成** → 掌握 [CODE_GENERATION.md](docs/CODE_GENERATION.md)
4. **实践应用** → 查看 [examples/](examples/)
5. **工作流程** → 深入 [WORKFLOW.md](docs/WORKFLOW.md)

## 🛠️ 工具速查表

### 文件操作
- `create_file` - 创建新文件
- `read_file` - 读取文件内容
- `replace_string_in_file` - 替换文件内容
- `multi_replace_string_in_file` - 批量修改文件

### 代码分析
- `grep_search` - 文本搜索
- `file_search` - 文件搜索
- `semantic_search` - 语义搜索
- `list_code_usages` - 列出使用情况

### 执行与任务
- `run_in_terminal` - 执行命令
- `manage_todo_list` - 任务管理
- `run_notebook_cell` - 运行Notebook

## 📝 关键概念

### 单线程主循环
Claude Code采用单线程事件循环，依次处理用户请求，保证执行顺序和状态一致性。

### 工具集成
严格定义的工具接口，支持文件操作、代码执行、系统命令等多种操作。

### 增量修改
优先使用局部修改而非重写，减少副作用，提高修改精确度。

### 任务分解
将复杂任务分解为可追踪的子任务，使用任务列表管理进度。

## 🎓 学习目标

- ✅ 理解Claude Code的核心架构
- ✅ 掌握工具系统的使用方法
- ✅ 学习代码生成的最佳实践
- ✅ 了解工作流程和决策逻辑
- ✅ 能够高效地使用Claude Code

## 📚 相关资源

- [Claude Code 架构可视化](claude_code_architecture.tsx)
- [工具文档](docs/TOOLS.md)
- [示例代码](examples/)

## 🤝 贡献

欢迎补充更多学习资源和最佳实践示例。

## 📄 许可证

MIT
