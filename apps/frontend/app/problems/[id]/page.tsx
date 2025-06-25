"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Play, Save, Download, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ProblemPage({ params }: { params: { id: string } }) {
  const [code, setCode] = useState(`import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load the dataset
def solve_problem(data):
    """
    Your solution goes here.
    
    Args:
        data: pandas DataFrame containing the dataset
        
    Returns:
        predictions: array of predictions
    """
    # TODO: Implement your solution
    pass

# Test your solution
if __name__ == "__main__":
    # Sample test case
    pass`)

  const [language, setLanguage] = useState("python")
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState("")

  const problem = {
    id: params.id,
    title: "Customer Churn Prediction",
    description: "Build a machine learning model to predict customer churn using historical data",
    difficulty: "Medium",
    category: "Machine Learning",
    solved: false,
    attempts: 1247,
    successRate: 68,
    timeLimit: "30 minutes",
    memoryLimit: "512 MB",
  }

  const handleRunCode = async () => {
    setIsRunning(true)
    // Simulate code execution
    setTimeout(() => {
      setOutput(`Running test cases...

Test Case 1: ✓ Passed
Test Case 2: ✓ Passed  
Test Case 3: ✗ Failed
Expected: 0.85, Got: 0.82

Accuracy: 67% (2/3 test cases passed)
Runtime: 1.2s
Memory: 45MB`)
      setIsRunning(false)
    }, 2000)
  }

  const handleSubmit = () => {
    // Handle submission logic
    console.log("Submitting solution...")
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700 border-green-200"
      case "Medium":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "Hard":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BarChart3 className="w-7 h-7 text-orange-500" />
            <span className="text-xl font-bold text-gray-900">DataCode</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/problems" className="text-orange-500 font-medium">
              Problems
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900 font-medium">
              Dashboard
            </Link>
            <Link href="/leaderboard" className="text-gray-700 hover:text-gray-900 font-medium">
              Discuss
            </Link>
          </nav>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
            Sign In
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-120px)]">
          {/* Problem Description */}
          <div className="flex flex-col">
            <Card className="flex-1">
              <CardHeader className="border-b">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <CardTitle className="text-xl mb-3">{problem.title}</CardTitle>
                    <div className="flex items-center gap-4">
                      <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
                      <span className="text-sm text-gray-500">Acceptance Rate: {problem.successRate}%</span>
                      {problem.solved && (
                        <div className="flex items-center gap-1 text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          Solved
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="description" className="h-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                    <TabsTrigger value="constraints">Constraints</TabsTrigger>
                  </TabsList>

                  <TabsContent value="description" className="mt-4 space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Problem Statement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        You are given a dataset containing customer information and their churn status. Your task is to
                        build a machine learning model that can predict whether a customer will churn (leave the
                        service) based on their characteristics.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Dataset Description</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>
                          <strong>customer_id:</strong> Unique identifier for each customer
                        </li>
                        <li>
                          <strong>tenure:</strong> Number of months the customer has been with the company
                        </li>
                        <li>
                          <strong>monthly_charges:</strong> Monthly subscription fee
                        </li>
                        <li>
                          <strong>total_charges:</strong> Total amount charged to the customer
                        </li>
                        <li>
                          <strong>contract:</strong> Contract type (Month-to-month, One year, Two year)
                        </li>
                        <li>
                          <strong>churn:</strong> Whether the customer churned (1) or not (0)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Requirements</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Achieve at least 80% accuracy on the test set</li>
                        <li>Handle missing values appropriately</li>
                        <li>Use proper cross-validation techniques</li>
                        <li>Return predictions as a numpy array</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="examples" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Sample Input</h3>
                        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                          {`customer_id,tenure,monthly_charges,total_charges,contract,churn
1,12,65.5,786.0,Month-to-month,0
2,24,89.2,2140.8,One year,0
3,6,45.0,270.0,Month-to-month,1`}
                        </pre>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Expected Output</h3>
                        <pre className="bg-gray-100 p-3 rounded text-sm">
                          {`[0, 0, 1]  # Predictions for test samples`}
                        </pre>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="constraints" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Technical Constraints</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Time limit: {problem.timeLimit}</li>
                          <li>Memory limit: {problem.memoryLimit}</li>
                          <li>Dataset size: 1000-10000 rows</li>
                          <li>Features: 5-20 columns</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Allowed Libraries</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>pandas, numpy, scikit-learn</li>
                          <li>matplotlib, seaborn (for visualization)</li>
                          <li>scipy (for statistical functions)</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Code Editor */}
          <div className="flex flex-col">
            <Card className="flex-1 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Code Editor</CardTitle>
                  <div className="flex items-center gap-2">
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="r">R</SelectItem>
                        <SelectItem value="sql">SQL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 mb-4 bg-gray-900 rounded-lg overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                    <span className="text-gray-300 text-sm font-medium">Code</span>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger className="w-24 h-7 bg-gray-700 border-gray-600 text-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="r">R</SelectItem>
                        <SelectItem value="sql">SQL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="h-96 font-mono text-sm resize-none bg-gray-900 text-gray-100 border-0 focus:ring-0"
                    placeholder="Write your solution here..."
                  />
                </div>

                <div className="flex gap-2 mb-4">
                  <Button onClick={handleRunCode} disabled={isRunning} className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    {isRunning ? "Running..." : "Run Code"}
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                  <Button onClick={handleSubmit} className="ml-auto">
                    Submit Solution
                  </Button>
                </div>

                {output && (
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm max-h-32 overflow-y-auto">
                    <pre>{output}</pre>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
