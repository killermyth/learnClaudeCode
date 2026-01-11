# 任务管理示例

## 使用 manage_todo_list

### 创建任务列表
```typescript
使用 manage_todo_list 工具
设置 operation: "write"
提供完整的任务数组
```

### 任务结构
```typescript
{
  id: 1,
  title: "任务标题",
  description: "详细描述",
  status: "not-started" | "in-progress" | "completed"
}
```

### 任务状态
- `not-started` - 未开始
- `in-progress` - 进行中（同时最多1个）
- `completed` - 已完成

## 最佳实践

### 1. 复杂任务规划
- 将大任务分解成小步骤
- 每个步骤独立可追踪
- 明确每个步骤的目标

### 2. 状态更新
- 开始任务前标记为 in-progress
- 完成后立即更新为 completed
- 不要批量完成任务

### 3. 进度跟踪
- 及时更新任务状态
- 保持任务列表清晰
- 方便回顾工作进展

## 示例

### 多步任务
```
1. 分析需求 - not-started
2. 设计架构 - not-started  
3. 实现功能 - not-started
4. 测试验证 - not-started
5. 文档整理 - not-started
```

### 执行流程
```
1. 标记第一个任务为 in-progress
2. 完成后标记为 completed
3. 移到下一个任务
4. 重复直到全部完成
```
