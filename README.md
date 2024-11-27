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

## Building the Library

To build the library for production, run:

```bash
npm run build
```


---

## License

This project is licensed under the MIT License.

