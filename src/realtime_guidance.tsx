import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, MessageSquare, RefreshCw, Pause, Play, AlertCircle, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const RealtimeGuidance = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 动画演示自动播放
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-8 overflow-auto">
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
          <Zap className="text-purple-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-800">实时引导 "h2A"</h1>
        </div>
        <p className="text-sm text-slate-600 mb-8">Human-to-Agent 异步双缓冲队列 - 让你在 AI 工作时随时介入修正</p>

        {/* 什么是 h2A */}
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-purple-800 mb-4">🤔 什么是实时引导？</h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="font-semibold text-red-700 mb-2">❌ 传统方式的问题</p>
                <p className="text-sm text-slate-600">
                  传统 AI 对话是"一问一答"模式：你发送消息 → AI 开始处理 →
                  <span className="font-semibold text-red-600">你只能等待结果</span> →
                  发现方向错误 → 重新开始
                </p>
                <div className="mt-3 text-xs bg-white p-2 rounded font-mono">
                  用户: "帮我重构这个函数"<br/>
                  AI: [执行中... 无法中断]<br/>
                  用户: 😰 "等等，我想用另一种方式..."<br/>
                  AI: [已经改完了，但不是你想要的]
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="font-semibold text-green-700 mb-2">✅ h2A 实时引导</p>
                <p className="text-sm text-slate-600">
                  Claude Code 允许你在 AI 执行过程中<span className="font-semibold text-green-600">随时发送新指令</span>，
                  AI 会在下一个合适的时机接收并调整行为
                </p>
                <div className="mt-3 text-xs bg-white p-2 rounded font-mono">
                  用户: "帮我重构这个函数"<br/>
                  AI: [执行中...]<br/>
                  用户: "用 TypeScript 的方式"<br/>
                  AI: [收到！调整方案...]<br/>
                  用户: 😊 "完美！"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 双缓冲队列原理 */}
        <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-indigo-800">🔄 双缓冲队列原理</h2>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-3 py-1 bg-indigo-100 hover:bg-indigo-200 rounded-full text-indigo-700 text-sm transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying ? '暂停动画' : '播放动画'}
            </button>
          </div>

          {/* 动画演示区域 */}
          <div className="bg-slate-50 rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between gap-4">
              {/* 用户输入区 */}
              <div className="flex-1">
                <div className="text-center mb-2">
                  <span className="text-sm font-semibold text-blue-700">👤 用户端</span>
                </div>
                <div className={`bg-blue-100 border-2 border-blue-300 rounded-lg p-4 transition-all ${step === 0 || step === 3 ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}`}>
                  <MessageSquare className="mx-auto text-blue-600 mb-2" size={24} />
                  <p className="text-xs text-center text-slate-600">随时输入</p>
                  {(step === 0 || step === 3) && (
                    <div className="mt-2 bg-white rounded p-2 text-xs animate-pulse">
                      {step === 0 ? '"重构这个函数"' : '"用 async/await"'}
                    </div>
                  )}
                </div>
              </div>

              {/* 箭头 */}
              <ArrowRight className={`text-slate-400 transition-all ${step === 1 || step === 4 ? 'text-orange-500 scale-125' : ''}`} size={24} />

              {/* 缓冲队列 */}
              <div className="flex-1">
                <div className="text-center mb-2">
                  <span className="text-sm font-semibold text-orange-700">📥 输入缓冲队列</span>
                </div>
                <div className={`bg-orange-100 border-2 border-orange-300 rounded-lg p-4 transition-all ${step === 1 || step === 4 ? 'ring-4 ring-orange-400 ring-opacity-50' : ''}`}>
                  <div className="space-y-1">
                    <div className={`bg-white rounded p-1 text-xs transition-all ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                      消息 1: "重构函数"
                    </div>
                    <div className={`bg-white rounded p-1 text-xs transition-all ${step >= 4 ? 'opacity-100' : 'opacity-30'}`}>
                      消息 2: "用 async/await"
                    </div>
                  </div>
                </div>
              </div>

              {/* 箭头 */}
              <ArrowRight className={`text-slate-400 transition-all ${step === 2 || step === 5 ? 'text-purple-500 scale-125' : ''}`} size={24} />

              {/* 主循环 */}
              <div className="flex-1">
                <div className="text-center mb-2">
                  <span className="text-sm font-semibold text-purple-700">⚙️ 主循环 (nO)</span>
                </div>
                <div className={`bg-purple-100 border-2 border-purple-300 rounded-lg p-4 transition-all ${step === 2 || step === 5 ? 'ring-4 ring-purple-400 ring-opacity-50' : ''}`}>
                  <RefreshCw className={`mx-auto text-purple-600 mb-2 ${step === 2 || step === 5 ? 'animate-spin' : ''}`} size={24} />
                  <p className="text-xs text-center text-slate-600">
                    {step === 2 ? '处理消息 1...' : step === 5 ? '处理消息 2...' : '等待/执行中'}
                  </p>
                </div>
              </div>

              {/* 箭头 */}
              <ArrowRight className="text-slate-400" size={24} />

              {/* 输出 */}
              <div className="flex-1">
                <div className="text-center mb-2">
                  <span className="text-sm font-semibold text-green-700">📤 输出</span>
                </div>
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">
                  <CheckCircle className="mx-auto text-green-600 mb-2" size={24} />
                  <p className="text-xs text-center text-slate-600">流式响应</p>
                </div>
              </div>
            </div>

            {/* 步骤说明 */}
            <div className="mt-4 flex justify-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${step === i ? 'bg-purple-600 scale-125' : 'bg-slate-300'}`}
                />
              ))}
            </div>
          </div>

          {/* 技术说明 */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <p className="font-semibold text-indigo-700">为什么叫"双缓冲"？</p>
              <p className="text-xs text-slate-600 mt-1">
                一个缓冲区接收用户输入，另一个缓冲区供主循环读取。两个缓冲区交替使用，保证不会丢失消息，也不会阻塞用户输入。
              </p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-lg">
              <p className="font-semibold text-indigo-700">什么是"合适的时机"？</p>
              <p className="text-xs text-slate-600 mt-1">
                主循环每完成一次工具调用后，会检查缓冲队列。如果有新消息，就会将其注入对话历史，影响下一步决策。
              </p>
            </div>
          </div>
        </div>

        {/* 使用场景 */}
        <div className="bg-white border-2 border-teal-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-teal-800 mb-4">💡 实际使用场景</h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="text-orange-500" size={20} />
                <p className="font-semibold text-teal-700">中途纠错</p>
              </div>
              <div className="text-xs text-slate-600 space-y-2">
                <p>发现 AI 理解有误时立即纠正：</p>
                <div className="bg-white p-2 rounded font-mono">
                  "不对，我是说 src 目录下的那个文件"
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw className="text-blue-500" size={20} />
                <p className="font-semibold text-teal-700">方向调整</p>
              </div>
              <div className="text-xs text-slate-600 space-y-2">
                <p>执行过程中改变策略：</p>
                <div className="bg-white p-2 rounded font-mono">
                  "算了，用 Redux 而不是 Context"
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="text-green-500" size={20} />
                <p className="font-semibold text-teal-700">补充信息</p>
              </div>
              <div className="text-xs text-slate-600 space-y-2">
                <p>提供额外上下文：</p>
                <div className="bg-white p-2 rounded font-mono">
                  "对了，还需要支持 IE11"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 与传统对话的对比 */}
        <div className="bg-white border-2 border-slate-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-4">📊 与传统对话模式对比</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left p-3 text-slate-600">特性</th>
                  <th className="text-center p-3 text-red-600">传统对话</th>
                  <th className="text-center p-3 text-green-600">h2A 实时引导</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium">执行中输入</td>
                  <td className="p-3 text-center">❌ 需等待完成</td>
                  <td className="p-3 text-center">✅ 随时输入</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium">方向修正</td>
                  <td className="p-3 text-center">❌ 只能重新开始</td>
                  <td className="p-3 text-center">✅ 即时调整</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium">上下文保持</td>
                  <td className="p-3 text-center">⚠️ 可能丢失</td>
                  <td className="p-3 text-center">✅ 完整保留</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium">用户体验</td>
                  <td className="p-3 text-center">😐 被动等待</td>
                  <td className="p-3 text-center">😊 主动协作</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">效率</td>
                  <td className="p-3 text-center">📉 返工成本高</td>
                  <td className="p-3 text-center">📈 快速迭代</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 技术实现 */}
        <div className="bg-white border-2 border-amber-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-amber-800 mb-4">🔧 技术实现要点</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 text-white p-4 rounded-lg font-mono text-sm">
              <p className="text-green-400 mb-2">// 简化的 h2A 伪代码</p>
              <div className="space-y-1">
                <p><span className="text-purple-400">class</span> <span className="text-yellow-400">RealtimeGuidance</span> {'{'}</p>
                <p className="pl-4"><span className="text-blue-400">inputBuffer</span>: Queue[]</p>
                <p className="pl-4"><span className="text-blue-400">readBuffer</span>: Queue[]</p>
                <p></p>
                <p className="pl-4"><span className="text-purple-400">async</span> <span className="text-yellow-400">enqueue</span>(msg) {'{'}</p>
                <p className="pl-8"><span className="text-gray-400">// 用户输入立即入队</span></p>
                <p className="pl-8">this.inputBuffer.push(msg)</p>
                <p className="pl-4">{'}'}</p>
                <p></p>
                <p className="pl-4"><span className="text-yellow-400">swapBuffers</span>() {'{'}</p>
                <p className="pl-8"><span className="text-gray-400">// 主循环调用时交换</span></p>
                <p className="pl-8">[this.inputBuffer, this.readBuffer]</p>
                <p className="pl-10">= [this.readBuffer, this.inputBuffer]</p>
                <p className="pl-4">{'}'}</p>
                <p>{'}'}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="font-semibold text-amber-700">🔒 线程安全</p>
                <p className="text-xs text-slate-600">双缓冲避免读写冲突，无需复杂锁机制</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="font-semibold text-amber-700">⚡ 零阻塞</p>
                <p className="text-xs text-slate-600">用户输入永不阻塞，体验流畅</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="font-semibold text-amber-700">📝 顺序保证</p>
                <p className="text-xs text-slate-600">FIFO 队列确保消息按顺序处理</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="font-semibold text-amber-700">🎯 精确注入</p>
                <p className="text-xs text-slate-600">在主循环的检查点注入，不打断执行</p>
              </div>
            </div>
          </div>
        </div>

        {/* 设计原则 */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-5">
          <h3 className="font-bold text-lg mb-3">🎯 h2A 设计原则</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-purple-200">异步优先</p>
              <p className="text-xs text-purple-100">用户输入与 AI 执行完全解耦</p>
            </div>
            <div>
              <p className="font-semibold text-purple-200">无损介入</p>
              <p className="text-xs text-purple-100">修正不会丢失已有上下文</p>
            </div>
            <div>
              <p className="font-semibold text-purple-200">即时响应</p>
              <p className="text-xs text-purple-100">输入立即确认，快速反馈</p>
            </div>
            <div>
              <p className="font-semibold text-purple-200">协作体验</p>
              <p className="text-xs text-purple-100">人机协作而非人机轮替</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeGuidance;
