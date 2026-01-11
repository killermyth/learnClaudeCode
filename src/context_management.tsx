import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Database, FileText, Cpu, TrendingDown, Archive, RefreshCw, Layers, AlertTriangle } from 'lucide-react';

const ContextManagement = () => {
  const navigate = useNavigate();
  const [contextUsage, setContextUsage] = useState(92);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-green-600 hover:text-green-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">返回架构总览</span>
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Database className="text-green-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-800">上下文管理</h1>
        </div>
        <p className="text-sm text-slate-600 mb-8">Context Management - 管理有限的上下文窗口，保持对话连贯</p>

        {/* 核心问题 */}
        <div className="bg-white border-2 border-red-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-800 mb-4">⚠️ 核心挑战：上下文窗口有限</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-slate-700 mb-4">
                LLM 有固定的上下文窗口大小（如 200K tokens）。随着对话进行，历史消息不断累积，
                <span className="font-bold text-red-600">最终会超出限制</span>。
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-700 mb-2">如果不管理会怎样？</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• 对话被截断，丢失重要上下文</li>
                  <li>• API 报错，无法继续</li>
                  <li>• 成本急剧增加</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">上下文使用量模拟</p>
              <div className="bg-slate-100 rounded-lg p-4">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>已使用</span>
                  <span>{contextUsage}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4 mb-2">
                  <div
                    className={`h-4 rounded-full transition-all ${contextUsage > 90 ? 'bg-red-500' : contextUsage > 70 ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{ width: `${contextUsage}%` }}
                  />
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => setContextUsage(Math.min(100, contextUsage + 10))}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                  >
                    +10% 模拟增长
                  </button>
                  <button
                    onClick={() => setContextUsage(45)}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs"
                  >
                    触发压缩
                  </button>
                </div>
                {contextUsage > 90 && (
                  <div className="mt-2 flex items-center gap-2 text-red-600 text-xs">
                    <AlertTriangle size={14} />
                    <span>即将触发自动压缩！</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 压缩器 wU2 */}
        <div className="bg-white border-2 border-green-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-green-800 mb-4">🗜️ 压缩器 "wU2"</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-3">触发条件</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-16 bg-green-200 h-3 rounded">
                    <div className="w-[92%] bg-green-600 h-3 rounded"></div>
                  </div>
                  <span className="text-sm font-semibold text-green-700">92%</span>
                </div>
                <p className="text-sm text-slate-600">
                  当上下文使用率达到 <span className="font-bold">92%</span> 时自动触发
                </p>
              </div>

              <h3 className="font-semibold text-green-700 mb-3">压缩流程</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 bg-white p-2 rounded border">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs">1</div>
                  <span>识别可压缩的历史消息</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded border">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs">2</div>
                  <span>使用 LLM 生成摘要</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded border">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs">3</div>
                  <span>替换原始消息为摘要</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded border">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs">4</div>
                  <span>保留最近的详细对话</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-green-700 mb-3">压缩示例</h3>
              <div className="bg-slate-800 rounded-lg p-4 font-mono text-xs">
                <p className="text-gray-400">// 压缩前 (~8000 tokens)</p>
                <p className="text-white">[user]: 帮我看看 auth.js</p>
                <p className="text-purple-400">[assistant]: 好的，让我读取...</p>
                <p className="text-orange-400">[tool]: function login() {'{ ... 500行 ... }'}</p>
                <p className="text-purple-400">[assistant]: 我看到了登录函数...</p>
                <p className="text-white">[user]: 改成 OAuth</p>
                <p className="text-purple-400">[assistant]: 好的...</p>
                <p className="text-orange-400">[tool]: 已修改...</p>
                <p className="text-slate-500">... 更多对话 ...</p>

                <p className="text-gray-400 mt-4">// 压缩后 (~500 tokens)</p>
                <p className="text-green-400">[summary]: 用户请求将 auth.js</p>
                <p className="text-green-400">中的登录功能从密码验证改为</p>
                <p className="text-green-400">OAuth。已完成修改，添加了</p>
                <p className="text-green-400">Google 和 GitHub 登录选项。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 项目记忆 */}
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-800 mb-4">🧠 项目记忆</h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="text-blue-600" size={24} />
                <h3 className="font-bold text-blue-800">CLAUDE.md</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">项目级别的持久化上下文</p>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <p className="text-gray-500"># CLAUDE.md</p>
                <p></p>
                <p className="text-blue-600">## 项目概述</p>
                <p>这是一个 React + TypeScript 项目</p>
                <p></p>
                <p className="text-blue-600">## 代码规范</p>
                <p>- 使用函数组件</p>
                <p>- 使用 Tailwind CSS</p>
                <p></p>
                <p className="text-blue-600">## 常用命令</p>
                <p>npm run dev - 启动开发</p>
              </div>
              <p className="text-xs text-blue-600 mt-2">✓ 每次对话开始时自动加载</p>
            </div>

            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="text-indigo-600" size={24} />
                <h3 className="font-bold text-indigo-800">Skills 技能库</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">可重用的指令模板</p>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <p className="text-gray-500"># .claude/commands/review.md</p>
                <p></p>
                <p className="text-indigo-600">检查以下内容：</p>
                <p>1. 类型安全</p>
                <p>2. 错误处理</p>
                <p>3. 性能问题</p>
                <p>4. 安全漏洞</p>
                <p></p>
                <p className="text-gray-500"># 使用: /review</p>
              </div>
              <p className="text-xs text-indigo-600 mt-2">✓ 通过 /command 触发</p>
            </div>
          </div>
        </div>

        {/* 上下文策略 */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white border-2 border-green-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="text-green-600" size={24} />
              <h3 className="font-bold text-green-800">渐进式压缩</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">越旧的消息压缩越多</p>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-full bg-green-500 h-2 rounded"></div>
                <span>最近</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3/4 bg-green-400 h-2 rounded"></div>
                <span>较近</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1/2 bg-green-300 h-2 rounded"></div>
                <span>较远</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1/4 bg-green-200 h-2 rounded"></div>
                <span>最远</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Archive className="text-blue-600" size={24} />
              <h3 className="font-bold text-blue-800">重要信息保留</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">关键信息不会被压缩</p>
            <div className="space-y-2 text-xs">
              <div className="bg-blue-50 p-2 rounded">✓ 系统提示词</div>
              <div className="bg-blue-50 p-2 rounded">✓ CLAUDE.md 内容</div>
              <div className="bg-blue-50 p-2 rounded">✓ 最近 N 轮对话</div>
              <div className="bg-blue-50 p-2 rounded">✓ 待处理的任务</div>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <RefreshCw className="text-purple-600" size={24} />
              <h3 className="font-bold text-purple-800">自动恢复</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">需要时可重新获取详情</p>
            <div className="text-xs text-slate-600">
              <p className="mb-2">如果压缩后需要详细信息：</p>
              <div className="bg-purple-50 p-2 rounded font-mono">
                <p>"我需要再看一下 auth.js"</p>
                <p className="text-purple-600">→ 重新 Read 获取</p>
              </div>
            </div>
          </div>
        </div>

        {/* 设计原则 */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-5">
          <h3 className="font-bold text-lg mb-3">🎯 上下文管理原则</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-green-200">无限对话</p>
              <p className="text-xs text-green-100">压缩让对话可以无限继续</p>
            </div>
            <div>
              <p className="font-semibold text-green-200">信息保真</p>
              <p className="text-xs text-green-100">压缩保留关键信息</p>
            </div>
            <div>
              <p className="font-semibold text-green-200">透明操作</p>
              <p className="text-xs text-green-100">用户可以看到压缩发生</p>
            </div>
            <div>
              <p className="font-semibold text-green-200">成本优化</p>
              <p className="text-xs text-green-100">减少不必要的 token 消耗</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextManagement;
