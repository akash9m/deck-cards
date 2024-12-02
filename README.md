# Deck suits

**`deck-suit`** is a simple, customizable React library for rendering card components. The library provides a `Card` component to display standard playing cards and a `BackCard` component for displaying the back of cards. It is lightweight, styled using Tailwind CSS and JavaScript, and designed for flexibility.

---

## Installation

Install the library via npm:
```bash
npm install deck-suit
```

---

## Usage

Import the components into your project:
```javascript
import { Card, BackCard } from 'deck-suit';
```

---

## Components

### 1. **Card**

The `Card` component renders a customizable playing card with a specified suit, value, and height.

#### Props
| **Prop**  | **Type**                                       | **Description**                            | **Default**   |
|-----------|------------------------------------------------|--------------------------------------------|---------------|
| `suit`    | `"Heart", "Diamond", "Club", "Spade", "Joker"` | The suit of the card.                      |       -       |
| `value`   | `'A','2','3',....,'10','J','Q','K','JOOKER'`   | The value of the card.                     |       -       |
| `height`  | `number`                                       | Height of the card in pixels.              |     `192`     |

#### Example Usage
```jsx
<Card suit="Heart" value="A" height={250} />
<Card suit="Joker" value="JOKER" height={290} />
```

---

### 2. **BackCard**

The `BackCard` component renders the back side of a playing card. It is useful for placeholders or representing a deck.

#### Props
| **Prop**  | **Type**  | **Description**               | **Default** |
|-----------|-----------|-------------------------------|-------------|
| `height`  | `number`  | Height of the card in pixels. | `192`       |

#### Example Usage
```jsx
<BackCard height={300} />
```

---

Here's a detailed explanation of the TypeScript types provided by the library and their potential use cases:

---

## **Types**

```tsx
import { StandardCardType, JokerCardType, SuitTypeStandard, ValueTypeStandard, SuitTypeJoker, ValueTypeJoker, AllCardArrayType } from 'deck-suit';
```

### 1. **StandardCardType**
- **Definition:** Represents a standard playing card with a suit (e.g., Spade, Heart) and a value (e.g., A, 2, K).
- **Properties:**
  - `suit`: `"Spade" | "Heart" | "Diamond" | "Club"`
  - `value`: `"A" | "2" | "3" | ... | "K"`
  - `height?`: Optional property to define the card's height.

#### **Use Case:**
When you need to handle a standard card deck in your application, such as for a card game or a visualization of a deck, use `StandardCardType` to ensure consistent structure.

**Example:**
```typescript
const standardCard: StandardCardType = {
  suit: "Spade",
  value: "A",
  height: 192, // Optional
};
```

---

### 2. **JokerCardType**
- **Definition:** Represents a joker card, where both the suit and value are predefined as `"Joker"`.
- **Properties:**
  - `suit`: `"Joker"`
  - `value`: `"JOKER"`
  - `height?`: Optional property to define the card's height.

#### **Use Case:**
Use this type when handling joker cards separately from standard cards, such as for games where jokers are treated differently.

**Example:**
```typescript
const jokerCard: JokerCardType = {
  suit: "Joker",
  value: "JOKER",
  height: 250, // Optional
};
```

---

### 3. **SuitTypeStandard**
- **Definition:** A union type for all valid suits in a standard deck: `"Spade" | "Heart" | "Diamond" | "Club"`.

#### **Use Case:**
Use `SuitTypeStandard` when you want to restrict inputs or values to valid card suits.

**Example:**
```typescript
const cardSuit: SuitTypeStandard = "Heart"; // Valid
// const invalidSuit: SuitTypeStandard = "Star"; // Error: Not a valid suit
```

---

### 4. **ValueTypeStandard**
- **Definition:** A union type for all valid values in a standard deck: `"A" | "2" | ... | "K"`.

#### **Use Case:**
Use `ValueTypeStandard` to restrict inputs or validate that a card value is within the standard range.

**Example:**
```typescript
const cardValue: ValueTypeStandard = "K"; // Valid
// const invalidValue: ValueTypeStandard = "11"; // Error: Not a valid card value
```

---

### 5. **SuitTypeJoker**
- **Definition:** A fixed type representing the suit of a joker card: `"Joker"`.

#### **Use Case:**
Use `SuitTypeJoker` to explicitly define that a card is a joker.

**Example:**
```typescript
const jokerSuit: SuitTypeJoker = "Joker"; // Always valid
```

---

### 6. **ValueTypeJoker**
- **Definition:** A fixed type representing the value of a joker card: `"JOKER"`.

#### **Use Case:**
Use `ValueTypeJoker` to define the unique value of a joker card.

**Example:**
```typescript
const jokerValue: ValueTypeJoker = "JOKER"; // Always valid
```

---

### 7. **AllCardArrayType**
- **Definition:** A union type combining arrays of `StandardCardType` and `JokerCardType`.

#### **Use Case:**
When working with a complete deck of cards that includes both standard and joker cards, use `AllCardArrayType` to handle them in a unified way.

**Example:**
```typescript
const allCards: AllCardArrayType = [
  { suit: "Spade", value: "A", height: 192 }, // Standard card
  { suit: "Joker", value: "JOKER", height: 192 }, // Joker card
];
```

---


## Styling Information

The components are styled using a mix of **Tailwind CSS** and **JavaScript** for optimal flexibility.

### Notes:
- **Width:** Automatically calculated based on a standard card aspect ratio.
- **_1 Variable:** `_1` is a scaling variable where:
  - `_1` = `1px` when height = `192`.
  - Use `_1 * 10` for `10px`, `_1 * 20` for `20px`, etc.
  - Adjusts dynamically based on the specified height.

---


## Contribution

Contributions are welcome! Feel free to submit issues or pull requests for improvements.

### Installation

1. Clone the repository:- 
```bash
https://github.com/akash9m/deck-suit.git
```

2. Install dependencies:

```bash
npm install
```
## Development

## Running the Project

To start the development server, run:

```bash
npm run dev
```

## To Build the Project

To build the Project for production, run:

```bash
npm run build
```

## Building the Library
to build the library for production, run:

```bash
npm run rollup
```

---

## License

This project is licensed under the MIT License.

