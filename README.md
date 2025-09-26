# All Node.js Concepts - Practice Projects

This repository contains comprehensive Node.js and React practice projects covering various concepts and implementations.

## 📁 Project Structure

### 🔄 Async & Callbacks (`async_callback/`)
Learn asynchronous programming patterns in Node.js
- **Callbacks** - Understanding callback functions and callback hell
- **Promises** - Promise-based asynchronous operations
- **Async/Await** - Modern asynchronous programming with async/await
- **HTTP Requests** - Making API calls with different async patterns
- **JSON Handling** - Working with JSON data asynchronously

### 🌐 Express.js Framework (`expressjs/`)
Complete Express.js server development examples
- **Basic Server Setup** - Creating your first Express server
- **Routing** - Handling different HTTP routes and methods
- **Middleware** - Application-level, router-level, and custom middleware
- **Static Files** - Serving static content (HTML, CSS, JS, images)
- **Template Engines** - Dynamic content rendering
- **Authentication** - User authentication and session management
- **Error Handling** - Proper error handling patterns in Express

### 🖥️ HTTP Server (`http_server/`)
Building servers from scratch using Node.js core modules
- **Basic HTTP Server** - Creating servers without frameworks
- **Request/Response Handling** - Working with HTTP requests and responses
- **File Serving** - Serving files and content
- **Date/Time Utilities** - Working with dates and time in Node.js

### ⚛️ React Development

#### Props & State (`props_and_states/`)
Fundamental React concepts
- **Props** - Passing data between components
- **State Management** - Managing component state
- **Event Handling** - Handling user interactions
- **Conditional Rendering** - Rendering based on conditions

#### Class Components (`react_class_component/`)
Traditional React class component patterns
- **Class Component Syntax** - Understanding class-based components
- **Lifecycle Methods** - Component lifecycle and hooks
- **State in Classes** - Managing state in class components
- **Method Binding** - Proper method binding in classes

#### React Applications (`react-apps/`)
Complete React application examples
- **Component Architecture** - Structuring React applications
- **State Management** - Advanced state management patterns
- **API Integration** - Connecting React apps to APIs
- **Routing** - Client-side routing with React Router

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- Basic knowledge of JavaScript ES6+

### Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Tahir-CS/All-node-js-concepts.git
cd All-node-js-concepts
```

2. **Navigate to any project folder and install dependencies:**
```bash
# For async callback examples
cd async_callback
npm install

# For Express.js examples
cd ../expressjs
npm install

# For React applications
cd ../react-apps
npm install
```

### Running the Projects

#### Async Callback Examples
```bash
cd async_callback
node ExampleAsyncCallBack.js
node asyncAwaitBookApi.js
node asyncPromise.js
```

#### Express.js Server Examples
```bash
cd expressjs
node expressServer.js          # Basic server (usually runs on port 3000)
node expressRouting.js         # Routing examples
node expressWithAuthentication.js  # Authentication example
```

#### HTTP Server Examples
```bash
cd http_server
node index.js                  # Basic HTTP server
node today.js                  # Date/time utilities
```

#### React Applications
```bash
cd react-apps
npm start                      # Starts development server on port 3000

# For other React projects
cd ../props_and_states
npm start

cd ../react_class_component
npm start
```

## 📚 Learning Path

### Beginner Level
1. Start with **HTTP Server** basics
2. Learn **Async Callback** patterns
3. Practice with simple **Express.js** examples

### Intermediate Level
1. Explore **Express.js** middleware and routing
2. Understand **React Props & State**
3. Build **React Class Components**

### Advanced Level
1. Master **Express.js** authentication and error handling
2. Create complete **React Applications**
3. Integrate frontend and backend

## 🛠️ Technologies & Tools

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **HTTP Module** - Node.js core HTTP functionality
- **File System (fs)** - File operations
- **Path Module** - File path utilities

### Frontend
- **React** - Component-based UI library
- **JSX** - JavaScript XML syntax
- **Create React App** - React development toolchain
- **React Router** - Client-side routing

### Development Tools
- **npm** - Package manager
- **nodemon** - Development server auto-restart
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📋 Project Features

### Async Programming
- ✅ Callback functions and error handling
- ✅ Promise chains and error propagation
- ✅ Async/await syntax and try-catch blocks
- ✅ HTTP requests with Axios
- ✅ File operations (sync vs async)

### Express.js Features
- ✅ RESTful API development
- ✅ Middleware implementation
- ✅ Route parameters and query strings
- ✅ Static file serving
- ✅ Template engine integration
- ✅ Session management
- ✅ Error handling middleware

### React Features
- ✅ Functional and class components
- ✅ Props and state management
- ✅ Event handling
- ✅ Conditional rendering
- ✅ Lists and keys
- ✅ Form handling
- ✅ Component lifecycle

## 🐛 Common Issues & Solutions

### Node.js Issues
- **Port already in use**: Change port number or kill existing process
- **Module not found**: Run `npm install` in the project directory
- **Permission errors**: Use `sudo` (on macOS/Linux) or run as administrator

### React Issues
- **Package not found**: Ensure you're in the correct directory and run `npm install`
- **Port 3000 in use**: React will automatically suggest an alternative port
- **Build errors**: Check console for specific error messages

## 📖 Learning Resources

- [Node.js Official Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/en/guide/)
- [React Documentation](https://reactjs.org/docs/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [npm Documentation](https://docs.npmjs.com/)

## 🤝 Contributing

This is a learning repository. Feel free to:
- Fork the repository
- Add your own examples
- Improve existing code
- Fix bugs or issues
- Add documentation

## 📝 Notes

- Each project folder contains its own `package.json`
- Examples include detailed comments for learning
- Code follows modern JavaScript (ES6+) practices
- Projects are structured for educational purposes

## 📄 License

This project is created for educational purposes and is available under the MIT License.

---

**Happy Learning! 🚀** 

Start with the basics and gradually work your way up to more complex concepts. Each project builds upon previous knowledge, so following the suggested learning path will give you the best experience.