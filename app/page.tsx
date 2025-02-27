"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "../components/Hero"
import HeroMain from "../components/HeroMain"
import HowItWorks from "../components/HowItWorks"
import MiniGames from "../components/MiniGames"
import MonthlyRanking from "../components/MonthlyRanking"
import PlansAndPricing from "../components/PlansAndPricing"
import Testimonials from "../components/Testimonials"
import Ranking from "../components/Ranking"
import AboutUs from "../components/AboutUs"
import Platform from "../components/Platform"
import Methods from "../components/Methods"
import Pricing from "../components/Pricing"
import FinalCTA from "../components/FinalCTA"
import FAQ from "@/components/FAQ"
import Prizes from "../components/Prizes"

export default function Home() {
  const [gateOpened, setGateOpened] = useState(false)

  return (
    <main className="min-h-screen">

      <HeroMain />
          <AboutUs />
          <Platform />
          <Testimonials />
          <Methods />
          <Prizes />
          <Pricing />
          <FAQ />
      {/*<AnimatePresence>
        {!gateOpened && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
          >
            <Hero onGateOpen={() => setGateOpened(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {gateOpened && (
        <>
          <HeroMain />
          <AboutUs />
          <Platform />
          <Methods />
          <Ranking />
          <Prizes />
          <Testimonials />
          <Pricing />
          <FAQ />
        </>
      )}*/}
    </main>
  )
}
