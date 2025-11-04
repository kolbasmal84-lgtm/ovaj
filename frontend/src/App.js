import "./App.css";
import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Simple</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Welcome to
            <span className="block mt-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Simplicity
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            A clean and minimal space for your ideas. 
            Experience the beauty of simplicity with elegant design 
            and thoughtful details.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-900 px-8 py-6 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-32 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Clean Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Minimalist aesthetics that put your content first. 
              Every element serves a purpose.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-gray-900 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast & Simple</h3>
            <p className="text-gray-600 leading-relaxed">
              Lightweight and optimized for performance. 
              No unnecessary complexity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-gray-900 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">User Focused</h3>
            <p className="text-gray-600 leading-relaxed">
              Built with user experience in mind. 
              Simple, intuitive, and delightful.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 mt-32 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>© 2025 Simple. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
