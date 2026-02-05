# User Story Backlog

## High Priority Stories (For XP Demonstration)

### Story 1: Task Priority Feature ⭐ HIGH
**As a** user  
**I want** to assign priority levels to my tasks  
**So that** I can focus on the most important tasks first

**Acceptance Criteria**:
- [ ] User can select priority: Low, Medium, High
- [ ] Priority is displayed with color coding (Low=Green, Medium=Yellow, High=Red)
- [ ] Tasks can be filtered by priority
- [ ] Priority is saved to database
- [ ] Priority defaults to "Medium" if not specified

**Story Points**: 5  
**TDD Approach**:
1. RED: Write test for priority field in Task model
2. GREEN: Add priority field to schema
3. REFACTOR: Add validation for priority values
4. RED: Write test for priority in API response
5. GREEN: Include priority in controller
6. REFACTOR: Add error handling
7. RED: Write test for frontend priority selector
8. GREEN: Create priority dropdown component
9. REFACTOR: Add color coding and styling

---

### Story 2: Task Due Date ⭐ HIGH
**As a** user  
**I want** to set due dates for my tasks  
**So that** I can track deadlines

**Acceptance Criteria**:
- [ ] User can select a due date using date picker
- [ ] Due date is displayed in task list
- [ ] Overdue tasks are highlighted in red
- [ ] Tasks can be sorted by due date
- [ ] Due date validation (must be future date)

**Story Points**: 5  
**TDD Approach**:
1. RED: Write test for dueDate field
2. GREEN: Add dueDate to Task model
3. REFACTOR: Add date validation
4. RED: Write test for overdue detection
5. GREEN: Implement overdue logic
6. REFACTOR: Add date formatting utilities

---

### Story 3: Task Categories/Tags ⭐ MEDIUM
**As a** user  
**I want** to categorize my tasks with tags  
**So that** I can organize related tasks together

**Acceptance Criteria**:
- [ ] User can add multiple tags to a task
- [ ] Tags are displayed as colored badges
- [ ] User can filter tasks by tag
- [ ] User can create new tags
- [ ] Predefined tags available: Work, Personal, Shopping, Health

**Story Points**: 8  
**TDD Approach**:
1. RED: Write test for tags array in Task model
2. GREEN: Add tags field
3. REFACTOR: Add tag validation
4. RED: Write test for tag filtering
5. GREEN: Implement filter logic
6. REFACTOR: Optimize query performance

---

### Story 4: Task Search ⭐ MEDIUM
**As a** user  
**I want** to search for tasks by title or description  
**So that** I can quickly find specific tasks

**Acceptance Criteria**:
- [ ] Search bar available on task list page
- [ ] Search works in real-time (as user types)
- [ ] Search matches title and description
- [ ] Search is case-insensitive
- [ ] Clear button to reset search

**Story Points**: 5  
**TDD Approach**:
1. RED: Write test for search endpoint
2. GREEN: Implement search in backend
3. REFACTOR: Add text indexing for performance
4. RED: Write test for search component
5. GREEN: Create search input component
6. REFACTOR: Add debouncing for API calls

---

### Story 5: Task Completion Statistics ⭐ LOW
**As a** user  
**I want** to see statistics about my task completion  
**So that** I can track my productivity

**Acceptance Criteria**:
- [ ] Dashboard shows total tasks
- [ ] Dashboard shows completed vs incomplete tasks
- [ ] Dashboard shows completion percentage
- [ ] Dashboard shows tasks completed this week
- [ ] Visual chart/graph for statistics

**Story Points**: 8  
**TDD Approach**:
1. RED: Write test for statistics endpoint
2. GREEN: Implement aggregation logic
3. REFACTOR: Optimize database queries
4. RED: Write test for dashboard component
5. GREEN: Create statistics display
6. REFACTOR: Add chart visualization

---

## Medium Priority Stories

### Story 6: Task Notes/Comments
**As a** user  
**I want** to add notes or comments to tasks  
**So that** I can track additional information

**Story Points**: 5

---

### Story 7: Subtasks
**As a** user  
**I want** to break down tasks into subtasks  
**So that** I can manage complex tasks better

**Story Points**: 13

---

### Story 8: Task Sharing
**As a** user  
**I want** to share tasks with other users  
**So that** I can collaborate on tasks

**Story Points**: 13

---

## Low Priority Stories

### Story 9: Dark Mode
**As a** user  
**I want** a dark mode option  
**So that** I can use the app comfortably at night

**Story Points**: 3

---

### Story 10: Email Notifications
**As a** user  
**I want** to receive email notifications for due tasks  
**So that** I don't miss deadlines

**Story Points**: 8

---

## Completed Stories ✅

### Story 0: User Authentication ✅
**As a** user  
**I want** to register and login  
**So that** my tasks are private and secure

**Completed**: [Date]  
**Story Points**: 8

---

### Story -1: Basic Task CRUD ✅
**As a** user  
**I want** to create, read, update, and delete tasks  
**So that** I can manage my to-do list

**Completed**: [Date]  
**Story Points**: 13

---

## Story Selection Guide for XP Demo

### Recommended for Pair Programming Demo:
1. **Task Priority Feature** (Story 1) - Perfect size, clear TDD cycle
2. **Task Due Date** (Story 2) - Good for demonstrating refactoring
3. **Task Search** (Story 4) - Shows frontend-backend integration

### Best for Demonstrating TDD:
- Start with **Task Priority Feature**
- Clear RED-GREEN-REFACTOR cycles
- Both backend and frontend components
- Visible results

### Estimation Guide:
- **1-3 points**: Small, can complete in 1-2 hours
- **5 points**: Medium, can complete in half day
- **8 points**: Large, requires full day
- **13 points**: Very large, requires multiple days

---

## Notes for XP Demonstration

### Before Starting:
1. Select one story from High Priority
2. Review acceptance criteria with pair
3. Break down into TDD cycles
4. Create feature branch
5. Start Live Share session

### During Development:
1. Follow RED-GREEN-REFACTOR strictly
2. Commit after each phase
3. Switch driver/navigator every 15-30 min
4. Run tests frequently
5. Communicate constantly

### After Completion:
1. Verify all acceptance criteria met
2. Run full test suite
3. Update documentation
4. Create Pull Request
5. Demo to stakeholders

---

*Use this backlog to select stories for your XP demonstration!*
