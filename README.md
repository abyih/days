# yeha-days 🗓️

An elegant and lightweight TypeScript utility for converting between the **Geez** (Ethiopian) and **Gregorian** calendars.

`yeha-days` provides a familiar, `Date`-like API for the Geez calendar, making it easy to handle dates, perform conversions, and manage Geez-specific conventions without the headache of manual calculations.

## ✨ Features

- **Bidirectional Conversion**: Seamlessly convert between Geez and Gregorian calendars.
- **`GeezDate` Class**: A familiar API that mimics the native JavaScript `Date` object for the Geez calendar.
- **Ethiopic Names**: Built-in support for Geez month and weekday names.
- **Flexible Parsing**: Parse Geez dates from strings or create them from specific components.
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
import { GeezDate } from "yeha-days";

// Get the current Geez date (defaults to now)
const today = new GeezDate();
console.log(today.getFullYear()); // 2018 (Geez Year)
console.log(today.getMonth()); // 9 (Geez Month)
console.log(today.getDate()); // 26 (Geez Date)
console.log(today.getDayName()); // "ረቡዕ" (Wednesday)
console.log(today.getMonthName()); // "ግንቦት"
console.log(today.toString()); // "ረቡዕ ግንቦት 26 2018 10:30:0"

// Create a specific Geez date (Year, Month, Date)
const historicDate = new GeezDate(2014, 12, 30);
console.log(historicDate.getDayName()); // "ሰንበት" (Sunday)

// Parse a Geez date string (YYYY-MM-DD HH:mm:ss)
const parsedDate = new GeezDate("2014-12-30 12:30");
```

### Using the `CustomDate` Class

`CustomDate` extends the native JavaScript `Date` object, providing the full Gregorian API but with added support for Ethiopian-style weekday names.

```typescript
import { CustomDate } from "yeha-days";

const date = new CustomDate();
console.log(date.getFullYear()); // Native year (e.g., 2026)
console.log(date.getDayName()); // Day name in English (e.g., "Wednesday")
```

The `geez_to_gregorian` utility function returns a `CustomDate` instance, allowing you to use native date methods immediately after conversion.

### High-level Conversions

For quick conversions, use the standalone utility functions. They provide a simple way to transition between calendars without manually managing objects.

#### Gregorian to Geez

```typescript
import { gregorian_to_geez } from "yeha-days";

// Returns a GeezDate object
const geez = gregorian_to_geez(2026, 6, 3);
console.log(geez.toString()); // "ረቡዕ ግንቦት 26 2018 ..."
```

#### Geez to Gregorian

```typescript
import { geez_to_gregorian } from "yeha-days";

// Returns a CustomDate object (extends native Date)
const gregorian = geez_to_gregorian(2018, 9, 26);
console.log(gregorian.toDateString()); // "Wed Jun 03 2026"
```

## 📖 Key Concepts

### Month Numbering

Months in the Geez calendar are 1-indexed (1 to 13), where 13 is the Pagumē month.

### String Parsing

The `GeezDate` constructor supports ISO-like strings in the format `YYYY-MM-DD HH:mm:ss`.

## 📜 License

MIT © [AbyiH](https://github.com/abyih) 🇪🇹
