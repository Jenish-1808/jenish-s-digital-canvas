import { Card } from "@/components/ui/card";

export const AdvancedSkills = () => {
  return (
    <section id="skills" className="py-12">
      <Card className="p-8 bg-card">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Advanced Skills</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Data Structures & Algorithms Mastery</h3>
            <p className="text-foreground/90 mb-4">
              Solved 200+ problems across various platforms, demonstrating proficiency in complex problem-solving and algorithmic thinking. Strong understanding of time and space complexity, tree traversals, dynamic programming, graph algorithms, and greedy approaches.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Full-Stack Web Development</h3>
            <p className="text-foreground/90 mb-4">
              Proficient in building end-to-end web applications using modern frameworks and best practices. Experienced with React, Node.js, Express.js, and MongoDB for creating responsive, scalable applications.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Backend API Development</h3>
            <p className="text-foreground/90 mb-4">
              Experience in creating RESTful APIs with proper authentication and database integration. Skilled in designing efficient database schemas and implementing secure authentication systems.
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.value, end=' ')
        inorder_traversal(root.right)

# Dynamic Programming - Fibonacci
def fibonacci(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]`}</pre>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Full-Stack Web Development</h3>
            <p className="text-foreground/90 mb-4">
              Proficient in building end-to-end web applications using modern frameworks and best practices.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre className="text-foreground">{`// React Component with Hooks
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return loading ? <Spinner /> : <DataTable data={data} />;
}`}</pre>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Backend API Development</h3>
            <p className="text-foreground/90 mb-4">
              Experience in creating RESTful APIs with proper authentication and database integration.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre className="text-foreground">{`// Express.js API with MongoDB
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// API Routes
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`}</pre>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Key Competencies</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground/90">Object-Oriented Programming (OOP) principles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground/90">RESTful API design and implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground/90">Database design and optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground/90">Version control with Git and GitHub</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground/90">Responsive web design principles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground/90">Authentication and authorization systems</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};
