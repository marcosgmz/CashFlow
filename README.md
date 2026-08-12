# CashFlow

CashFlow is a Vue 3 financial tracking app for recording income and expenses, reviewing movement history, and visualizing recent cash-flow behavior. It was built as a clean, mobile-style dashboard that demonstrates practical frontend development around a real business concept: helping a user understand where money is coming from, where it is going, and how recent movements affect financial visibility.

## Project Summary

The app lets users register cash movements as either `Ingreso` or `Gasto`. Income is stored as a positive amount, expenses are stored as negative amounts, and every movement includes a title, description, amount, timestamp, and generated ID.

Movements are persisted in browser `localStorage`, so the app keeps its history after refreshes without requiring a backend. The dashboard includes a summary amount, a collapsible movement history panel, delete actions, and an SVG graph that represents movement behavior from the last 30 days.

This project is useful in a portfolio because it shows more than static UI work. It demonstrates state management, component communication, persistence, user input workflows, conditional business logic, and data visualization in a frontend application.

## Features

- Add income and expense movements through a modal form.
- Capture title, amount, description, movement type, timestamp, and ID.
- Convert expenses into negative values automatically.
- Persist movements using `localStorage`.
- Restore saved movements when the app loads.
- Delete individual movements from the history.
- Display positive amounts in green and expenses in red.
- Show a bottom drawer with the complete movement history.
- Generate an SVG line chart from recent movements.
- Use an async splash/loading experience before rendering the main dashboard.

## Screenshots

| Screen | Preview |
|---|---|
| Initial dashboard | ![Initial dashboard](Project%20Screens/init%20screen.png) |
| Add movement | ![Add movement](Project%20Screens/movement%20screen.png) |
| Movement history | ![Movement history](Project%20Screens/historial%20screen.png) |
| Cash-flow graph | ![Cash-flow graph](Project%20Screens/graph%20screen.png) |

## Technical Stack

- Vue 3
- Vite
- JavaScript
- Composition API
- Tailwind CSS utility classes
- Browser `localStorage`
- SVG data visualization
- ESLint and Prettier

## Implementation Highlights

- `src/App.vue` loads the main experience asynchronously and displays `SplashScreen` as the fallback.
- `src/components/Home.vue` manages movement state, creates and removes records, persists data, and prepares chart input.
- `src/components/Action.vue` contains the new-movement modal and applies the income/expense rule.
- `src/components/Movements/` renders the transaction history and delete behavior.
- `src/components/Resume/Index.vue` displays the financial summary and adapts layout when the history drawer is open.
- `src/components/Resume/Graphic.vue` converts movement data into an SVG line chart.
- `src/components/Layout.vue` provides the dashboard layout and collapsible movement drawer.

## Business Value

Cash-flow control is a common need for freelancers, small businesses, and operational teams. Even without a backend, this app models the core workflow of a financial tracking tool: fast transaction entry, persistence, reviewable history, expense/income distinction, and simple trend visualization.

For recruiters, the project shows the ability to build a working frontend product around a business workflow instead of only creating static pages. It also demonstrates how UI components, state, browser storage, and visual feedback can work together to solve a practical financial-data problem.

## Getting Started

Install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

Run linting:

```sh
npm run lint
```

