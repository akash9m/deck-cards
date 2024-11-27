# Card Library

This library provides two versatile card components: `Card` and `BackCard`. These components are styled dynamically using a combination of Tailwind CSS and JavaScript to ensure flexibility while adhering to standard card dimensions.

---

## Getting Started

### Installation

1. Clone the repository.
2. Install dependencies:

```bash
   npm install
```


### Running the Project

To start the development server, run:

```bash
    npm run dev
```

### Building the Library

To build the library for production, run:

```bash
    npm run build
```

---

## Components

### 1. **Card**

The `Card` component is designed to display playing cards with customizable suits, values, and dimensions.

#### Props
| **Prop**  | **Type**                                    | **Description**                            | **Default**  |
|-----------|---------------------------------------------|--------------------------------------------|--------------|
| `suit`    |`"Heart","Diamond","Club","Spade","Joker"`   | The suit of the card.                      |       -      |
| `value`   |`'A','2','3',....,'10','J','Q','K','JOOKER'` | The value of the card.                     |       -      |
| `height`  | `number`                                    | Height of the card in pixels.              |     `192`    |

#### Example Usage

```tsx
    <Card suit="Heart" value="A" height={290} />
    <Card suit="Joker" value="JOKER" height={250} />
```

---

### 2. **BackCard**

The `BackCard` component renders the back side of a playing card. It is primarily used as a placeholder or in a deck display.

#### Props
| **Prop**  | **Type**  | **Description**               | **Default** |
|-----------|-----------|-------------------------------|-------------|
| `height`  | `number`  | Height of the card in pixels. | `192`       |

#### Example Usage

```tsx
    <BackCard height={250} />
```

---

## Styling Information

The components use both **Tailwind CSS** and **JavaScript** for styling. JavaScript is used for properties that couldn't be directly controlled through Tailwind CSS.

- **Dynamic Scaling**:  
  `_1` is a unit derived from the `height` prop, where `_1` represents `1px` when the height is `192px`. This ensures all styles scale proportionally.  
  For example:
  - `_1 * 10` equals `10px` when `height = 192`.
  - Adjusting `height` dynamically recalculates `_1`.

- **Fixed Width**:  
  The width of the cards is determined based on the standard deck of cards to maintain proper proportions:

```tsx
  const width = (height * 250) / 350;
```

---

## Additional Notes

- The default `height` for both components is `192px`.
- The components are designed to work seamlessly with standard playing card dimensions.
- The library is optimized for both dynamic usage in applications and flexibility in styling.

## License

This project is licensed under the MIT License. See the LICENSE file for details.