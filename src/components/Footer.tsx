import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2024 Your AI Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};