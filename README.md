[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19980617&assignment_repo_type=AssignmentRepo)

# MERN Stack Deployment Demo

This project demonstrates a full MERN stack application deployment with CI/CD pipelines, monitoring, and best practices for production.

## 🌟 Live Demo

- Frontend: `https://mern-demo-frontend.vercel.app`
- Backend API: `https://mern-demo-backend.onrender.com`

## 🛠️ Tech Stack

- **Frontend:**
  - React with TypeScript
  - Vite for build tooling
  - TanStack Query for data fetching
  - React Router for navigation
  - Mantine UI components
  - Tailwind CSS for styling

- **Backend:**
  - Node.js with Express
  - TypeScript
  - MongoDB with Mongoose
  - JWT authentication
  - Winston for logging
  - Express Validator for input validation

- **DevOps:**
  - GitHub Actions for CI
  - MongoDB Atlas for database
  - Render for backend hosting
  - Vercel for frontend hosting
  - Environment-based configuration

## 🚀 Deployment Configuration

### MongoDB Atlas Setup

1. Create cluster on MongoDB Atlas
2. Database user credentials:
   ```
   Username: mern_app_user
   Password: <secure_password>
   ```
3. Connection string format:
   ```
   mongodb+srv://mern_app_user:<password>@cluster0.xxxxx.mongodb.net/mern-demo
   ```

### Backend Environment Variables (Render)

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://mern_app_user:<password>@cluster0.xxxxx.mongodb.net/mern-demo
JWT_SECRET=your_jwt_secret_key
LOG_LEVEL=info
```

### Frontend Environment Variables (Vercel)

```env
VITE_API_URL=https://mern-demo-backend.onrender.com/api
```

## 🔄 CI Pipeline

### GitHub Actions Workflows

1. **Backend CI (`backend-ci.yml`)**
   - Runs on push/PR to backend code
   - TypeScript compilation check
   - Unit tests execution

2. **Frontend CI (`frontend-ci.yml`)**
   - Runs on push/PR to frontend code
   - Type checking and build verification
   - Unit tests execution

## 📊 Monitoring Setup

1. **Application Health Checks**
   - Backend endpoint: `GET /health`
   - Response format:
     ```json
     {
       "status": "ok",
       "timestamp": "2024-01-24T12:00:00Z",
       "version": "1.0.0",
       "services": {
         "database": "connected",
         "api": "operational"
       }
     }
     ```

2. **Logging Configuration**
   - Production logs stored in:
     ```
     /logs/error.log  # Error level logs
     /logs/combined.log  # All logs
     ```
   - Log format:
     ```json
     {
       "level": "info",
       "timestamp": "2024-01-24T12:00:00Z",
       "message": "Server started",
       "meta": {
         "env": "production",
         "port": 5000
       }
     }
     ```

## 🔒 Security Measures

1. **API Security**
   - CORS configuration
   - Helmet.js HTTP headers
   - Rate limiting
   - JWT token validation

2. **Database Security**
   - Connection pooling
   - Encrypted credentials
   - Network access rules
   - Regular backups

## 🚦 Local Development

1. Clone the repository
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   # Backend (.env)
   cp backend/.env.example backend/.env
   
   # Frontend (.env)
   cp frontend/.env.example frontend/.env
   ```

4. Start development servers
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Start individually
   npm run dev -w frontend
   npm run dev -w backend
   ```

## 📝 Deployment Checklist

- [x] MongoDB Atlas cluster created
- [x] Backend API deployed to Render
- [x] Frontend deployed to Vercel
- [x] Environment variables configured
- [x] CI pipeline operational
- [x] Health monitoring setup
- [x] Security measures implemented
- [x] Documentation updated

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 