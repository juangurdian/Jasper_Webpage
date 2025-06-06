"use client";

import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Everything you need to boost your productivity
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <span className="text-sm">{feature.status}</span>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 