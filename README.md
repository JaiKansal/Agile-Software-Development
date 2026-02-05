# Task Manager - XP Demonstration Project

A full-stack MERN (MongoDB, Express, React, Node.js) task management application demonstrating **Extreme Programming (XP)** practices including Test-Driven Development (TDD), Pair Programming, and Refactoring.

## 🎯 Project Purpose

This project serves as a demonstration of core XP practices for academic/learning purposes:
- **Test-Driven Development (TDD)** with Red-Green-Refactor cycle
- **Pair Programming** using VS Code Live Share
- **Continuous Integration** with GitHub
- **Refactoring** for code quality improvement

## 📚 Documentation

- **[XP_DOCUMENTATION.md](./XP_DOCUMENTATION.md)** - Complete guide to XP phases and practices
- **[TDD_QUICK_REFERENCE.md](./TDD_QUICK_REFERENCE.md)** - Quick reference for TDD workflow
- **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** - GitHub setup and workflow guide
- **[USER_STORY_BACKLOG.md](./USER_STORY_BACKLOG.md)** - User stories for feature development

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git
- VS Code with Live Share extension (for pair programming)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/YOUR_USERNAME/task-manager-xp.git
cd task-manager-xp
```

2. **Setup Backend**:
```bash
cd backend
npm install

# Create .env file with:
# PORT=3000
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key

npm run dev
```

3. **Setup Frontend** (in a new terminal):
```bash
cd client
npm install
npm run dev
```

4. **Access the application**:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 🧪 Testing

### Run All Tests

**Backend**:
```bash
cd backend
npm test                 # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # Generate coverage report
```

**Frontend**:
```bash
cd client
npm test                 # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # Generate coverage report
```

### Test Structure
- Backend tests: `backend/__tests__/`
- Frontend tests: `client/src/__tests__/`
- Sample tests provided to demonstrate TDD structure

## 🔄 TDD Workflow

### Red-Green-Refactor Cycle

1. **🔴 RED**: Write a failing test
```bash
# Write test first
npm test  # Should fail
git commit -m "RED: Add test for [feature]"
```

2. **🟢 GREEN**: Make the test pass
```bash
# Write minimal code
npm test  # Should pass
git commit -m "GREEN: Implement [feature]"
```

3. **♻️ REFACTOR**: Improve the code
```bash
# Clean up code
npm test  # Should still pass
git commit -m "REFACTOR: Improve [aspect]"
```

See [TDD_QUICK_REFERENCE.md](./TDD_QUICK_REFERENCE.md) for detailed examples.

## 👥 Pair Programming Setup

### Using VS Code Live Share

1. **Install Extension**:
   - Open VS Code
   - Install "Live Share" extension by Microsoft

2. **Start Session**:
   - Click "Live Share" in status bar
   - Share link with pair partner

3. **Roles**:
   - **Driver**: Types the code
   - **Navigator**: Reviews and guides
   - **Switch every 15-30 minutes**

See [XP_DOCUMENTATION.md](./XP_DOCUMENTATION.md#pair-programming-with-vs-code-live-share) for details.

## 🌿 Git Workflow

### Feature Development

```bash
# Create feature branch
git checkout -b feature/task-priority

# TDD cycle
git commit -m "RED: Add test for task priority"
git commit -m "GREEN: Implement task priority"
git commit -m "REFACTOR: Add validation"

# Push and create PR
git push origin feature/task-priority
```

See [GITHUB_SETUP.md](./GITHUB_SETUP.md) for complete workflow.

## 📋 Features

### Current Features ✅
- User authentication (register/login)
- JWT-based authorization
- Task CRUD operations (Create, Read, Update, Delete)
- Responsive UI with React and Tailwind CSS
- Protected routes

### Planned Features (User Stories) 📝
- Task priority levels
- Due dates and reminders
- Task categories/tags
- Search functionality
- Task statistics dashboard
- Dark mode
- Email notifications

See [USER_STORY_BACKLOG.md](./USER_STORY_BACKLOG.md) for complete backlog.

## 🏗️ Project Structure

```
task-manager-xp/
├── backend/
│   ├── __tests__/              # Backend tests (Jest + Supertest)
│   ├── config/                 # Database configuration
│   ├── controllers/            # Route controllers
│   ├── middleware/             # Authentication middleware
│   ├── models/                 # Mongoose models
│   ├── routes/                 # API routes
│   ├── jest.config.js          # Jest configuration
│   ├── server.js               # Express server
│   └── package.json
├── client/
│   ├── src/
│   │   ├── __tests__/          # Frontend tests (Jest + RTL)
│   │   ├── components/         # React components
│   │   ├── pages/              # Page components
│   │   ├── setupTests.ts       # Test setup
│   │   └── main.tsx            # Entry point
│   ├── jest.config.ts          # Jest configuration
│   └── package.json
├── .github/
│   └── pull_request_template.md
├── .gitignore
├── README.md                   # This file
├── XP_DOCUMENTATION.md         # XP practices guide
├── TDD_QUICK_REFERENCE.md      # TDD quick reference
├── GITHUB_SETUP.md             # GitHub workflow guide
└── USER_STORY_BACKLOG.md       # User stories
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Jest** - Testing framework
- **Supertest** - API testing

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router** - Routing
- **Jest** - Testing framework
- **React Testing Library** - Component testing

## 📖 XP Practices Demonstrated

### ✅ Test-Driven Development (TDD)
- Write tests before code
- Follow Red-Green-Refactor cycle
- Maintain high test coverage
- Commit after each TDD phase

### ✅ Pair Programming
- Use VS Code Live Share
- Driver/Navigator roles
- Regular role switching
- Collaborative problem-solving

### ✅ Continuous Integration
- GitHub for version control
- Feature branch workflow
- Pull requests for code review
- Automated testing (optional CI/CD)

### ✅ Refactoring
- Continuous code improvement
- Maintain test coverage
- Clean, readable code
- Remove duplication

### ✅ Simple Design
- YAGNI principle
- Start simple, add complexity when needed
- Refactor as understanding grows

## 🎓 Learning Resources

- **TDD**: [Codecademy - Red-Green-Refactor](https://www.codecademy.com/article/tdd-red-green-refactor)
- **XP Book**: "The Art of Agile Development" by James Shore and Shane Warden
- **Live Share**: [VS Code Live Share Docs](https://code.visualstudio.com/learn/collaboration/live-share)
- **Jest**: [Jest Documentation](https://jestjs.io/)
- **React Testing**: [Testing Library Docs](https://testing-library.com/react)

## 🤝 Contributing

This is a demonstration project for learning XP practices. To contribute:

1. Select a user story from [USER_STORY_BACKLOG.md](./USER_STORY_BACKLOG.md)
2. Create a feature branch
3. Follow TDD Red-Green-Refactor cycle
4. Use pair programming with Live Share
5. Create a Pull Request using the template
6. Request review from your pair partner

## 📝 License

This project is for educational purposes.

## 🙏 Acknowledgments

- Based on XP practices from "The Art of Agile Development"
- TDD methodology from Kent Beck
- Inspired by agile software development principles

---

**For XP Demonstration**: Start with [XP_DOCUMENTATION.md](./XP_DOCUMENTATION.md) to understand the five XP phases and how this project demonstrates them.
