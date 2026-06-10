import {
  Boxes,
  Bot,
  Rocket,
  BrainCircuit,
  GraduationCap,
  Lightbulb,
  Cpu,
  Code2,
  CircuitBoard,
  Radio,
  Wifi,
  Wrench,
  Trophy,
  Users,
  FlaskConical,
  School,
  Presentation,
  Sparkles,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/data";

const map = {
  Boxes,
  Bot,
  Rocket,
  BrainCircuit,
  GraduationCap,
  Lightbulb,
  Cpu,
  Code2,
  CircuitBoard,
  Radio,
  Wifi,
  Wrench,
  Trophy,
  Users,
  FlaskConical,
  School,
  Presentation,
  Sparkles,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}
