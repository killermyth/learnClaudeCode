import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Terminal, Code, Database, Shield, Zap, GitBranch, Settings, CheckSquare, Layers, ExternalLink } from 'lucide-react';

const ClaudeCodeArchitecture = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-2 text-center">Claude Code 架构设计</h1>
        <p className="text-sm text-slate-600 mb-8 text-center">单线程主循环 + 严格工具集成的自主编码系统</p>
        
        {/* 用户交互层 */}
        <div className="mb-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="text-blue-600" size={20} />
              <h2 className="text-lg font-semibold text-blue-800">用户交互层</h2>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <Terminal size={24} className="mx-auto mb-1 text-blue-600" />
                <p className="text-xs font-medium">CLI</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <Code size={24} className="mx-auto mb-1 text-blue-600" />
                <p className="text-xs font-medium">VS Code Plugin</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <FileText size={24} className="mx-auto mb-1 text-blue-600" />
                <p className="text-xs font-medium">Web UI</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <GitBranch size={24} className="mx-auto mb-1 text-blue-600" />
                <p className="text-xs font-medium">GitHub @claude</p>
              </div>
            </div>
          </div>
        </div>

        {/* 核心调度层 */}
        <div className="mb-6">
          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-purple-600" size={20} />
              <h2 className="text-lg font-semibold text-purple-800">智能体核心调度层</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* 主循环 */}
              <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-purple-200">
                <h3 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  主循环 "nO"
                </h3>
                <div className="text-xs space-y-1 font-mono bg-slate-50 p-2 rounded">
                  <div className="text-purple-600">while (有工具调用):</div>
                  <div className="pl-3 text-slate-600">→ 执行工具</div>
                  <div className="pl-3 text-slate-600">→ 获取结果</div>
                  <div className="pl-3 text-slate-600">→ 更新历史</div>
                  <div className="pl-3 text-slate-600">→ 继续推理</div>
                  <div className="text-green-600 mt-1">纯文本响应 → 结束</div>
                </div>
                <div className="mt-2 text-xs text-slate-600">
                  ✓ 单线程<br/>
                  ✓ 扁平历史<br/>
                  ✓ 明确终止
                </div>
              </div>

              {/* 实时引导 */}
              <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-purple-200">
                <h3 className="font-semibold text-purple-700 mb-2">实时引导 "h2A"</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <p className="text-xs">异步双缓冲队列</p>
                  </div>
                  <div className="text-xs bg-orange-50 p-2 rounded">
                    用户输入 → 队列 → 注入主循环
                  </div>
                  <div className="mt-2 text-xs text-slate-600">
                    ✓ 中途修正<br/>
                    ✓ 无需重启<br/>
                    ✓ 保持上下文
                  </div>
                </div>
              </div>
            </div>

            {/* StreamGen 和调度器 */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-100 p-3 rounded text-sm">
                <p className="font-semibold text-purple-800">StreamGen</p>
                <p className="text-xs text-slate-600">流式输出生成器</p>
              </div>
              <div className="bg-purple-100 p-3 rounded text-sm">
                <p className="font-semibold text-purple-800">ToolEngine & Scheduler</p>
                <p className="text-xs text-slate-600">工具编排与查询调度</p>
              </div>
            </div>
          </div>
        </div>

        {/* 上下文管理 + 工具层 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* 上下文管理 */}
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Database className="text-green-600" size={20} />
              <h2 className="text-lg font-semibold text-green-800">上下文管理</h2>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm mb-3">
              <h3 className="font-semibold text-green-700 text-sm mb-2">压缩器 "wU2"</h3>
              <div className="text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-green-200 h-2 rounded">
                    <div className="w-[92%] bg-green-500 h-2 rounded"></div>
                  </div>
                  <span>92% 触发</span>
                </div>
                <p className="text-slate-600">→ 总结对话</p>
                <p className="text-slate-600">→ Markdown 长期存储</p>
              </div>
            </div>

            <div className="bg-green-100 p-3 rounded text-xs">
              <p className="font-semibold text-green-800">项目记忆</p>
              <p className="text-slate-600 mt-1">CLAUDE.md - 项目上下文<br/>Skills - 可重用指令</p>
            </div>
          </div>

          {/* 工具引擎层 */}
          <div
            className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 cursor-pointer hover:bg-orange-100 hover:border-orange-400 transition-all group"
            onClick={() => navigate('/tool-engine')}
          >
            <div className="flex items-center gap-2 mb-3">
              <Settings className="text-orange-600" size={20} />
              <h2 className="text-lg font-semibold text-orange-800 group-hover:text-orange-900">工具引擎层</h2>
              <ExternalLink className="text-orange-400 group-hover:text-orange-600 ml-auto" size={16} />
            </div>
            
            <div className="space-y-2">
              <div className="bg-white p-2 rounded shadow-sm">
                <p className="text-xs font-semibold text-orange-700">📖 读取与发现</p>
                <p className="text-xs text-slate-600">View, LS, Glob, GrepTool</p>
              </div>
              
              <div className="bg-white p-2 rounded shadow-sm">
                <p className="text-xs font-semibold text-orange-700">✏️ 代码编辑</p>
                <p className="text-xs text-slate-600">Edit, Write/Replace, Create</p>
              </div>
              
              <div className="bg-white p-2 rounded shadow-sm">
                <p className="text-xs font-semibold text-orange-700">⚡ 执行环境</p>
                <p className="text-xs text-slate-600">Bash (持久shell + 风险分类)</p>
              </div>

              <div className="bg-orange-100 p-2 rounded text-xs">
                <p className="font-semibold text-orange-800">沙箱执行</p>
                <p className="text-slate-600">JSON 调用 → 结果文本</p>
              </div>
            </div>
          </div>
        </div>

        {/* 规划与安全层 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* 规划系统 */}
          <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <CheckSquare className="text-indigo-600" size={20} />
              <h2 className="text-lg font-semibold text-indigo-800">规划与并行</h2>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm mb-3">
              <h3 className="font-semibold text-indigo-700 text-sm mb-2">TODO 系统</h3>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked className="w-3 h-3" readOnly />
                  <span className="line-through text-slate-400">任务-1: 设置环境</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-3 h-3" readOnly />
                  <span>任务-2: 实现功能</span>
                  <span className="text-orange-600 font-semibold">HIGH</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-3 h-3" readOnly />
                  <span>任务-3: 编写测试</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-100 p-3 rounded text-xs">
              <p className="font-semibold text-indigo-800">Sub-Agent "I2A"</p>
              <p className="text-slate-600 mt-1">受控并行 | 深度限制 | 探索任务</p>
            </div>
          </div>

          {/* 安全系统 */}
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="text-red-600" size={20} />
              <h2 className="text-lg font-semibold text-red-800">安全与风险管理</h2>
            </div>
            
            <div className="space-y-2">
              <div className="bg-white p-2 rounded shadow-sm">
                <p className="text-xs font-semibold text-red-700">🔐 权限系统</p>
                <p className="text-xs text-slate-600">写操作确认 | 白名单配置</p>
              </div>
              
              <div className="bg-white p-2 rounded shadow-sm">
                <p className="text-xs font-semibold text-red-700">📊 Diff 优先</p>
                <p className="text-xs text-slate-600">彩色差异 | 易审查回滚</p>
              </div>
              
              <div className="bg-white p-2 rounded shadow-sm">
                <p className="text-xs font-semibold text-red-700">🛡️ 命令消毒</p>
                <p className="text-xs text-slate-600">注入防护 | 风险分类</p>
              </div>

              <div className="bg-red-100 p-2 rounded text-xs">
                <p className="font-semibold text-red-800">多层防护</p>
                <p className="text-slate-600">阻止反引号 | Shell扩展过滤</p>
              </div>
            </div>
          </div>
        </div>

        {/* 扩展机制 */}
        <div className="bg-teal-50 border-2 border-teal-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <GitBranch className="text-teal-600" size={20} />
            <h2 className="text-lg font-semibold text-teal-800">扩展机制</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm font-semibold text-teal-700 mb-1">MCP 协议</p>
              <p className="text-xs text-slate-600">Google Drive, Slack, Jira, Puppeteer...</p>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm font-semibold text-teal-700 mb-1">Skills 系统</p>
              <p className="text-xs text-slate-600">.claude/commands/ | 可重用指令包</p>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm font-semibold text-teal-700 mb-1">自定义命令</p>
              <p className="text-xs text-slate-600">Slash 命令 | Markdown 模板</p>
            </div>
          </div>
        </div>

        {/* 设计原则 */}
        <div className="mt-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">🎯 核心设计原则</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold text-blue-300">简单性</p>
              <p className="text-xs text-slate-300">单线程循环 &gt; 复杂编排</p>
            </div>
            <div>
              <p className="font-semibold text-green-300">透明性</p>
              <p className="text-xs text-slate-300">扁平历史 + 完整审计</p>
            </div>
            <div>
              <p className="font-semibold text-purple-300">可控性</p>
              <p className="text-xs text-slate-300">实时引导 + 严格权限</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaudeCodeArchitecture;