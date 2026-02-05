# 📋 XP Demonstration Checklist

Use this checklist to ensure you're ready for your XP demonstration.

---

## ✅ Pre-Demonstration Setup

### Environment Setup
- [x] Node.js installed (v18+)
- [x] Git installed and initialized
- [x] VS Code installed
- [ ] VS Code Live Share extension installed
- [ ] MongoDB running (local or Atlas)
- [x] Backend dependencies installed (`cd backend && npm install`)
- [x] Frontend dependencies installed (`cd client && npm install`)

### Testing Framework
- [x] Jest installed for backend
- [x] Jest installed for frontend
- [x] Supertest installed for API testing
- [x] React Testing Library installed
- [x] Jest configuration files created
- [x] Sample tests created and passing
- [x] Test commands verified (`npm test` works)

### Version Control
- [x] Git repository initialized
- [x] .gitignore configured
- [ ] GitHub repository created
- [ ] Local repo connected to GitHub
- [ ] Initial commit made
- [ ] Code pushed to GitHub

### Documentation
- [x] README.md updated
- [x] XP_DOCUMENTATION.md created
- [x] TDD_QUICK_REFERENCE.md created
- [x] GITHUB_SETUP.md created
- [x] USER_STORY_BACKLOG.md created
- [x] Pull request template created

---

## 📖 Pre-Demonstration Study

### XP Concepts to Review
- [ ] Read XP_DOCUMENTATION.md (5 XP phases)
- [ ] Understand Red-Green-Refactor cycle
- [ ] Review pair programming roles (Driver/Navigator)
- [ ] Study commit message conventions
- [ ] Review user story format and acceptance criteria

### Technical Preparation
- [ ] Understand Jest test syntax
- [ ] Know how to run tests (`npm test`)
- [ ] Familiar with Git commands (commit, push, branch)
- [ ] Know how to start Live Share session
- [ ] Understand project structure

---

## 🎯 Feature Selection

### Choose Your User Story
- [ ] Review USER_STORY_BACKLOG.md
- [ ] Select one high-priority story
- [ ] Understand acceptance criteria
- [ ] Break down into TDD cycles
- [ ] Estimate time needed

### Recommended for Demo
**Task Priority Feature** (Story 1):
- [ ] Read story description
- [ ] Review acceptance criteria
- [ ] Understand TDD breakdown
- [ ] Plan backend tests
- [ ] Plan frontend tests

---

## 👥 Pair Programming Setup

### Before Session
- [ ] Install VS Code Live Share extension
- [ ] Test Live Share connection
- [ ] Decide initial roles (Driver/Navigator)
- [ ] Set timer for role switching (15-30 min)
- [ ] Have user story open for reference

### During Session
- [ ] Start Live Share session
- [ ] Share session link with partner
- [ ] Create feature branch
- [ ] Follow TDD cycle strictly
- [ ] Switch roles regularly
- [ ] Communicate constantly

---

## 🔴 RED Phase Checklist

### Write Failing Test
- [ ] Understand what feature to test
- [ ] Write test that describes desired behavior
- [ ] Run test to confirm it fails
- [ ] Verify failure message makes sense
- [ ] Commit: `git commit -m "RED: Add test for [feature]"`

### Example Commits
```bash
git commit -m "RED: Add test for task priority field in model"
git commit -m "RED: Add test for priority in API response"
git commit -m "RED: Add test for priority selector component"
```

---

## 🟢 GREEN Phase Checklist

### Make Test Pass
- [ ] Write minimal code to pass test
- [ ] Don't worry about perfect code yet
- [ ] Run test to confirm it passes
- [ ] Verify all previous tests still pass
- [ ] Commit: `git commit -m "GREEN: Implement [feature]"`

### Example Commits
```bash
git commit -m "GREEN: Add priority field to Task model"
git commit -m "GREEN: Include priority in API endpoint"
git commit -m "GREEN: Create priority selector component"
```

---

## ♻️ REFACTOR Phase Checklist

### Improve Code Quality
- [ ] Add error handling
- [ ] Improve variable/function names
- [ ] Remove code duplication
- [ ] Add validation
- [ ] Add comments for complex logic
- [ ] Run tests after each change
- [ ] Verify all tests still pass
- [ ] Commit: `git commit -m "REFACTOR: Improve [aspect]"`

### Example Commits
```bash
git commit -m "REFACTOR: Add validation for priority values"
git commit -m "REFACTOR: Extract priority constants"
git commit -m "REFACTOR: Add color coding for priority display"
```

---

## 🔄 Continuous Integration Checklist

### After Each TDD Cycle
- [ ] All tests passing locally
- [ ] Code committed with descriptive message
- [ ] Changes pushed to feature branch
- [ ] No console.log or debug code left

### Before Creating PR
- [ ] All acceptance criteria met
- [ ] Full test suite passing
- [ ] Code reviewed by pair partner
- [ ] Documentation updated if needed
- [ ] Feature branch up to date with main

---

## 📝 Pull Request Checklist

### Creating PR
- [ ] Push feature branch to GitHub
- [ ] Create Pull Request
- [ ] Fill out PR template completely
- [ ] Add pair programming details
- [ ] Link to user story/issue
- [ ] Request review from pair partner

### PR Template Sections
- [ ] Description filled
- [ ] Type of change selected
- [ ] TDD cycle boxes checked
- [ ] Testing checklist completed
- [ ] Pair programming info added
- [ ] User story included
- [ ] Changes listed
- [ ] Screenshots added (if UI changes)

---

## 🎤 Demonstration Presentation

### What to Show
- [ ] Explain the selected user story
- [ ] Show the backlog (USER_STORY_BACKLOG.md)
- [ ] Demonstrate Live Share setup
- [ ] Show RED phase (failing test)
- [ ] Show GREEN phase (passing test)
- [ ] Show REFACTOR phase (improved code)
- [ ] Show commit history with TDD messages
- [ ] Show Pull Request
- [ ] Run all tests to show they pass
- [ ] Demo the working feature

### What to Explain
- [ ] How project moved through 5 XP phases
- [ ] Red-Green-Refactor cycle
- [ ] Pair programming roles and switching
- [ ] Commit message conventions
- [ ] How tests ensure quality
- [ ] Benefits of TDD approach

---

## 📊 Metrics to Track

### Code Quality
- [ ] Test coverage percentage
- [ ] Number of tests written
- [ ] Number of commits (should be many small ones)
- [ ] Time spent in each TDD phase

### Pair Programming
- [ ] Number of role switches
- [ ] Session duration
- [ ] Issues caught by navigator
- [ ] Collaborative decisions made

---

## 🐛 Common Issues Checklist

### If Tests Fail
- [ ] Read error message carefully
- [ ] Check test syntax
- [ ] Verify imports are correct
- [ ] Ensure test file is in correct location
- [ ] Run `npm install` to ensure dependencies

### If Git Issues
- [ ] Check `git status`
- [ ] Verify remote with `git remote -v`
- [ ] Ensure on correct branch
- [ ] Pull latest changes if needed

### If Live Share Issues
- [ ] Check internet connection
- [ ] Verify signed in to GitHub
- [ ] Restart VS Code
- [ ] Reinstall Live Share extension

---

## 📚 Quick Reference During Demo

### Test Commands
```bash
# Backend
cd backend && npm test
cd backend && npm run test:watch

# Frontend
cd client && npm test
cd client && npm run test:watch
```

### Git Commands
```bash
# Create feature branch
git checkout -b feature/task-priority

# Commit
git add .
git commit -m "RED: Add test for task priority"

# Push
git push origin feature/task-priority

# Check status
git status
git log --oneline
```

### Start Application
```bash
# Backend (Terminal 1)
cd backend && npm run dev

# Frontend (Terminal 2)
cd client && npm run dev
```

---

## ✅ Final Pre-Demo Checklist

### 30 Minutes Before
- [ ] Application runs without errors
- [ ] All current tests passing
- [ ] Git repository clean (`git status`)
- [ ] Documentation reviewed
- [ ] User story selected and understood
- [ ] Live Share tested with partner

### 10 Minutes Before
- [ ] Close unnecessary applications
- [ ] Open VS Code with project
- [ ] Have documentation ready
- [ ] Terminal windows prepared
- [ ] Browser ready for GitHub
- [ ] Timer ready for role switching

### Right Before Starting
- [ ] Take a deep breath 😊
- [ ] Review user story one more time
- [ ] Start Live Share session
- [ ] Create feature branch
- [ ] Begin with confidence!

---

## 🎯 Success Criteria

Your demonstration is successful if you can show:

1. **TDD Cycle**:
   - ✅ RED: Failing test written first
   - ✅ GREEN: Minimal code to pass
   - ✅ REFACTOR: Code improved

2. **Pair Programming**:
   - ✅ Live Share session active
   - ✅ Roles clearly defined
   - ✅ Regular switching demonstrated

3. **Version Control**:
   - ✅ Commits after each phase
   - ✅ Descriptive commit messages
   - ✅ Feature branch workflow

4. **XP Understanding**:
   - ✅ Can explain 5 XP phases
   - ✅ Can explain benefits of TDD
   - ✅ Can explain pair programming value

5. **Working Feature**:
   - ✅ Tests pass
   - ✅ Feature works as expected
   - ✅ Code is clean and documented

---

## 📞 Emergency Contacts

### If Something Goes Wrong
1. **Don't Panic** - Take a breath
2. **Check Documentation** - Likely has the answer
3. **Use Git** - Can always revert changes
4. **Ask Partner** - Two heads are better than one

### Useful Commands to Know
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git checkout -- .

# See what changed
git diff

# Restart from clean state
git stash
```

---

**You're ready! Good luck with your XP demonstration! 🚀**

*Remember: XP is about continuous improvement, communication, and quality. Show your process, not just the result!*
