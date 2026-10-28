# Specification: Add Volterra Project to Portfolio

## Overview
Add the "VOLTERRA" project to Ziad Ashraf's portfolio at `/project` (`src/components/Projects/Projects.js`), using the uploaded screenshot and live deployment URL (`https://volterra-26co.vercel.app/`).

## Requirements
1. **Placement Constraint**:
   - MUST NOT be placed in the first row.
   - Positioned in the second row (position 4), creating a symmetrical 3x3 layout (3 items per row on `md={4}`).
2. **Asset Management**:
   - Store screenshot in `src/Assets/Projects/volterra.png` (and `volterra.jpg`).
   - Aspect ratio: 1024x502 (consistent 2:1 cover ratio).
3. **Project Card Metadata**:
   - Title: VOLTERRA
   - Description: A premium athletic e-commerce platform for high-performance compression shirts engineered for training, strength, and recovery. Built with Next.js 16, React 19, TypeScript, TailwindCSS, Radix UI, Stripe checkout, and Prisma ORM.
   - Demo Link: `https://volterra-26co.vercel.app/`
   - GitHub Link: `https://github.com/ZiaddAshraf/VOLTERRA`
   - Technologies: `["Next.js", "React", "TypeScript", "TailwindCSS", "Stripe", "Prisma", "E-commerce"]`
   - Featured: `true`
4. **Verification**:
   - Verify build and hot reload (`npm run build`).
