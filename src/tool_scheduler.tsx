import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings, Cpu, GitBranch, Clock, Layers, CheckCircle, AlertTriangle, ArrowRight, Database } from 'lucide-react';

const ToolScheduler = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-amber-600 hover:text-amber-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">返回架构总览</span>
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Settings className="text-amber-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-800">工具编排与查询调度</h1>
        </div>
        <p className="text-sm text-slate-600 mb-8">ToolEngine & Scheduler - 协调工具执行的中枢系统</p>

        {/* 核心概念 */}
        <div className="bg-white border-2 border-amber-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-amber-800 mb-4">🎛️ 两个核心组件</h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="text-orange-600" size={24} />
                <h3 className="font-bold text-orange-800">ToolEngine 工具引擎</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">负责工具的注册、校验和执行</p>
              <div className="space-y-2 text-xs">
                <div className="bg-white p-2 rounded flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={14} />
                  <span>工具注册表管理</span>
                </div>
                <div className="bg-white p-2 rounded flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={14} />
                  <span>参数 Schema 校验</span>
                </div>
                <div className="bg-white p-2 rounded flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={14} />
                  <span>执行结果封装</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="text-amber-600" size={24} />
                <h3 className="font-bold text-amber-800">Scheduler 调度器</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">负责执行顺序、并发控制和优先级</p>
              <div className="space-y-2 text-xs">
                <div className="bg-white p-2 rounded flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={14} />
                  <span>执行队列管理</span>
                </div>
                <div className="bg-white p-2 rounded flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={14} />
                  <span>并发度控制</span>
                </div>
                <div className="bg-white p-2 rounded flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={14} />
                  <span>超时和重试策略</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 工具执行流程 */}
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-800 mb-4">🔄 工具执行流程</h2>

          <div className="flex items-center justify-between mb-4">
            <div className="flex-1 text-center">
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 mx-1">
                <p className="font-semibold text-purple-800 text-sm">LLM 输出</p>
                <p className="text-xs text-slate-500">tool_calls JSON</p>
              </div>
            </div>
            <ArrowRight className="text-slate-400 flex-shrink-0" size={20} />
            <div className="flex-1 text-center">
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3 mx-1">
                <p className="font-semibold text-blue-800 text-sm">解析器</p>
                <p className="text-xs text-slate-500">提取工具调用</p>
              </div>
            </div>
            <ArrowRight className="text-slate-400 flex-shrink-0" size={20} />
            <div className="flex-1 text-center">
              <div className="bg-amber-100 border-2 border-amber-300 rounded-lg p-3 mx-1">
                <p className="font-semibold text-amber-800 text-sm">Scheduler</p>
                <p className="text-xs text-slate-500">排队调度</p>
              </div>
            </div>
            <ArrowRight className="text-slate-400 flex-shrink-0" size={20} />
            <div className="flex-1 text-center">
              <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-3 mx-1">
                <p className="font-semibold text-orange-800 text-sm">ToolEngine</p>
                <p className="text-xs text-slate-500">校验执行</p>
              </div>
            </div>
            <ArrowRight className="text-slate-400 flex-shrink-0" size={20} />
            <div className="flex-1 text-center">
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 mx-1">
                <p className="font-semibold text-green-800 text-sm">结果</p>
                <p className="text-xs text-slate-500">返回主循环</p>
              </div>
            </div>
          </div>

          {/* 代码示例 */}
          <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
            <p className="text-green-400">// 调度器处理多个工具调用</p>
            <p className="text-white"><span className="text-purple-400">async function</span> <span className="text-yellow-400">scheduleTools</span>(toolCalls) {"{"}</p>
            <p className="text-white pl-4"><span className="text-purple-400">const</span> results = []</p>
            <p className="text-white pl-4"></p>
            <p className="text-white pl-4"><span className="text-purple-400">for</span> (<span className="text-purple-400">const</span> call <span className="text-purple-400">of</span> toolCalls) {"{"}</p>
            <p className="text-gray-400 pl-8">// 1. 权限检查</p>
            <p className="text-white pl-8"><span className="text-purple-400">await</span> checkPermission(call)</p>
            <p className="text-gray-400 pl-8">// 2. 参数校验</p>
            <p className="text-white pl-8">validateParams(call.params)</p>
            <p className="text-gray-400 pl-8">// 3. 执行工具</p>
            <p className="text-white pl-8"><span className="text-purple-400">const</span> result = <span className="text-purple-400">await</span> toolEngine.run(call)</p>
            <p className="text-white pl-8">results.push(result)</p>
            <p className="text-white pl-4">{"}"}</p>
            <p className="text-white pl-4"><span className="text-purple-400">return</span> results</p>
            <p className="text-white">{"}"}</p>
          </div>
        </div>

        {/* 调度策略 */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <GitBranch className="text-blue-600" size={24} />
              <h3 className="font-bold text-blue-800">顺序执行</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">默认策略：一个接一个执行</p>
            <div className="bg-blue-50 p-3 rounded text-xs font-mono">
              <p>Read("a.js") → 完成</p>
              <p>Edit("a.js") → 完成</p>
              <p>Bash("npm test") → 完成</p>
            </div>
            <p className="text-xs text-blue-600 mt-2">✓ 安全可控，无竞态条件</p>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="text-green-600" size={24} />
              <h3 className="font-bold text-green-800">并行执行</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">独立操作可并行：多个 Read</p>
            <div className="bg-green-50 p-3 rounded text-xs font-mono">
              <p>Read("a.js") ──┐</p>
              <p>Read("b.js") ──┼→ 同时完成</p>
              <p>Read("c.js") ──┘</p>
            </div>
            <p className="text-xs text-green-600 mt-2">✓ 提高效率，适合只读操作</p>
          </div>

          <div className="bg-white border-2 border-amber-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-amber-600" size={24} />
              <h3 className="font-bold text-amber-800">超时控制</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">防止工具执行时间过长</p>
            <div className="bg-amber-50 p-3 rounded text-xs">
              <p className="font-semibold text-amber-700">默认超时</p>
              <p>• Bash: 120秒</p>
              <p>• Read/Edit: 30秒</p>
              <p>• 可自定义: timeout 参数</p>
            </div>
            <p className="text-xs text-amber-600 mt-2">✓ 避免卡死，保证响应</p>
          </div>
        </div>

        {/* 工具注册表 */}
        <div className="bg-white border-2 border-slate-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-4">📋 工具注册表</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left p-3 text-slate-600">工具名</th>
                  <th className="text-left p-3 text-slate-600">类型</th>
                  <th className="text-left p-3 text-slate-600">并发</th>
                  <th className="text-left p-3 text-slate-600">超时</th>
                  <th className="text-left p-3 text-slate-600">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-mono text-blue-600">Read</td>
                  <td className="p-3">只读</td>
                  <td className="p-3"><span className="text-green-600">✓ 可并行</span></td>
                  <td className="p-3">30s</td>
                  <td className="p-3 text-slate-500">读取文件内容</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-mono text-green-600">Edit</td>
                  <td className="p-3">写入</td>
                  <td className="p-3"><span className="text-red-600">✗ 顺序</span></td>
                  <td className="p-3">30s</td>
                  <td className="p-3 text-slate-500">精确替换</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-mono text-purple-600">Bash</td>
                  <td className="p-3">执行</td>
                  <td className="p-3"><span className="text-red-600">✗ 顺序</span></td>
                  <td className="p-3">120s</td>
                  <td className="p-3 text-slate-500">Shell 命令</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-mono text-amber-600">Glob</td>
                  <td className="p-3">只读</td>
                  <td className="p-3"><span className="text-green-600">✓ 可并行</span></td>
                  <td className="p-3">30s</td>
                  <td className="p-3 text-slate-500">文件匹配</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-teal-600">Grep</td>
                  <td className="p-3">只读</td>
                  <td className="p-3"><span className="text-green-600">✓ 可并行</span></td>
                  <td className="p-3">60s</td>
                  <td className="p-3 text-slate-500">内容搜索</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 设计原则 */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-5">
          <h3 className="font-bold text-lg mb-3">🎯 调度器设计原则</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-amber-200">安全优先</p>
              <p className="text-xs text-amber-100">写操作严格顺序执行</p>
            </div>
            <div>
              <p className="font-semibold text-amber-200">效率兼顾</p>
              <p className="text-xs text-amber-100">只读操作可以并行</p>
            </div>
            <div>
              <p className="font-semibold text-amber-200">超时保护</p>
              <p className="text-xs text-amber-100">防止无限等待</p>
            </div>
            <div>
              <p className="font-semibold text-amber-200">统一接口</p>
              <p className="text-xs text-amber-100">所有工具同样的调用方式</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolScheduler;
