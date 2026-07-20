import {
  BarChart3,
  Briefcase,
  Calculator,
  CheckCircle2,
  Cloud,
  Database,
  Factory,
  FileCog,
  Headphones,
  Landmark,
  Laptop,
  Layers,
  LineChart,
  Map,
  Network,
  Package as PackageIcon,
  Route,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Tractor,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { IconName } from "@/types/content";

const icons = {
  barChart: BarChart3,
  briefcase: Briefcase,
  calculator: Calculator,
  chartSpline: LineChart,
  checkCircle: CheckCircle2,
  cloud: Cloud,
  database: Database,
  factory: Factory,
  fileCog: FileCog,
  headphones: Headphones,
  landmark: Landmark,
  laptop: Laptop,
  layers: Layers,
  lineChart: LineChart,
  map: Map,
  network: Network,
  package: PackageIcon,
  route: Route,
  server: Server,
  shield: ShieldCheck,
  shoppingCart: ShoppingCart,
  sparkles: Sparkles,
  tractor: Tractor,
  truck: Truck,
  users: Users,
  warehouse: Warehouse,
} satisfies Record<IconName, ComponentType<SVGProps<SVGSVGElement>>>;

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden className={className} />;
}
