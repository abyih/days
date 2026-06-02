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
import { GeezDate } from "./date";

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

### Low-level Conversions

If you just need raw conversion numbers, you can use the internal conversion utilities.

```typescript
import { fixed_from_geez, geez_from_fixed } from "./geez";
import { fixed_from_gregorian, gregorian_from_fixed } from "./gregorian";

// Convert Gregorian to Geez manually
const fixed = fixed_from_gregorian(2026, 6, 2);
const geezDate = geez_from_fixed(fixed);
console.log(geezDate); // { year: 2018, month: 9, date: 25 }
```

## 📖 Key Concepts

### The "Fixed" Date

Internally, `yeha-days` uses a "fixed" date representation (Rata Die). This represents the number of days since January 1st, Year 1 (Gregorian). This allows for highly accurate calculations across different calendar systems.

### Geez Hours

In the Geez tradition, the 12-hour clock often starts "at dawn." `yeha-days` includes utilities to convert Gregorian 24-hour time to Geez time conventions.

```typescript
import { geez_hour_from_gregorian } from "./time";

// 8 AM Gregorian is 2:00 in the Geez morning clock
console.log(geez_hour_from_gregorian(8)); // 2
```

## 📜 License

MIT © [AbyiH](https://github.com/abyih)
