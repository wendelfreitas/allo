<p align="center">
  <img src="https://a.storyblok.com/f/310313/3600x1890/9ce1d6f51f/og_image.png" alt="allO" width="600" />
</p>

<h3 align="center">
  A premium food delivery marketplace
</h3>

<p align="center">
  Built with Next.js 16 &bull; React 19 &bull; Tailwind CSS v4 &bull; Turborepo
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Turborepo-2.8-blueviolet?logo=turborepo" alt="Turborepo" />
</p>

---

## Prerequisites

- **Node.js** >= 18
- **pnpm** >= 9

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/allo.git
cd allo

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The app will be running at **http://localhost:3000**.

## Scripts

Run these from the project root. Turborepo handles orchestration across all apps and packages.

| Command | Description |
|---|---|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all apps and packages |
| `pnpm lint` | Lint all apps and packages |
| `pnpm test` | Run all test suites |
| `pnpm typecheck` | Type-check all packages |
| `pnpm format` | Format all files with Prettier |

### Running a single app

```bash
pnpm dev --filter=@allo/allo
pnpm test --filter=@allo/allo
pnpm build --filter=@allo/allo
```

## Project Structure

```
allo/
├── apps/
│   └── allo/                  Main marketplace app
│       ├── app/               Next.js App Router pages & API routes
│       ├── components/        UI components (each in its own folder)
│       ├── hooks/             React Query hooks
│       ├── store/             Zustand state management
│       └── lib/               Axios client & providers
│
├── packages/
│   ├── ui/                    Shared component library (42 components)
│   ├── hooks/                 Shared React hooks
│   ├── utils/                 Shared utilities (cn, helpers)
│   ├── eslint-config/         ESLint configurations
│   └── typescript-config/     Shared tsconfig presets
│
├── turbo.json                 Turborepo pipeline config
└── package.json               Root workspace config
```

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI** | React 19, Tailwind CSS v4, Radix UI |
| **State** | Zustand (cart, persisted to localStorage) |
| **Data Fetching** | TanStack React Query v5 + Axios |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Component Variants** | Tailwind Variants |
| **Testing** | Jest 30 + React Testing Library |
| **Monorepo** | Turborepo + pnpm Workspaces |
| **Code Quality** | ESLint, Prettier, Husky, Commitlint |

## App Features

- **Homepage** with hero, category carousel, featured restaurants, promo banners, metrics
- **Restaurant listing** with search, cuisine filters, and sorting
- **Restaurant detail** with tabbed menu categories and item details
- **Cart system** with drawer, quantity controls, and restaurant conflict handling
- **Checkout flow** with delivery form, payment selection, and order review
- **Order tracking** with real-time status progression
- **Fully responsive** across mobile, tablet, and desktop
- **Dark theme** with coral (#FF6B55) accent

## API Routes

The app uses Next.js API routes with in-memory mock data to simulate a real backend.

| Endpoint | Method | Description |
|---|---|---|
| `/api/categories` | GET | List cuisine categories |
| `/api/restaurants` | GET | Search, filter, sort, paginate restaurants |
| `/api/restaurants/[slug]` | GET | Restaurant details with full menu |
| `/api/promotions` | GET | Promotional banners |
| `/api/orders` | POST | Create a new order |
| `/api/orders/[id]` | GET | Order status (progresses over time) |

## Testing

Every component has its own test file co-located in its folder.

```bash
# Run all tests
pnpm test

# Run tests for the main app only
pnpm test --filter=@allo/allo

# Watch mode
pnpm test --filter=@allo/allo -- --watch
```

## License

MIT
