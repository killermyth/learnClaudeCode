import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings, Eye, FileSearch, Edit3, Terminal, Play, Shield, Layers, Zap, Code, FolderOpen } from 'lucide-react';

const ToolEngineLayer = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* 返回按钮 */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">返回架构总览</span>
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Settings className="text-orange-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-800">工具引擎层</h1>
        </div>
        <p className="text-sm text-slate-600 mb-8">Tool Engine Layer - Claude Code 与外部世界交互的核心接口</p>

        {/* 核心概念 */}
        <div className="bg-white border-2 border-orange-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-orange-800 mb-4">🎯 核心概念</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-semibold text-orange-700 mb-2">JSON 调用协议</p>
              <p className="text-sm text-slate-600">所有工具通过标准化 JSON 格式调用，参数严格校验</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-semibold text-orange-700 mb-2">沙箱执行</p>
              <p className="text-sm text-slate-600">工具在隔离环境中执行，结果以纯文本返回</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-semibold text-orange-700 mb-2">统一接口</p>
              <p className="text-sm text-slate-600">所有工具遵循相同的输入输出规范</p>
            </div>
          </div>
        </div>

        {/* 工具分类 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* 读取与发现工具 */}
          <div className="bg-white border-2 border-blue-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="text-blue-600" size={24} />
              <h2 className="text-lg font-bold text-blue-800">📖 读取与发现工具</h2>
            </div>

            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileSearch className="text-blue-600" size={18} />
                  <p className="font-semibold text-blue-700">View / Read</p>
                </div>
                <p className="text-xs text-slate-600 mb-2">读取文件内容，支持行号范围</p>
                <div className="bg-white p-2 rounded text-xs font-mono">
                  <span className="text-purple-600">Read</span>(file_path, offset?, limit?)
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FolderOpen className="text-blue-600" size={18} />
                  <p className="font-semibold text-blue-700">LS / Glob</p>
                </div>
                <p className="text-xs text-slate-600 mb-2">列出目录内容，支持通配符匹配</p>
                <div className="bg-white p-2 rounded text-xs font-mono">
                  <span className="text-purple-600">Glob</span>(pattern: "**/*.tsx")
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="text-blue-600" size={18} />
                  <p className="font-semibold text-blue-700">GrepTool / Grep</p>
                </div>
                <p className="text-xs text-slate-600 mb-2">基于 ripgrep 的内容搜索</p>
                <div className="bg-white p-2 rounded text-xs font-mono">
                  <span className="text-purple-600">Grep</span>(pattern, path?, type?)
                </div>
              </div>
            </div>
          </div>

          {/* 代码编辑工具 */}
          <div className="bg-white border-2 border-green-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Edit3 className="text-green-600" size={24} />
              <h2 className="text-lg font-bold text-green-800">✏️ 代码编辑工具</h2>
            </div>

            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Edit3 className="text-green-600" size={18} />
                  <p className="font-semibold text-green-700">Edit</p>
                </div>
                <p className="text-xs text-slate-600 mb-2">精确字符串替换，要求唯一匹配</p>
                <div className="bg-white p-2 rounded text-xs font-mono">
                  <span className="text-purple-600">Edit</span>(file_path, old_string, new_string)
                </div>
                <div className="mt-2 text-xs text-green-700 bg-green-100 p-2 rounded">
                  ⚠️ old_string 必须在文件中唯一
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="text-green-600" size={18} />
                  <p className="font-semibold text-green-700">Write</p>
                </div>
                <p className="text-xs text-slate-600 mb-2">完整文件写入/覆盖</p>
                <div className="bg-white p-2 rounded text-xs font-mono">
                  <span className="text-purple-600">Write</span>(file_path, content)
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-green-600" size={18} />
                  <p className="font-semibold text-green-700">NotebookEdit</p>
                </div>
                <p className="text-xs text-slate-600 mb-2">Jupyter Notebook 单元格编辑</p>
                <div className="bg-white p-2 rounded text-xs font-mono">
                  <span className="text-purple-600">NotebookEdit</span>(notebook_path, cell_id, ...)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 执行环境 */}
        <div className="bg-white border-2 border-purple-200 rounded-lg p-5 mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="text-purple-600" size={24} />
            <h2 className="text-lg font-bold text-purple-800">⚡ 执行环境 - Bash</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-purple-700 mb-3">持久化 Shell</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>会话级别持久化</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>环境变量保持</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>工作目录跟踪</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>后台任务支持</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-purple-700 mb-3">调用示例</h3>
              <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
                <div className="text-green-400">// 基本调用</div>
                <div className="text-white"><span className="text-purple-400">Bash</span>(command: "npm install")</div>
                <div className="text-slate-500 mt-2">// 带超时</div>
                <div className="text-white"><span className="text-purple-400">Bash</span>(command: "npm test",</div>
                <div className="text-white pl-4">timeout: 120000)</div>
                <div className="text-slate-500 mt-2">// 后台运行</div>
                <div className="text-white"><span className="text-purple-400">Bash</span>(command: "npm run dev",</div>
                <div className="text-white pl-4">run_in_background: true)</div>
              </div>
            </div>
          </div>
        </div>

        {/* 风险分类 */}
        <div className="bg-white border-2 border-red-200 rounded-lg p-5 mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-red-600" size={24} />
            <h2 className="text-lg font-bold text-red-800">🛡️ 命令风险分类</h2>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="font-semibold text-green-700">安全操作</p>
              </div>
              <p className="text-xs text-slate-600 mb-2">无需确认，自动执行</p>
              <div className="text-xs font-mono bg-white p-2 rounded space-y-1">
                <div>• ls, pwd, cat</div>
                <div>• git status, git log</div>
                <div>• npm list, npm test</div>
                <div>• echo, head, tail</div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <p className="font-semibold text-yellow-700">需确认操作</p>
              </div>
              <p className="text-xs text-slate-600 mb-2">首次执行需用户确认</p>
              <div className="text-xs font-mono bg-white p-2 rounded space-y-1">
                <div>• npm install</div>
                <div>• git commit</div>
                <div>• mkdir, touch</div>
                <div>• 文件写入操作</div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <p className="font-semibold text-red-700">高风险操作</p>
              </div>
              <p className="text-xs text-slate-600 mb-2">每次都需确认</p>
              <div className="text-xs font-mono bg-white p-2 rounded space-y-1">
                <div>• rm -rf</div>
                <div>• git push --force</div>
                <div>• sudo 命令</div>
                <div>• 网络请求 curl/wget</div>
              </div>
            </div>
          </div>
        </div>

        {/* 工具调用流程 */}
        <div className="bg-white border-2 border-slate-200 rounded-lg p-5 mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Play className="text-slate-600" size={24} />
            <h2 className="text-lg font-bold text-slate-800">🔄 工具调用流程</h2>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3 text-center min-w-[120px]">
                  <p className="text-sm font-semibold text-blue-700">LLM 输出</p>
                  <p className="text-xs text-slate-500">JSON 工具调用</p>
                </div>
                <div className="flex-1 h-0.5 bg-slate-300 mx-2"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center">
                <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-3 text-center min-w-[120px]">
                  <p className="text-sm font-semibold text-orange-700">参数校验</p>
                  <p className="text-xs text-slate-500">Schema 验证</p>
                </div>
                <div className="flex-1 h-0.5 bg-slate-300 mx-2"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center">
                <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 text-center min-w-[120px]">
                  <p className="text-sm font-semibold text-purple-700">权限检查</p>
                  <p className="text-xs text-slate-500">风险评估</p>
                </div>
                <div className="flex-1 h-0.5 bg-slate-300 mx-2"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 text-center min-w-[120px]">
                  <p className="text-sm font-semibold text-green-700">沙箱执行</p>
                  <p className="text-xs text-slate-500">隔离环境</p>
                </div>
                <div className="flex-1 h-0.5 bg-slate-300 mx-2"></div>
              </div>
            </div>

            <div>
              <div className="bg-teal-100 border-2 border-teal-300 rounded-lg p-3 text-center min-w-[120px]">
                <p className="text-sm font-semibold text-teal-700">结果返回</p>
                <p className="text-xs text-slate-500">纯文本输出</p>
              </div>
            </div>
          </div>
        </div>

        {/* 设计原则 */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg p-5">
          <h3 className="font-bold text-lg mb-3">🎯 工具层设计原则</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-orange-200">最小权限</p>
              <p className="text-xs text-orange-100">只请求必要的操作权限</p>
            </div>
            <div>
              <p className="font-semibold text-orange-200">显式确认</p>
              <p className="text-xs text-orange-100">危险操作需用户授权</p>
            </div>
            <div>
              <p className="font-semibold text-orange-200">可回滚</p>
              <p className="text-xs text-orange-100">Diff 显示便于审查撤销</p>
            </div>
            <div>
              <p className="font-semibold text-orange-200">幂等性</p>
              <p className="text-xs text-orange-100">相同输入产生相同结果</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolEngineLayer;
