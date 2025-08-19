"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

function GradientDecoration() {
  return (
    <>
      {/* Left side decorative elements */}
      <div className="absolute left-[-478px] top-[-188px] opacity-20">
        <div className="relative">
          {/* Main gradient shapes */}
          <div
            className="absolute w-[291px] h-[874px] rotate-[143deg] scale-y-[-1]"
            style={{
              background: "#7b0dae",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute w-[207px] h-[429px] rotate-[143deg] scale-y-[-1] left-[100px] top-[50px]"
            style={{
              background: "#f4dcfe",
              filter: "blur(60px)",
            }}
          />
        </div>
      </div>

      {/* Right side decorative elements */}
      <div className="absolute right-[-478px] top-[-188px] opacity-20">
        <div className="relative">
          <div
            className="absolute w-[291px] h-[874px] rotate-[217deg] scale-y-[-1]"
            style={{
              background: "#7b0dae",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute w-[207px] h-[429px] rotate-[217deg] scale-y-[-1] left-[-100px] top-[50px]"
            style={{
              background: "#f4dcfe",
              filter: "blur(60px)",
            }}
          />
        </div>
      </div>
    </>
  );
}

function DecorativeLine() {
  return (
    <div className="flex flex-row items-center gap-2 mb-2">
      {/* Left line */}
      <span className="hidden md:inline-block w-[118px] h-[1px] bg-gradient-to-r from-[#F4F4FE] to-transparent opacity-80" />
      {/* Logo SVG */}

      <div className="relative flex flex-col justify-center items-center p-5 gap-4 w-[80px] h-[80px] rounded-full bg-gradient-to-b from-[#262424] to-[#0C0C0C] shadow-md gradient-border">
        <Image
          src="/assets/logo-icon.png"
          alt="HomeStaq Logo Icon (Figma)"
          width={41}
          height={60}
          priority
        />
      </div>

      {/* Right line */}
      <span className="hidden md:inline-block w-[118px] h-[1px] bg-gradient-to-l from-[#F4F4FE] to-transparent opacity-80" />
    </div>
  );
}

function EmailSignup() {
  return (
    <form
      className="gradient-border mx-auto flex flex-row items-center justify-between gap-2 p-2 pl-6 w-[360px] md:w-[579px] h-16 rounded-[64px] border border-white/10 bg-gradient-to-b from-[#02071A0A] to-[#02071A29] shadow-[inset_0_-4px_100px_20px_rgba(239,239,239,0.08)] backdrop-blur-[40px]"
      style={
        {
          background:
            "linear-gradient(180deg, rgba(2,7,26,0.04) 0%, rgba(2,7,26,0.16) 100%)",
          "--gradient-border-width": "1px",
        } as React.CSSProperties
      }
    >
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 bg-transparent text-[#C3C3C3] font-300 placeholder-[#C3C3C3] text-base outline-none border-none px-0"
        required
      />
      <Button
        type="submit"
        className="ml-2 h-12 px-6 rounded-[48px] bg-white text-[#02071A] font-medium text-base shadow transition hover:bg-[#F4DCFE]"
        style={{ minWidth: 120 }}
      >
        Join Waitlist
      </Button>
    </form>
  );
}

function UserAvatars() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex -space-x-2">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white/20"></div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white/20"></div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white/20"></div>
      </div>
      <p className="text-[#c3c3c3] text-base">
        Join +10,000 others finding homes
      </p>
    </div>
  );
}

function StatsCounter() {
  const stats = [
    { value: "10000", label: "PROPERTIES" },
    { value: "24", label: "HOURS" },
    { value: "7", label: "DAYS" },
    { value: "0", label: "FEES" },
  ];

  return (
    <div className="flex items-center gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center">
          <div className="glass-card rounded-3xl w-[100px] h-[100px] flex flex-col items-center justify-center p-5">
            <div className="text-white text-2xl font-normal tracking-[-1.44px] leading-8">
              {stat.value}
            </div>
            <div className="text-[#c3c3c3] text-xs uppercase tracking-[1.44px] leading-4 mt-2">
              {stat.label}
            </div>
          </div>
          {index < stats.length - 1 && (
            <div className="text-white text-2xl mx-3">:</div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#010101] overflow-hidden flex items-center justify-center">
            <Image
              className="absolute left-0 top-0 z-0 h-screen w-1/2"
              src="/assets/pendly-waitlist/star-left.svg"
              alt="star gradient left"
              height={180}
              width={180}
            />
            <Image
              className="absolute right-0 top-0 z-0 h-screen w-1/2"
              src="/assets/pendly-waitlist/star-right.svg"
              alt="star gradient right"
              height={180}
              width={180}
            />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMG5pZ2h0fGVufDF8fHx8MTc1NTU1OTEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury modern house at night"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-[#010101]/50 to-transparent"></div>
      </div>

      {/* Decorative gradient elements */}
      <GradientDecoration />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[911px] mx-auto px-6 flex flex-col items-center gap-9 pt-20">
        {/* Decorative line with logo */}
        <DecorativeLine />

        {/* Main heading and description */}
        <div className="text-center space-y-3 w-full">
          <div className="relative max-w-[819px] mx-auto">
            <motion.h1
              className="relative z-0 text-[48px] font-normal leading-[60px] tracking-[-2.88px] w-full bg-gradient-to-r from-white via-[#6f04e0] to-white bg-[length:300%_100%] bg-clip-text text-transparent"
              initial={{ backgroundPositionX: "0%" }}
              animate={{ backgroundPositionX: "200%" }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "300% 100%",
              }}
            >
              Find Your Perfect Home in Nigeria
            </motion.h1>
          </div>
          <p className="text-[#c3c3c3] text-base leading-6 max-w-[407px] mx-auto">
            Skip the unnecessary fees, lengthy inspections, and middleman
            complications. Homestaq connects you directly with verified
            properties.
          </p>
        </div>

        {/* Email signup */}
        <EmailSignup />

        {/* User avatars and social proof */}
        <UserAvatars />

        {/* Stats counter */}
        <StatsCounter />
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[215px] bg-gradient-to-t from-[#010101] to-transparent pointer-events-none"></div>
    </section>
  );
}
