# yeha-days 🗓️

An elegant and lightweight TypeScript utility for converting between the **Geez** and **Gregorian** calendars.

`yeha-days` provides a familiar, `Date`-like API for the Geez calendar, making it easy to handle dates, perform conversions, and manage Geez-specific time conventions without the headache of manual calculations.

## ✨ Features

- **Bidirectional Conversion**: Seamlessly convert between Geez and Gregorian calendars.
- **`GeezDate` Class**: A familiar API that mimics the native JavaScript `Date` object for the Geez calendar.
- **Time Convention Support**: Built-in support for Geez hour conventions (where the day starts at 6:00 AM Gregorian).
- **Lightweight**: Zero external dependencies.
- **Type Safe**: Written in TypeScript with full type definitions.

## 🚀 Getting Started

### Installation

```bash
npm install yeha-days
# or
bun add yeha-days
```

## 🛠 Usage

### Using the `GeezDate` Class

The `GeezDate` class is the easiest way to work with Geez dates. It behaves much like the standard `Date` object.

```typescript
import { GeezDate } from "yeha-days/date";

// Get the current Geez date (defaults to now)
const today = new GeezDate();
console.log(today.getFullYear()); // Geez Year
console.log(today.getMonth()); // Geez Month (1-13)
console.log(today.getDate()); // Geez Date
console.log(today.getDay()); // Day Name (e.g., "ዓርቢ")

// Create a specific Geez date (Year, Month, Date)
const historicDate = new GeezDate(2014, 12, 30);
console.log(historicDate.getDay()); // "ሰንበት" (Sunday)

// Parse a Geez date string (YYYY-MM-DD)
const parsedDate = new GeezDate("2014-12-30 12:30");
```

### High-level Conversions

For quick conversions, use the standalone utility functions. They provide a simple way to transition between calendars without manually managing objects.

```typescript
import { gregorian_to_geez, geez_to_gregorian } from "yeha-days";

// Convert Gregorian to Geez
const geez = gregorian_to_geez(2026, 6, 3);
console.log(geez.toString());

// Convert Geez back to Gregorian
const gregorian = geez_to_gregorian(2018, 9, 26);
console.log(gregorian.toDateString()); // Wed Jun 03 2026
```

## 📜 License

MIT © [AbyiH](https://github.com/abyih)
