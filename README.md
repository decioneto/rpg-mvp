# 🐉 RPG MVP

An interactive, Next.js-powered Role-Playing Game experience that lets players create and manage their own characters, exploring a rich ruleset directly from the browser.

## 🌟 Overview

RPG MVP is built on an expansive database modeling classic tabletop RPG foundations—allowing users to create accounts, assemble character profiles by choosing names, races, and classes, and ultimately manage their characters dynamic stats such as Hit Points, Attributes, and Proficiencies. Beyond character creation, players will be able to dive into interactive adventures, engage with NPCs, upgrade exploring characters, and experience all the dynamic storytelling and gameplay features a classic RPG has to offer.

## 🚀 Features

### 🔐 Authentication
Secure user login and account management to protect user data and ensure players have ownership of their created characters.

### 🧙‍♂️ Character Management System

#### Guided Character Creation Flow
A step-by-step wizard to build a character from scratch:
1. **Identity**: Define your character's name and grammatical gender preferences.
2. **Race Selection**: Choose from varied races, each applying unique modifiers to your base attributes.
3. **Class Selection**: Pick your combat style. Classes dictate your hit dice, starting proficiencies, and base stats.
4. **Review**: Check over the assembled character sheet before committing it to the database.

#### Character Dashboard
- View all your created characters in one convenient hub.
- Detailed character profiles displaying current/max HP, level, fully computed attributes (base stats + racial modifiers), and skill proficiencies.

### 🎲 Game Canvas
A dedicated immersive area where the RPG session takes place, pre-structured to integrate rich gameplay elements and storytelling.

### 🏗️ Robust Core Ruleset & Data Model
Powering the experience is a structured backend and database architecture:
- **Comprehensive Database**: Relational mappings for Users, Characters, Classes, Races, Attributes, and Skills.
- **Dynamic Calculation System**: Modifiers for races and base attributes are calculated and applied automatically.
- **Extensible Inventory**: A foundational item system (Weapons, Armors, Consumables) ready for loot allocation and character equipping.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **UI Library**: [React](https://react.dev)
- **Database ORM**: [Prisma ORM](https://www.prisma.io/)
- **Database Engine**: PostgreSQL
- **Backend Architecture**: Layered Repository-Service pattern for scalable, clean operations.

## 💻 Getting Started

### Prerequisites

Ensure you have Node.js and npm (or pnpm/yarn/bun) installed, along with a running instance of PostgreSQL.

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Setup Environment Variables:
   Rename `.env.example` (if available) to `.env` and fill in your database connection strings, specifically `DATABASE_URL` and `DIRECT_URL`.

3. Run migrations and sync the database:
   ```bash
   npx prisma generate
   npx prisma db push
   # or use `npx prisma migrate dev` based on your migration workflow
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app in action!

---
_Built for tabletop RPG lovers, blending classic game models with modern web architecture._
