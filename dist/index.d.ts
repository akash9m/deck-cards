import React from 'react';

interface JokerCardProps {
    suit: "Joker";
    value: "JOKER";
    height?: number;
}
interface StandardCardProps {
    suit: "Spade" | "Heart" | "Diamond" | "Club";
    value: "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";
    height?: number;
}
type CardProps = JokerCardProps | StandardCardProps;
declare const Card: React.FC<CardProps>;

interface BackCardProps {
    height: number;
}
declare const BackCard: React.FC<BackCardProps>;

export { BackCard, Card };
