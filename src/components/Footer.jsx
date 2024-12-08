import React from "react";
import Instagram from "../assets/Instagram.svg";
import Youtube from "../assets/Youtube.svg";
import Facebook from "../assets/Facebook.svg";
import Twiter from "../assets/Twiter.svg";
function Footer() {
  return (
    <footer class="bg-white border-t border-gray-200 py-12 sm:py-16">
      <div className="brand w-full px-10 border-b-2 flex justify-between ">
        <div>Badge</div>
        <div className="flex gap-x-4">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twiter} alt="" />
        </div>
      </div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div class="space-y-4">
            <h4 class="text-lg font-medium text-gray-900">Company Info</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="text-lg font-medium text-gray-900">Legal</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="text-lg font-medium text-gray-900">Features</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Business Marketing
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  User Analytic
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="text-lg font-medium text-gray-900">Resources</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  iOS & Android
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Watch a Demo
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  API
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-8 text-center">
          <p class="text-gray-600">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
