import Card, { StandardCardType, JokerCardType, ValueTypeStandard, SuitTypeStandard, ValueTypeJoker, SuitTypeJoker } from "./components/Card";
import BackCard from "./components/BackCard";


type AllCardArrayType= StandardCardType[] & JokerCardType[]
export { Card, BackCard,type AllCardArrayType, type StandardCardType, type JokerCardType, type SuitTypeStandard, type ValueTypeStandard, type ValueTypeJoker, type SuitTypeJoker };


