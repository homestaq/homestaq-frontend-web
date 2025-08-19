import { Button } from "@/components/ui/button";
import Image from "next/image";

import { FaqAccordionItem } from "@/components/shared/FaqAccordionItem";

export default function WaitlistPage() {
  return (
    <div
      className={`min-h-screen bg-[#010101] flex flex-col items-center justify-center relative overflow-hidden`}
    >
      {/* Decorative Stars - Top Left  and Top rIGHT*/}
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

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center gap-9  py-36 w-full  text-center">
        {/* LOGO AND ALL */}
        <div className="flex flex-col items-center gap-3 mb-2">
          {/* Decorative lines and logo */}
          <div className="flex flex-row items-center gap-2 mb-2">
            {/* Left line */}
            <span className="hidden md:inline-block w-[118px] h-[1px] bg-gradient-to-r from-[#F4F4FE] to-transparent opacity-80" />
            {/* Logo SVG */}

            <div className="relative flex flex-col justify-center items-center p-5 gap-4 w-[80px] h-[80px] rounded-full bg-gradient-to-b from-[#262424] to-[#0C0C0C] shadow-md gradient-border">
              <Image
                src="/assets/pendly-waitlist/logo-union-fig.svg"
                alt="Pendly Logo (Figma)"
                width={21}
                height={40}
                priority
              />
            </div>

            {/* Right line */}
            <span className="hidden md:inline-block w-[118px] h-[1px] bg-gradient-to-l from-[#F4F4FE] to-transparent opacity-80" />
          </div>
          <h1 className="text-4xl md:text-5xl text-white tracking-tight mt-10 font-regular">
            Get early access
          </h1>
          <p className="text-base md:text-lg text-[#C3C3C3] max-w-lg mx-auto font-light">
            We’re getting close. Sign up to get early access to Pendly and start
            building your viral waitlist.
          </p>
        </div>
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

        {/* Avatars and join text (Figma: Frame 2147227052) */}
        <div className="flex flex-row items-center gap-5 mt-4">
          <div className="flex flex-row items-center -space-x-4">
            <Image
              src="/assets/pendly-waitlist/avatar-1.png"
              alt="User 1"
              width={48}
              height={48}
              className="rounded-full border-[0.1px] border-[#F7F7F7] bg-white object-cover"
            />
            <Image
              src="/assets/pendly-waitlist/avatar-2.png"
              alt="User 2"
              width={48}
              height={48}
              className="rounded-full border-[0.1px] border-[#F7F7F7] bg-white object-cover"
            />
            <Image
              src="/assets/pendly-waitlist/avatar-3.png"
              alt="User 3"
              width={48}
              height={48}
              className="rounded-full border-[0.1px]  bg-white object-cover"
            />
          </div>
          <span className="text-[#C3C3C3] text-base font-300">
            Join +1,000 others on the waitlist
          </span>
        </div>
        <div className="relative w-full h-[50dvh] border">
          <Image
            src="/assets/pendly-waitlist/image-homee-2.png"
            alt="home"
            fill
            className="w-full object-contain"
            sizes="100vw"
            priority
          />
        </div>
        {/* FAQ SECTION (Figma: Frame 2147227066, Frame 2147227061) */}
        <section className="w-full flex flex-col items-center gap-12 pt-20">
          <div className="flex flex-col items-center gap-3 mb-6">
            <h2 className="text-3xl md:text-5xl font-400 text-white tracking-tight mb-2">
              Frequently asked questions
            </h2>
            <p className="text-base md:text-lg text-[#C3C3C3] max-w-xl mx-auto font-200">
              Everything you need to know about the Soonix template. Find
              answers to the most common questions below.
            </p>
          </div>
          <div className="w-full max-w-xl flex flex-col gap-5">
            <FaqAccordionItem
              question="What is Pendly?"
              answer="Pendly is a viral waitlist platform that helps you build anticipation and grow your audience before launch."
              defaultOpen
            />
            <FaqAccordionItem
              question="How do I join the waitlist?"
              answer="Simply enter your email address above and click Join Waitlist. You’ll be notified as soon as we launch."
            />
            <FaqAccordionItem
              question="Is Pendly free to use?"
              answer="Yes, joining the waitlist is completely free. Early users may get special perks!"
            />
            <FaqAccordionItem
              question="How will I be notified?"
              answer="We’ll send you an email with updates and your invite as soon as Pendly is ready for you."
            />
            <FaqAccordionItem
              question="Can I invite others?"
              answer="Yes! After joining, you’ll get a unique referral link to share with friends and colleagues."
            />
          </div>
        </section>
      </main>
      {/* Decorative Ellipses - Bottom */}
      <Image
        src="/assets/pendly-waitlist/ellipse-8747.svg"
        alt="Ellipse 8747"
        width={600}
        height={300}
        className="absolute left-0 bottom-0 z-0 opacity-40"
      />
      <Image
        src="/assets/pendly-waitlist/ellipse-8748.svg"
        alt="Ellipse 8748"
        width={800}
        height={400}
        className="absolute right-0 bottom-0 z-0 opacity-30"
      />
      <Image
        src="/assets/pendly-waitlist/ellipse-8749.svg"
        alt="Ellipse 8749"
        width={900}
        height={450}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0 opacity-20"
      />
    </div>
  );
}
