"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Search, CheckCircle } from "lucide-react"
import Link from "next/link"

const problems = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description: "Build a machine learning model to predict customer churn using historical data",
    difficulty: "Medium",
    category: "Machine Learning",
    solved: true,
    attempts: 1247,
    successRate: 68,
  },
  {
    id: 2,
    title: "Sales Data Analysis",
    description: "Analyze quarterly sales data and identify key trends and patterns",
    difficulty: "Easy",
    category: "Statistics",
    solved: false,
    attempts: 892,
    successRate: 82,
  },
  {
    id: 3,
    title: "Image Classification with CNN",
    description: "Implement a convolutional neural network for image classification",
    difficulty: "Hard",
    category: "Deep Learning",
    solved: false,
    attempts: 456,
    successRate: 34,
  },
  {
    id: 4,
    title: "Text Sentiment Analysis",
    description: "Build a sentiment analysis model for social media posts",
    difficulty: "Medium",
    category: "NLP",
    solved: true,
    attempts: 723,
    successRate: 71,
  },
  {
    id: 5,
    title: "Data Cleaning Challenge",
    description: "Clean and preprocess a messy dataset with missing values and outliers",
    difficulty: "Easy",
    category: "Data Cleaning",
    solved: false,
    attempts: 1156,
    successRate: 89,
  },
  {
    id: 6,
    title: "Time Series Forecasting",
    description: "Predict future stock prices using time series analysis techniques",
    difficulty: "Hard",
    category: "Time Series",
    solved: false,
    attempts: 334,
    successRate: 42,
  },
]

export default function ProblemsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = selectedDifficulty === "all" || problem.difficulty === selectedDifficulty
    const matchesCategory = selectedCategory === "all" || problem.category === selectedCategory

    return matchesSearch && matchesDifficulty && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700"
      case "Medium":
        return "bg-orange-100 text-orange-700"
      case "Hard":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Machine Learning": "bg-blue-100 text-blue-700",
      Statistics: "bg-green-100 text-green-700",
      "Deep Learning": "bg-purple-100 text-purple-700",
      NLP: "bg-pink-100 text-pink-700",
      "Data Cleaning": "bg-orange-100 text-orange-700",
      "Time Series": "bg-teal-100 text-teal-700",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700"
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

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Science Problems</h1>
          <p className="text-gray-600">Practice your data science skills with real-world challenges</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Machine Learning">Machine Learning</SelectItem>
              <SelectItem value="Statistics">Statistics</SelectItem>
              <SelectItem value="Deep Learning">Deep Learning</SelectItem>
              <SelectItem value="NLP">NLP</SelectItem>
              <SelectItem value="Data Cleaning">Data Cleaning</SelectItem>
              <SelectItem value="Time Series">Time Series</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Problems Table */}
        <div className="bg-white rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Title</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Acceptance</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Difficulty</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredProblems.map((problem, index) => (
                  <tr key={problem.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      {problem.solved ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <Link href={`/problems/${problem.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                        {index + 1}. {problem.title}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{problem.successRate}%</td>
                    <td className="py-4 px-4">
                      <Badge className={`${getDifficultyColor(problem.difficulty)} border-0 font-medium`}>
                        {problem.difficulty}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-600 text-sm">{problem.category}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredProblems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No problems found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
