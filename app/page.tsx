"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "../components/Hero"
import HeroMain from "../components/HeroMain"
import HowItWorks from "../components/HowItWorks"
import MiniGames from "../components/MiniGames"
import MonthlyRanking from "../components/MonthlyRanking"
import PlansAndPricing from "../components/PlansAndPricing"
import FinalCTA from "../components/FinalCTA"

export default function Home() {
  const [gateOpened, setGateOpened] = useState(false)

  return (
    <main className="min-h-screen">
      <AnimatePresence>
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
          <HowItWorks />
          <MiniGames />
          <MonthlyRanking />
          <PlansAndPricing />
          <FinalCTA />
        </>
      )}
    </main>
  )
}
