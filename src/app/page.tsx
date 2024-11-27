'use client'
import Card from "../components/Card";
import BackCard from "../components/BackCard";

export default function Home() {
  return (
    <div className="h-full flex flex-col flex-wrap justify-evenly items-center bg-gray-900">
      <Card suit="Joker" value="JOKER" height={192} />
      <Card suit="Spade" value="A" height={192}/>
      <Card suit="Club" value="2" height={192} />
      <Card suit="Heart" value="3" height={192}/>
      <Card suit="Diamond" value="4" height={192} />
      <Card suit="Spade" value="5" height={192}/>
      <Card suit="Club" value="6" height={192} />
      <Card suit="Heart" value="7" height={192}/>
      <Card suit="Diamond" value="8" height={192} />
      <Card suit="Spade" value="9" height={192}/>
      <Card suit="Club" value="10" height={192} />
      <Card suit="Heart" value="J" height={192}/>
      <Card suit="Diamond" value="Q" height={192} />
      <Card suit="Spade" value="K" height={192}/>
      <BackCard height={192}/>
    </div>
  );
}
