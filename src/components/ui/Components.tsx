/**
 * @copyright 2025 Orem Gitonga.
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useState } from "react"

/**
 * Custom Modules
 */
import { cn } from "@/lib/utils";

/**
 * Constants
 */
import { socialLinks } from "@/constants"

export const Profile = () => {
    return (
    <aside className='max-w-3xl border m-6
    border-neutral-600 bg-neutral-900 text-white
    p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'>
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-x-10">
                <h1 className="text-3xl font-bold">Orem</h1>


                <p className="text-sm">DevSecOps Engineer</p>
            </div>

            <img 
            src="portfolio-profile-orem.jpg" 
            alt="Orem"
            className="lg:w-96   rounded-2xl object-cover" 
            />
            <div className="mt-6">
                <p className="text-sm text-neutral-300">Specialization:</p>

                <p className="text-lg capitalize">Security Engineer with Software Development Background</p>
            </div>

            <div>
                <p className="text-sm text-neutral-300">Based in:</p>

                <p className="text-lg capitalize">Based in Sydney, Australia</p>
            </div>
        </div>
    </aside>
    );
    
}