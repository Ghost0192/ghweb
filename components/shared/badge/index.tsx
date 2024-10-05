import { ArrowUpRight } from "lucide-react";

interface LocationBadgeProps {
  name: string;
}

export default function LocationBadge({ name }: LocationBadgeProps) {
  return (
    <span className="inline-flex items-center justify-between bg-black text-white px-3 py-1 rounded">
      <span className="text-sm font-medium">{name}</span>
      <ArrowUpRight className="h-4 w-4 ml-2" />
    </span>
  );
}
