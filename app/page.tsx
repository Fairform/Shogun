import IndustrySelector from "@/components/IndustrySelector";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Generate Your Compliance Pack</h1>
      <IndustrySelector />
    </div>
  );
}