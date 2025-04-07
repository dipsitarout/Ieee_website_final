import React from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import ParticlesComponent from './particle';

export default function ContactUs() {
  return (
    <div className="relative text-white">
      {/* Particles in background */}
      <ParticlesComponent id="particles" />

      {/* Footer Content */}
      <footer className="py-12 mt-auto relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Left Section */}
            <div className="col-span-1 md:col-span-2">
              <a href="/" className="font-bold text-xl mb-4 block">
                IEEE Photonics Society
              </a>
              <p className="text-gray-400 mb-4 max-w-md">
                Advancing light-based technologies through innovation, collaboration, and education. Join our mission to inspire the next generation of photonics leaders.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" aria-label="GitHub" className="hover:scale-150 transition-colors duration-200">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className="hover:scale-150 transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:scale-150 transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-right">
              <h3 className="font-medium mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-end items-center gap-2 hover:text-white transition-colors duration-200">
                  <MapPin className="h-4 w-4" />
                  VIT Chennai, Kelambakkam Rd
                </li>
                <li className="flex justify-end items-center gap-2 hover:text-white transition-colors duration-200">
                  <MapPin className="h-4 w-4 invisible" />
                  Chennai, Tamil Nadu 600127
                </li>
                <li className="flex justify-end items-center gap-2 hover:text-white transition-colors duration-200">
                  <Phone className="h-4 w-4" />
                  +91 9876543210
                </li>
                <li className="flex justify-end items-center gap-2 hover:text-white transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                  ieee-photonics@vit.ac.in
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-gray-400 text-sm text-left">
              © {new Date().getFullYear()} IEEE Photonics Society - VIT Chennai. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-right mt-4 md:mt-0">
              Made under the leadership of Ishitva Pandey (2024–2025)<br />
              by Shreyash and Dipsita
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
