"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Trophy, Target, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Bar, BarChart, XAxis, YAxis, PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const skillData = [
  { skill: "Machine Learning", progress: 75, problems: 12 },
  { skill: "Statistics", progress: 60, problems: 8 },
  { skill: "Data Cleaning", progress: 90, problems: 15 },
  { skill: "Deep Learning", progress: 45, problems: 6 },
  { skill: "NLP", progress: 55, problems: 7 },
]

const activityData = [
  { day: "Mon", problems: 3 },
  { day: "Tue", problems: 5 },
  { day: "Wed", problems: 2 },
  { day: "Thu", problems: 7 },
  { day: "Fri", problems: 4 },
  { day: "Sat", problems: 6 },
  { day: "Sun", problems: 1 },
]

const difficultyData = [
  { name: "Easy", value: 25, color: "#10b981" },
  { name: "Medium", value: 18, color: "#f59e0b" },
  { name: "Hard", value: 7, color: "#ef4444" },
]

export default function DashboardPage() {
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
            <Link href="/problems" className="text-gray-700 hover:text-gray-900 font-medium">
              Problems
            </Link>
            <Link href="/dashboard" className="text-orange-500 font-medium">
              Dashboard
            </Link>
            <Link href="/leaderboard" className="text-gray-700 hover:text-gray-900 font-medium">
              Discuss
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Track your progress and improve your data science skills</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Solved</p>
                  <p className="text-2xl font-bold text-gray-900">50</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Streak</p>
                  <p className="text-2xl font-bold text-gray-900">7</p>
                </div>
                <Target className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ranking</p>
                  <p className="text-2xl font-bold text-gray-900">#247</p>
                </div>
                <Trophy className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Points</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Skills Progress */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Skills Progress</CardTitle>
              <CardDescription>Your proficiency in different data science areas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillData.map((skill) => (
                <div key={skill.skill} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.skill}</span>
                    <span className="text-gray-500">{skill.problems} problems solved</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                  <div className="text-right text-xs text-gray-500">{skill.progress}%</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Problems by Difficulty */}
          <Card>
            <CardHeader>
              <CardTitle>Problems by Difficulty</CardTitle>
              <CardDescription>Distribution of solved problems</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  easy: { label: "Easy", color: "#10b981" },
                  medium: { label: "Medium", color: "#f59e0b" },
                  hard: { label: "Hard", color: "#ef4444" },
                }}
                className="h-[200px]"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Pie data={difficultyData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                    {difficultyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
              <div className="mt-4 space-y-2">
                {difficultyData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
              <CardDescription>Problems solved this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  problems: { label: "Problems", color: "#3b82f6" },
                }}
                className="h-[200px]"
              >
                <BarChart data={activityData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="problems" fill="var(--color-problems)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
              <CardDescription>Your latest milestones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Trophy className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="font-medium">ML Master</p>
                  <p className="text-sm text-gray-600">Solved 10 Machine Learning problems</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Target className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="font-medium">Week Warrior</p>
                  <p className="text-sm text-gray-600">7-day solving streak</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <TrendingUp className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="font-medium">Rising Star</p>
                  <p className="text-sm text-gray-600">Improved ranking by 50 positions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
