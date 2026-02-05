# TDD Quick Reference Guide

## Red-Green-Refactor Workflow

### 🔴 RED Phase
**Goal**: Write a failing test

```bash
# 1. Create/open test file
# backend/__tests__/feature.test.js
# or
# client/src/__tests__/Component.test.tsx

# 2. Write the test
# - Test should describe the desired behavior
# - Test should fail because feature doesn't exist

# 3. Run tests to confirm failure
npm test

# 4. Commit the failing test
git add .
git commit -m "RED: Add test for [feature name]"
```

### 🟢 GREEN Phase
**Goal**: Make the test pass with minimal code

```bash
# 1. Write minimal implementation
# - Focus on making test pass
# - Don't worry about perfect code yet

# 2. Run tests to confirm they pass
npm test

# 3. Commit the passing code
git add .
git commit -m "GREEN: Implement [feature name]"
```

### ♻️ REFACTOR Phase
**Goal**: Improve code quality while keeping tests green

```bash
# 1. Improve the code
# - Add error handling
# - Improve naming
# - Remove duplication
# - Add validation

# 2. Run tests after each change
npm test

# 3. Commit the refactored code
git add .
git commit -m "REFACTOR: Improve [aspect] of [feature name]"
```

---

## Common Test Patterns

### Backend API Test (Jest + Supertest)

```javascript
const request = require('supertest');
const app = require('../server');

describe('Task API', () => {
  test('POST /api/tasks - should create task', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Task',
        description: 'Test Description'
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.title).toBe('Test Task');
  });
});
```

### Frontend Component Test (React Testing Library)

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem';

describe('TaskItem Component', () => {
  test('should render task title', () => {
    const task = { 
      _id: '1', 
      title: 'Test Task', 
      completed: false 
    };
    
    render(<TaskItem task={task} />);
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
  
  test('should toggle completion on click', () => {
    const mockToggle = jest.fn();
    const task = { 
      _id: '1', 
      title: 'Test Task', 
      completed: false 
    };
    
    render(<TaskItem task={task} onToggle={mockToggle} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(mockToggle).toHaveBeenCalledWith('1');
  });
});
```

---

## Test Commands

### Backend
```bash
cd backend

# Run all tests
npm test

# Watch mode (re-run on file changes)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Frontend
```bash
cd client

# Run all tests
npm test

# Watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

---

## Git Workflow for TDD

```bash
# 1. Create feature branch
git checkout -b feature/task-priority

# 2. RED: Write failing test
# ... write test ...
npm test  # Should fail
git add .
git commit -m "RED: Add test for task priority feature"

# 3. GREEN: Implement feature
# ... write code ...
npm test  # Should pass
git add .
git commit -m "GREEN: Implement task priority"

# 4. REFACTOR: Improve code
# ... refactor ...
npm test  # Should still pass
git add .
git commit -m "REFACTOR: Add validation for priority values"

# 5. Push and create PR
git push origin feature/task-priority
```

---

## Pair Programming Checklist

### Before Starting
- [ ] Start VS Code Live Share session
- [ ] Decide initial Driver/Navigator roles
- [ ] Select user story from backlog
- [ ] Create feature branch

### During Session
- [ ] Driver writes code
- [ ] Navigator reviews and guides
- [ ] Switch roles every 15-30 minutes
- [ ] Follow RED-GREEN-REFACTOR cycle
- [ ] Commit after each phase

### After Session
- [ ] Run all tests
- [ ] Push to GitHub
- [ ] Create Pull Request
- [ ] Document what was accomplished

---

## Testing Best Practices

### ✅ DO
- Write tests before code (TDD)
- Test one thing per test
- Use descriptive test names
- Keep tests simple and readable
- Run tests frequently
- Commit tests with code

### ❌ DON'T
- Skip writing tests
- Test implementation details
- Write tests after code is complete
- Make tests dependent on each other
- Ignore failing tests
- Commit without running tests

---

## Example TDD Session

### User Story: Add task due date

**RED Phase** (5 min):
```javascript
test('should create task with due date', async () => {
  const response = await request(app)
    .post('/api/tasks')
    .send({
      title: 'Task with deadline',
      dueDate: '2024-12-31'
    });
  
  expect(response.status).toBe(201);
  expect(response.body.dueDate).toBe('2024-12-31');
});
```
Run: `npm test` → ❌ FAILS

**GREEN Phase** (10 min):
```javascript
// models/Task.js
const taskSchema = new Schema({
  title: String,
  dueDate: Date  // Add this field
});

// controllers/taskController.js
const createTask = async (req, res) => {
  const { title, dueDate } = req.body;
  const task = await Task.create({ title, dueDate });
  res.status(201).json(task);
};
```
Run: `npm test` → ✅ PASSES

**REFACTOR Phase** (10 min):
```javascript
// Add validation
const taskSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  dueDate: { 
    type: Date,
    validate: {
      validator: (v) => v > new Date(),
      message: 'Due date must be in the future'
    }
  }
});
```
Run: `npm test` → ✅ STILL PASSES

---

## Troubleshooting

### Tests not running?
```bash
# Check Jest is installed
npm list jest

# Reinstall if needed
npm install --save-dev jest
```

### Import errors in tests?
```bash
# Backend: Ensure CommonJS syntax
const module = require('./module');

# Frontend: Ensure ES6 syntax and ts-jest
import module from './module';
```

### Coverage not generating?
```bash
# Run with coverage flag
npm test -- --coverage
```

---

## Quick Tips

1. **Start Small**: Begin with simple tests
2. **One Step at a Time**: Complete RED-GREEN-REFACTOR for each feature
3. **Communicate**: Talk through your thinking with your pair
4. **Commit Often**: After each phase
5. **Keep Tests Fast**: Tests should run in seconds
6. **Read Error Messages**: They guide you to the solution

---

*Keep this guide handy during your TDD sessions!*
