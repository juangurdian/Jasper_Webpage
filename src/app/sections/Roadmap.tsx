"use client";

import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Roadmap
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Our vision for the future of Jarvis
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-gray-800 px-3 text-lg font-medium text-gray-900 dark:text-white">
                Timeline
              </span>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            {siteConfig.roadmap.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      item.completed
                        ? "bg-green-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  >
                    {item.completed ? "✓" : "○"}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 