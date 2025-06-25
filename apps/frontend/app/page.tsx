"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Brain,
  Code,
  Database,
  Trophy,
  Users,
  ArrowRight,
  Play,
  Star,
  ChevronRight,
  Target,
  BookOpen,
  Cpu,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const challenges = [
    {
      title: "Python Fundamentals",
      description: "Master Python basics with interactive coding exercises",
      icon: Code,
      difficulty: "Beginner",
      lessons: 24,
      color: "bg-blue-500",
    },
    {
      title: "SQL Mastery",
      description: "Query databases like a pro with hands-on SQL challenges",
      icon: Database,
      difficulty: "Intermediate",
      lessons: 18,
      color: "bg-teal-500",
    },
    {
      title: "Machine Learning",
      description: "Build predictive models with scikit-learn and pandas",
      icon: Brain,
      difficulty: "Advanced",
      lessons: 32,
      color: "bg-purple-500",
    },
    {
      title: "Deep Learning",
      description: "Neural networks and AI with TensorFlow and PyTorch",
      icon: Cpu,
      difficulty: "Expert",
      lessons: 28,
      color: "bg-indigo-500",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Sarah Chen", points: 2847, avatar: "SC" },
    { rank: 2, name: "Alex Rodriguez", points: 2756, avatar: "AR" },
    { rank: 3, name: "Maya Patel", points: 2689, avatar: "MP" },
    { rank: 4, name: "David Kim", points: 2634, avatar: "DK" },
    { rank: 5, name: "Emma Wilson", points: 2598, avatar: "EW" },
  ]

  const testimonials = [
    {
      name: "Jessica Liu",
      role: "Data Scientist at Google",
      content: "This platform transformed my career. The hands-on approach made complex ML concepts finally click.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Analytics Manager at Netflix",
      content: "The SQL challenges are incredibly practical. I use what I learned here every day at work.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "ML Engineer at Uber",
      content: "From zero to landing my dream job in 8 months. The structured learning path is phenomenal.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">DataMaster</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Learn
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Challenges
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Competitions
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Community
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start Free</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Learn
                </Link>
                <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Challenges
                </Link>
                <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Competitions
                </Link>
                <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Community
                </Link>
                <div className="pt-4 pb-2 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Sign In
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 Join 50,000+ Data Scientists</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Master Data Science
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}
                    by Doing
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Learn Python, SQL, and Machine Learning through interactive challenges. Practice with real datasets
                  and compete with the global community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Start Learning Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 px-8 py-3 text-lg">
                  <Play className="mr-2 w-5 h-5" />
                  Try a Challenge
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span>50,000+ learners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-purple-500" />
                  <span>1,000+ challenges</span>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Python Challenge</h3>
                    <Badge className="bg-green-100 text-green-700">Completed</Badge>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                    <div>{">"} import pandas as pd</div>
                    <div>{">"} df = pd.read_csv('data.csv')</div>
                    <div>{">"} df.head()</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Progress: 85%</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-purple-500 text-white p-3 rounded-full shadow-lg">
                <Brain className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white p-3 rounded-full shadow-lg">
                <Database className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 3-step approach helps you master data science faster than traditional methods
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">1. Learn Interactively</h3>
              <p className="text-gray-600">Master concepts through hands-on coding exercises and real-world projects</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">2. Practice Daily</h3>
              <p className="text-gray-600">
                Solve coding challenges and work with real datasets to build muscle memory
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">3. Compete & Excel</h3>
              <p className="text-gray-600">
                Join competitions, climb leaderboards, and showcase your skills to employers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Learning Tracks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured courses designed by industry experts to take you from beginner to job-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 ${challenge.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{challenge.title}</CardTitle>
                  <CardDescription className="text-gray-600">{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      {challenge.difficulty}
                    </Badge>
                    <span className="text-sm text-gray-500">{challenge.lessons} lessons</span>
                  </div>
                  <Button className="w-full group-hover:bg-blue-700 transition-colors">
                    Start Learning
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Competition & Leaderboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white hover:bg-white/20">🏆 Live Competition</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">Compete with the Best</h2>
                <p className="text-xl text-blue-100">
                  Join our monthly data science competitions with real prizes and recognition from top companies.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold">Next Competition</h3>
                <div className="space-y-2">
                  <p className="text-blue-100">Customer Churn Prediction Challenge</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span>Prize Pool: $10,000</span>
                    <span>•</span>
                    <span>Starts in 3 days</span>
                  </div>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-gray-100">Register Now</Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Global Leaderboard</h3>
                <Badge className="bg-yellow-100 text-yellow-700">
                  <Trophy className="w-3 h-3 mr-1" />
                  Top 5
                </Badge>
              </div>

              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                        index === 0
                          ? "bg-yellow-500"
                          : index === 1
                            ? "bg-gray-400"
                            : index === 2
                              ? "bg-orange-500"
                              : "bg-blue-500"
                      }`}
                    >
                      {user.rank}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.points.toLocaleString()} points</p>
                    </div>
                    {index < 3 && (
                      <Trophy
                        className={`w-5 h-5 ${
                          index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-400" : "text-orange-500"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-6">
                View Full Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Loved by Data Scientists Worldwide</h2>
            <p className="text-xl text-gray-600">Join thousands who've transformed their careers with DataMaster</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 mb-8">Trusted by data teams at leading companies</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Netflix</div>
            <div className="text-2xl font-bold text-gray-400">Uber</div>
            <div className="text-2xl font-bold text-gray-400">Airbnb</div>
            <div className="text-2xl font-bold text-gray-400">Meta</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Start Your Data Science Journey?</h2>
            <p className="text-xl text-gray-300">
              Join 50,000+ learners who are already mastering data science with our interactive platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Start Learning Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              View Pricing
            </Button>
          </div>

          <p className="text-sm text-gray-400">No credit card required • 7-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DataMaster</span>
              </div>
              <p className="text-gray-400">
                The fastest way to master data science through interactive learning and real-world challenges.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Python
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    SQL
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Deep Learning
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Challenges
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Competitions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 DataMaster. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
