import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function StyledButton() {
  return (
    <Button
      variant="default"
      size="lg"
      className="bg-emerald-950 hover:bg-green-700 text-white text-base font-semibold rounded-full px-6 py-3 transition-colors duration-300 flex items-center gap-2"
    >
      CONOCE MÁS
      <ArrowUpRight className="w-5 h-5" />
    </Button>
  );
}
