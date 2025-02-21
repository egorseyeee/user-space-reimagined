
import { useState } from "react";
import { UserRound, MessageSquare, Star, ChartBar, Search, Filter, Play, CreditCard, HelpCircle } from "lucide-react";

const ProfileDashboard = () => {
  const [demoMode, setDemoMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 animate-fadeIn">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <UserRound className="h-8 w-8 text-gray-700" />
              <h1 className="text-2xl font-semibold text-gray-900">Welcome back, John</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <MessageSquare className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <HelpCircle className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Active Agents</h3>
              <ChartBar className="h-5 w-5 text-blue-500" />
            </div>
            <p className="mt-2 text-3xl font-semibold">12</p>
            <p className="text-sm text-gray-500">+2 this month</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Average Rating</h3>
              <Star className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="mt-2 text-3xl font-semibold">4.8</p>
            <p className="text-sm text-gray-500">Based on 156 reviews</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Revenue</h3>
              <CreditCard className="h-5 w-5 text-green-500" />
            </div>
            <p className="mt-2 text-3xl font-semibold">$2,845</p>
            <p className="text-sm text-gray-500">This month</p>
          </div>
        </div>

        {/* Marketplace Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">AI Agents Marketplace</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search agents..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Agent Card */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Marketing Assistant</h3>
                    <p className="text-sm text-gray-500 mt-1">Automates social media management</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Popular
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">4.9 (87 reviews)</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">$29/mo</span>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={() => setDemoMode(true)}
                    className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Try Demo
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Deploy
                  </button>
                </div>
              </div>
            </div>

            {/* More agent cards would go here */}
          </div>
        </section>

        {/* Knowledge Base Section */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Knowledge Base</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-medium text-gray-900">Getting Started Guide</h3>
              <p className="text-sm text-gray-500 mt-1">Learn the basics of AI agent deployment</p>
            </a>
            <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-medium text-gray-900">Video Tutorials</h3>
              <p className="text-sm text-gray-500 mt-1">Step-by-step video guides</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileDashboard;
