import React from 'react';

type SuitTypeStandard = "Spade" | "Heart" | "Diamond" | "Club";
type ValueTypeStandard = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";
type SuitTypeJoker = "Joker";
type ValueTypeJoker = "JOKER";
interface JokerCardType {
    suit: SuitTypeJoker;
    value: ValueTypeJoker;
    height?: 192;
}
interface StandardCardType {
    suit: SuitTypeStandard;
    value: ValueTypeStandard;
    height?: 192;
}
type CardProps = StandardCardType | JokerCardType;
declare const Card: React.FC<CardProps>;

interface BackCardProps {
    height?: number;
}
declare const BackCard: React.FC<BackCardProps>;

export { BackCard, Card, type JokerCardType, type StandardCardType, type SuitTypeJoker, type SuitTypeStandard, type ValueTypeJoker, type ValueTypeStandard };
