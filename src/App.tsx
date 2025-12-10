/**
 * @copyright 2025 Orem Gitonga.
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { motion } from "motion/react"

/**
 * Custom Modules
 */


/**
 * Components
 */
import { Hero } from "@/components/ui/Hero";

/**
 * Constants
 */


export const App = () => {
  return (
    <main className="flex-flex-col container mx-auto
    p-10 max-w-4xl lg:pr-10
     lg:pl-0 lg:max-w-6xl">

      {/* App Content Goes Here */}
      <Hero />
      
    </main>
  );
}