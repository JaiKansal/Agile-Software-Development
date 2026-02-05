# GitHub Setup Guide for XP Project

## Initial Repository Setup

### Step 1: Initialize Local Repository

Already completed! Your repository is initialized with:
```bash
✅ Git initialized
✅ Main branch created
✅ .gitignore configured
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon → **New repository**
3. Fill in repository details:
   - **Repository name**: `task-manager-xp`
   - **Description**: `Task Manager demonstrating XP practices: TDD, Pair Programming, and Refactoring`
   - **Visibility**: Public or Private (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **Create repository**

### Step 3: Connect Local to Remote

After creating the GitHub repository, run these commands:

```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/task-manager-xp.git

# Verify remote was added
git remote -v

# Make initial commit
git add .
git commit -m "Initial commit: Task Manager with XP setup

- MERN stack application
- Jest testing framework configured
- TDD documentation and examples
- Sample tests for backend and frontend
- .gitignore configured for Node.js projects"

# Push to GitHub
git push -u origin main
```

---

## Branch Strategy for XP

### Main Branch Protection
The `main` branch should contain stable, tested code.

### Feature Branch Workflow

```bash
# 1. Create feature branch from main
git checkout main
git pull origin main
git checkout -b feature/task-priority

# 2. Work on feature using TDD
# RED → GREEN → REFACTOR

# 3. Commit frequently
git add .
git commit -m "RED: Add test for task priority"
# ... continue development ...

# 4. Push feature branch
git push origin feature/task-priority

# 5. Create Pull Request on GitHub
# 6. After review and approval, merge to main
```

---

## Commit Message Convention

### Format
```
<TYPE>: <Short description>

<Optional detailed description>
```

### Types for TDD
- **RED**: Failing test added
- **GREEN**: Implementation that makes test pass
- **REFACTOR**: Code improvement without changing behavior
- **FEAT**: New feature complete (after full RED-GREEN-REFACTOR cycle)
- **FIX**: Bug fix
- **DOCS**: Documentation updates
- **TEST**: Test improvements or additions

### Examples

```bash
# TDD Cycle
git commit -m "RED: Add test for task deletion endpoint"
git commit -m "GREEN: Implement task deletion"
git commit -m "REFACTOR: Add error handling for task deletion"

# Feature Complete
git commit -m "FEAT: Add task priority feature

- Users can set priority (low, medium, high)
- Tasks can be filtered by priority
- Priority displayed with color coding
- Full test coverage included"

# Bug Fix
git commit -m "FIX: Resolve authentication token expiration issue"

# Documentation
git commit -m "DOCS: Update README with testing instructions"
```

---

## Pull Request Template

Create a file `.github/pull_request_template.md`:

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] 🔴 RED: Failing test
- [ ] 🟢 GREEN: Implementation
- [ ] ♻️ REFACTOR: Code improvement
- [ ] ✨ FEAT: New feature
- [ ] 🐛 FIX: Bug fix
- [ ] 📝 DOCS: Documentation

## TDD Cycle
- [ ] RED: Test written and failing
- [ ] GREEN: Test passing with minimal code
- [ ] REFACTOR: Code improved and cleaned

## Testing
- [ ] All tests pass locally
- [ ] New tests added for new features
- [ ] Test coverage maintained or improved

## Pair Programming
- **Driver**: [Name]
- **Navigator**: [Name]
- **Session Duration**: [Duration]

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No console.log or debugging code left
```

---

## GitHub Actions for CI (Optional)

Create `.github/workflows/test.yml`:

```yaml
name: Run Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  backend-tests:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      working-directory: ./backend
      run: npm install
    
    - name: Run tests
      working-directory: ./backend
      run: npm test
    
    - name: Generate coverage
      working-directory: ./backend
      run: npm run test:coverage

  frontend-tests:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      working-directory: ./client
      run: npm install
    
    - name: Run tests
      working-directory: ./client
      run: npm test
    
    - name: Generate coverage
      working-directory: ./client
      run: npm run test:coverage
```

---

## Useful Git Commands

### Daily Workflow
```bash
# Start of day: Get latest changes
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/new-feature

# Check status
git status

# Stage changes
git add .
# or stage specific files
git add path/to/file

# Commit
git commit -m "RED: Add test for new feature"

# Push to remote
git push origin feature/new-feature

# End of day: Ensure everything is pushed
git push origin feature/new-feature
```

### Viewing History
```bash
# View commit history
git log --oneline

# View changes in a commit
git show <commit-hash>

# View file history
git log --follow path/to/file
```

### Undoing Changes
```bash
# Discard unstaged changes
git checkout -- path/to/file

# Unstage file
git reset HEAD path/to/file

# Amend last commit (if not pushed)
git commit --amend -m "Updated message"

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

### Syncing with Remote
```bash
# Fetch changes without merging
git fetch origin

# Pull changes from main
git pull origin main

# Push your branch
git push origin your-branch-name

# Force push (use carefully!)
git push -f origin your-branch-name
```

---

## Collaboration Best Practices

### Before Starting Work
1. Pull latest changes from main
2. Create a new feature branch
3. Start VS Code Live Share session

### During Development
1. Commit after each TDD phase (RED, GREEN, REFACTOR)
2. Push to remote regularly (at least daily)
3. Keep commits small and focused
4. Write descriptive commit messages

### After Completing Feature
1. Run all tests locally
2. Push final changes
3. Create Pull Request
4. Request review from pair partner
5. Address review comments
6. Merge after approval

### Code Review Checklist
- [ ] Tests are included and passing
- [ ] Code follows TDD cycle
- [ ] No unnecessary code or comments
- [ ] Documentation updated
- [ ] Commit messages are clear
- [ ] No merge conflicts

---

## GitHub Repository Structure

```
task-manager-xp/
├── .github/
│   ├── workflows/
│   │   └── test.yml              # CI/CD pipeline
│   └── pull_request_template.md  # PR template
├── backend/
│   ├── __tests__/                # Backend tests
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── package.json
├── client/
│   ├── src/
│   │   ├── __tests__/            # Frontend tests
│   │   └── components/
│   └── package.json
├── .gitignore
├── README.md
├── XP_DOCUMENTATION.md
├── TDD_QUICK_REFERENCE.md
└── GITHUB_SETUP.md               # This file
```

---

## Troubleshooting

### Authentication Issues
If you have trouble pushing to GitHub:

1. **Use Personal Access Token** (recommended):
   ```bash
   # Generate token at: https://github.com/settings/tokens
   # Use token as password when prompted
   ```

2. **Or use SSH**:
   ```bash
   # Generate SSH key
   ssh-keygen -t ed25519 -C "your_email@example.com"
   
   # Add to GitHub: https://github.com/settings/keys
   
   # Change remote to SSH
   git remote set-url origin git@github.com:YOUR_USERNAME/task-manager-xp.git
   ```

### Large Files
If you accidentally committed large files:
```bash
# Remove from Git but keep locally
git rm --cached path/to/large/file

# Add to .gitignore
echo "path/to/large/file" >> .gitignore

# Commit the change
git commit -m "Remove large file from tracking"
```

---

## Next Steps

1. ✅ Local repository initialized
2. ⏳ Create GitHub repository
3. ⏳ Connect local to remote
4. ⏳ Make initial commit
5. ⏳ Create first feature branch
6. ⏳ Start TDD cycle
7. ⏳ Create first Pull Request

---

*Happy coding with XP practices!* 🚀
