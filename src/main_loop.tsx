import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Zap, MessageSquare, Wrench, CheckCircle, XCircle, ArrowDown, Play, Pause, RotateCcw } from 'lucide-react';

const MainLoop = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loopCount, setLoopCount] = useState(0);

  const steps = [
    { id: 0, name: '接收输入', desc: '用户消息进入系统' },
    { id: 1, name: 'LLM 推理', desc: '分析意图，决定行动' },
    { id: 2, name: '检查输出', desc: '是工具调用还是文本？' },
    { id: 3, name: '执行工具', desc: '调用工具获取结果' },
    { id: 4, name: '更新历史', desc: '结果加入对话历史' },
    { id: 5, name: '继续循环', desc: '回到 LLM 推理' },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === 5) {
          setLoopCount((c) => c + 1);
          return 1; // 循环回到 LLM 推理
        }
        return prev + 1;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const resetAnimation = () => {
    setCurrentStep(0);
    setLoopCount(0);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* 返回按钮 */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">返回架构总览</span>
        </button>

        <div className="flex items-center gap-3 mb-2">
          <RefreshCw className="text-purple-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-800">主循环 "nO"</h1>
        </div>
        <p className="text-sm text-slate-600 mb-8">The Agentic Loop - Claude Code 的心脏，驱动一切自主行为</p>

        {/* 核心概念 */}
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-purple-800 mb-4">🧠 什么是主循环？</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-slate-700 mb-4">
                主循环是 Claude Code 的<span className="font-bold text-purple-700">核心执行引擎</span>。
                它不断重复一个简单的过程：<strong>推理 → 行动 → 观察 → 推理...</strong>
              </p>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-semibold text-purple-700 mb-2">为什么叫 "nO"？</p>
                <p className="text-sm text-slate-600">
                  这可能是内部代号。关键是理解它的本质：一个<span className="font-semibold">单线程、同步的 while 循环</span>，
                  不断迭代直到任务完成。
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
              <p className="text-green-400 mb-2">// 主循环伪代码</p>
              <div className="text-white space-y-1">
                <p><span className="text-purple-400">async function</span> <span className="text-yellow-400">agentLoop</span>(userMessage) {'{'}</p>
                <p className="pl-4">history.push(userMessage)</p>
                <p></p>
                <p className="pl-4"><span className="text-purple-400">while</span> (<span className="text-blue-400">true</span>) {'{'}</p>
                <p className="pl-8 text-gray-400">// 1. LLM 推理</p>
                <p className="pl-8">response = <span className="text-purple-400">await</span> llm.generate(history)</p>
                <p></p>
                <p className="pl-8 text-gray-400">// 2. 检查是否有工具调用</p>
                <p className="pl-8"><span className="text-purple-400">if</span> (!response.hasToolCalls) {'{'}</p>
                <p className="pl-12"><span className="text-purple-400">return</span> response.text <span className="text-gray-400">// 结束!</span></p>
                <p className="pl-8">{'}'}</p>
                <p></p>
                <p className="pl-8 text-gray-400">// 3. 执行工具</p>
                <p className="pl-8">results = <span className="text-purple-400">await</span> executeTool(response.toolCalls)</p>
                <p></p>
                <p className="pl-8 text-gray-400">// 4. 更新历史，继续循环</p>
                <p className="pl-8">history.push(response, results)</p>
                <p className="pl-4">{'}'}</p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 动画演示 */}
        <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-indigo-800">🔄 循环过程演示</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">循环次数: <span className="font-bold text-indigo-600">{loopCount}</span></span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1 px-3 py-1 bg-indigo-100 hover:bg-indigo-200 rounded-full text-indigo-700 text-sm transition-colors"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                {isPlaying ? '暂停' : '播放'}
              </button>
              <button
                onClick={resetAnimation}
                className="flex items-center gap-1 px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 text-sm transition-colors"
              >
                <RotateCcw size={14} />
                重置
              </button>
            </div>
          </div>

          {/* 流程图 */}
          <div className="relative">
            <div className="flex flex-col items-center gap-2">
              {/* 用户输入 */}
              <div className={`w-64 p-4 rounded-lg border-2 transition-all duration-300 ${currentStep === 0 ? 'bg-blue-100 border-blue-400 ring-4 ring-blue-200' : 'bg-blue-50 border-blue-200'}`}>
                <div className="flex items-center gap-2">
                  <MessageSquare className="text-blue-600" size={20} />
                  <span className="font-semibold text-blue-800">用户输入</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">"帮我重构这个函数"</p>
              </div>

              <ArrowDown className={`text-slate-400 transition-all ${currentStep === 0 ? 'text-blue-500 scale-125' : ''}`} size={24} />

              {/* LLM 推理 */}
              <div className={`w-64 p-4 rounded-lg border-2 transition-all duration-300 ${currentStep === 1 || currentStep === 5 ? 'bg-purple-100 border-purple-400 ring-4 ring-purple-200' : 'bg-purple-50 border-purple-200'}`}>
                <div className="flex items-center gap-2">
                  <Zap className={`text-purple-600 ${currentStep === 1 || currentStep === 5 ? 'animate-pulse' : ''}`} size={20} />
                  <span className="font-semibold text-purple-800">LLM 推理</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">分析上下文，决定下一步</p>
              </div>

              <ArrowDown className={`text-slate-400 transition-all ${currentStep === 1 ? 'text-purple-500 scale-125' : ''}`} size={24} />

              {/* 决策分支 */}
              <div className={`w-80 p-4 rounded-lg border-2 transition-all duration-300 ${currentStep === 2 ? 'bg-amber-100 border-amber-400 ring-4 ring-amber-200' : 'bg-amber-50 border-amber-200'}`}>
                <div className="text-center">
                  <span className="font-semibold text-amber-800">输出类型判断</span>
                  <div className="flex justify-center gap-8 mt-3">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                        <CheckCircle className="text-green-600" size={20} />
                      </div>
                      <p className="text-xs text-slate-600">纯文本</p>
                      <p className="text-xs text-green-600 font-semibold">→ 结束</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Wrench className="text-orange-600" size={20} />
                      </div>
                      <p className="text-xs text-slate-600">工具调用</p>
                      <p className="text-xs text-orange-600 font-semibold">→ 继续</p>
                    </div>
                  </div>
                </div>
              </div>

              <ArrowDown className={`text-slate-400 transition-all ${currentStep === 2 ? 'text-amber-500 scale-125' : ''}`} size={24} />

              {/* 执行工具 */}
              <div className={`w-64 p-4 rounded-lg border-2 transition-all duration-300 ${currentStep === 3 ? 'bg-orange-100 border-orange-400 ring-4 ring-orange-200' : 'bg-orange-50 border-orange-200'}`}>
                <div className="flex items-center gap-2">
                  <Wrench className={`text-orange-600 ${currentStep === 3 ? 'animate-spin' : ''}`} size={20} />
                  <span className="font-semibold text-orange-800">执行工具</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">Read, Edit, Bash...</p>
              </div>

              <ArrowDown className={`text-slate-400 transition-all ${currentStep === 3 ? 'text-orange-500 scale-125' : ''}`} size={24} />

              {/* 更新历史 */}
              <div className={`w-64 p-4 rounded-lg border-2 transition-all duration-300 ${currentStep === 4 ? 'bg-teal-100 border-teal-400 ring-4 ring-teal-200' : 'bg-teal-50 border-teal-200'}`}>
                <div className="flex items-center gap-2">
                  <RefreshCw className="text-teal-600" size={20} />
                  <span className="font-semibold text-teal-800">更新历史</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">结果加入对话上下文</p>
              </div>

              {/* 循环箭头 */}
              <div className={`flex items-center gap-2 mt-2 transition-all ${currentStep === 5 ? 'scale-110' : ''}`}>
                <div className="w-32 h-0.5 bg-purple-300"></div>
                <span className="text-purple-600 font-semibold text-sm">↑ 继续循环</span>
                <div className="w-32 h-0.5 bg-purple-300"></div>
              </div>
            </div>

            {/* 当前步骤说明 */}
            <div className="mt-4 text-center">
              <span className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-medium">
                {steps[currentStep]?.name}: {steps[currentStep]?.desc}
              </span>
            </div>
          </div>
        </div>

        {/* 关键特性 */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">1</div>
              单线程执行
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              整个循环在单线程中顺序执行，没有并发复杂性。每一步都必须完成后才进入下一步。
            </p>
            <div className="bg-blue-50 p-3 rounded text-xs">
              <p className="font-semibold text-blue-700 mb-1">优点：</p>
              <ul className="text-slate-600 space-y-1">
                <li>• 易于理解和调试</li>
                <li>• 状态管理简单</li>
                <li>• 行为可预测</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">2</div>
              扁平历史
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              所有消息（用户、AI、工具结果）都按顺序加入同一个历史列表，没有嵌套结构。
            </p>
            <div className="bg-green-50 p-3 rounded text-xs font-mono">
              <p className="text-slate-600">[user]: 重构函数</p>
              <p className="text-purple-600">[assistant]: 我来读取...</p>
              <p className="text-orange-600">[tool]: 文件内容...</p>
              <p className="text-purple-600">[assistant]: 现在修改...</p>
              <p className="text-orange-600">[tool]: 修改成功</p>
              <p className="text-purple-600">[assistant]: 完成！</p>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">3</div>
              明确终止
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              循环有清晰的终止条件：当 LLM 输出纯文本（无工具调用）时，循环结束。
            </p>
            <div className="bg-purple-50 p-3 rounded text-xs">
              <p className="font-semibold text-purple-700 mb-1">终止信号：</p>
              <div className="flex items-center gap-2 text-slate-600">
                <XCircle className="text-red-500" size={14} />
                <span>没有 tool_calls</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 mt-1">
                <CheckCircle className="text-green-500" size={14} />
                <span>只有 text content</span>
              </div>
            </div>
          </div>
        </div>

        {/* 与其他组件的关系 */}
        <div className="bg-white border-2 border-slate-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-4">🔗 主循环与其他组件的关系</h2>

          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 mb-2">
                <Wrench className="mx-auto text-orange-600 mb-2" size={28} />
                <p className="font-semibold text-orange-800">工具引擎</p>
              </div>
              <p className="text-xs text-slate-600">主循环调用工具引擎执行具体操作</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mb-2">
                <MessageSquare className="mx-auto text-blue-600 mb-2" size={28} />
                <p className="font-semibold text-blue-800">h2A 引导</p>
              </div>
              <p className="text-xs text-slate-600">用户消息通过 h2A 注入主循环</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 mb-2">
                <RefreshCw className="mx-auto text-green-600 mb-2" size={28} />
                <p className="font-semibold text-green-800">上下文压缩</p>
              </div>
              <p className="text-xs text-slate-600">历史过长时触发压缩</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 mb-2">
                <XCircle className="mx-auto text-red-600 mb-2" size={28} />
                <p className="font-semibold text-red-800">权限系统</p>
              </div>
              <p className="text-xs text-slate-600">工具执行前检查权限</p>
            </div>
          </div>

          <div className="mt-4 bg-slate-50 p-4 rounded-lg">
            <p className="text-sm text-slate-600 text-center">
              <span className="font-semibold">主循环是中央调度器</span>：它不直接处理任何具体任务，而是协调各个组件完成工作
            </p>
          </div>
        </div>

        {/* 实际例子 */}
        <div className="bg-white border-2 border-amber-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-amber-800 mb-4">📝 实际执行例子</h2>

          <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="space-y-2">
              <p className="text-blue-400">用户: "把 utils.js 里的 formatDate 函数改成支持时区"</p>
              <p className="text-gray-500">────────── 循环开始 ──────────</p>

              <p className="text-purple-400">LLM: 我需要先读取文件内容</p>
              <p className="text-yellow-400">     → tool_call: Read("utils.js")</p>
              <p className="text-green-400">     ← result: "function formatDate(date) {'{ ... }'}"</p>

              <p className="text-gray-500">────────── 继续循环 ──────────</p>

              <p className="text-purple-400">LLM: 我看到了函数，现在修改它</p>
              <p className="text-yellow-400">     → tool_call: Edit("utils.js", old, new)</p>
              <p className="text-green-400">     ← result: "文件已更新"</p>

              <p className="text-gray-500">────────── 继续循环 ──────────</p>

              <p className="text-purple-400">LLM: 修改完成！我已经将 formatDate 函数...</p>
              <p className="text-white">     → <span className="text-green-500">无工具调用，纯文本响应</span></p>

              <p className="text-gray-500">────────── 循环结束 ──────────</p>
            </div>
          </div>
        </div>

        {/* 设计原则 */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg p-5">
          <h3 className="font-bold text-lg mb-3">🎯 主循环设计原则</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-violet-200">简单优于复杂</p>
              <p className="text-xs text-violet-100">单线程 while 循环，没有状态机</p>
            </div>
            <div>
              <p className="font-semibold text-violet-200">显式优于隐式</p>
              <p className="text-xs text-violet-100">每一步都在历史中可见</p>
            </div>
            <div>
              <p className="font-semibold text-violet-200">可预测性</p>
              <p className="text-xs text-violet-100">相同输入产生相同行为</p>
            </div>
            <div>
              <p className="font-semibold text-violet-200">优雅终止</p>
              <p className="text-xs text-violet-100">自然结束，无需强制中断</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLoop;
