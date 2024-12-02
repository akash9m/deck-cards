import React from "react";
import { SiChessdotcom } from "react-icons/si";
import { GiChessKing, GiChessQueen } from "react-icons/gi";
import JOKER from "../assets/joker.png";
import Image from "next/image";

// Types for suits and values for standard and joker cards
export type SuitTypeStandard = "Spade" | "Heart" | "Diamond" | "Club";
export type ValueTypeStandard = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";

// Types for joker card (suit and value are both "Joker")
export type SuitTypeJoker = "Joker";
export type ValueTypeJoker = "JOKER";

// Interfaces for the card types
export interface JokerCardType {
    suit: SuitTypeJoker;  // "Joker"
    value: ValueTypeJoker; // "Joker"
    height?:192
}

export interface StandardCardType {
    suit: SuitTypeStandard;  // One of "Spade" | "Heart" | "Diamond" | "Club"
    value: ValueTypeStandard; // One of "A" | "2" | "3" | "4" | etc.
    height?:192
}

// Union type to allow either a StandardCard or a JokerCard
export type CardProps = StandardCardType | JokerCardType;


const suitIcons: Record<CardProps["suit"], JSX.Element | string> = {
  Spade: "♠",
  Heart: "♥",
  Diamond: "♦",
  Club: "♣",
  Joker: <Image src={JOKER} alt="Joker" height={100} width={100} />,
};

const allowedSuits = ["Spade", "Heart", "Diamond", "Club", "Joker"];
const allowedValuesForStandard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const allowedValuesForJoker = ["JOKER"];



const Card: React.FC<CardProps> = ({ suit, value, height = 192 }) => {

  const isRed = suit === "Heart" || suit === "Diamond"; // Red suits

  // Function to determine how many times to display the suit icon
  const getIconCount = (value: string): number => {
    if (suit === "Joker") {
      return 1; // Always display one Joker icon
    }
    if (value === "A" || value === "J" || value === "Q" || value === "K") {
      return 1; // For face cards and Ace, show one icon
    }
    return parseInt(value, 10); // For number cards, show the icon as many times as the value
  };

  const iconCount = getIconCount(value || "A");
  const width = (height * 250) / 350;
  const _1 = height / 192; //1 px value at height 192
  const iconSize =iconCount < 2 ?(value!='A'?_1 * 90: _1 * 140): iconCount < 3 ? _1 * 70 : iconCount < 5 ? _1 * 60 : iconCount < 7 ? _1 * 50 : iconCount < 10 ? _1 * 40 : _1 * 30;

  const ErrorCard = (message: string) => {
    return (<div style={{
      height,
      width,
      padding: `${_1 * 2}px ${_1 * 20}px`,
      borderRadius: _1 * 6,
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'red',
      fontWeight: 'bold',
      fontSize: _1 * 12
    }} >
      {message}
    </div>)
  }
  // Validate suit and value for correct combinations
  if (!allowedSuits.includes(suit)) {
    return ErrorCard(`Error: Invalid 'suit'. Allowed suits are: Spade, Heart, Diamond, Club, Joker.`)
  }

  // Check that the value is only "JOKER" when the suit is "Joker"
  if (suit === "Joker" && value !== "JOKER") {
    return ErrorCard(`Error: When 'suit' is "Joker", 'value' must be "JOKER".`)
  }

  // Check if the value is valid for standard suits (Spade, Heart, Diamond, Club)
  if (suit !== "Joker" && !allowedValuesForStandard.includes(value)) {
    return ErrorCard(`Invalid 'value'. Allowed values for standard cards are: A, 2, 3, ..., J, Q, K.`)

  }

  // Check that "JOKER" value is not used with standard suits
  if (suit !== "Joker" && allowedValuesForJoker.includes(value)) {
    return ErrorCard(`The value "JOKER" is only allowed when the 'suit' is "Joker".`)

  }
  return (
    <div
      style={{
        height,
        width,
        padding: `${_1 * 2}px ${_1 * 3}px`,
        borderRadius: _1 * 6,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        color: isRed ? '#F44336' : 'black',
      }}
    >
      {/* Top value and suit */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: _1 * 20,
            fontWeight: 'bold',
            writingMode: value === "JOKER" ? 'vertical-rl' : "horizontal-tb",
            textOrientation: 'upright',
            lineHeight: 1,
          }}
        >
          {value == 'JOKER' ? `${value}●●●` : value}
        </span>
        <span
          style={{
            fontSize: _1 * 15,
            position: 'relative',
            bottom: _1 * 7,
          }}
        >
          {value !== "JOKER" && suitIcons[suit]}
        </span>
      </div>

      {/* Center suit icon(s) */}
      <div
        style={{
          display: 'flex',
          flexDirection: iconCount <= 4 ? 'column' : 'row',
          alignItems: 'center',
          alignContent:'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          gap: _1 * 10,
          padding: `${_1 * 13}px 0px`,
        }}
      >
        {Array.from({ length: iconCount }).map((_, index) => (
          <div key={index} style={{ fontSize: iconSize, lineHeight: 1 }}>
            {value === 'K' ? (
              <GiChessKing />
            ) : value === 'Q' ? (
              <GiChessQueen />
            ) : value === 'J' ? (
              <SiChessdotcom />
            ) : (
              suitIcons[suit]
            )}
          </div>
        ))}
      </div>

      {/* Bottom value and suit */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: 'rotate(180deg)',
        }}
      >
        <span
          style={{
            fontSize: _1 * 20,
            fontWeight: 'bold',
            writingMode: value === "JOKER" ? 'vertical-rl' : "horizontal-tb",
            textOrientation: 'upright',
            lineHeight: 1,
          }}
        >
          {value == 'JOKER' ? `${value}●●●` : value}
        </span>
        <span
          style={{
            fontSize: _1 * 15,
            position: 'relative',
            bottom: _1 * 7,
          }}
        >
          {value !== "JOKER" && suitIcons[suit]}
        </span>
      </div>
    </div>
  );
};

export default Card;
