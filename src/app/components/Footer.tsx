"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-white/10 bg-black/80 py-8 mt-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg">
          <span className="inline-block w-7 h-7 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500 rounded-lg" />
          Jasper
        </Link>
        {/* Nav */}
        <nav className="flex gap-6 text-sm text-gray-400">
          <Link href="#features" className="hover:text-indigo-400 transition">Features</Link>
          <Link href="#roadmap" className="hover:text-indigo-400 transition">Roadmap</Link>
          <Link href="#integrations" className="hover:text-indigo-400 transition">Integrations</Link>
          <Link href="#beta" className="hover:text-indigo-400 transition">Beta</Link>
        </nav>
        {/* Socials */}
        <div className="flex gap-4 text-gray-400 text-xl">
          <a href="https://github.com/yourusername/jarvis-dashboard" target="_blank" rel="noopener" className="hover:text-indigo-400 transition"><FaGithub /></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener" className="hover:text-indigo-400 transition"><FaTwitter /></a>
          <a href="https://discord.gg/your-invite" target="_blank" rel="noopener" className="hover:text-indigo-400 transition"><FaDiscord /></a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Jasper Dashboard. MIT License.
      </div>
    </footer>
  );
} 