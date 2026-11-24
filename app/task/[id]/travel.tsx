import { ComingSoon } from '@/navigation/ComingSoon';

/** 26 · Travel plan (BM-053, Eda). Figma frame: 26 · BM-053 · Travel plan · Eda */
export default function TravelPlanRoute() {
  return (
    <ComingSoon
      id="26"
      name="Travel plan"
      header
      links={[
        { label: "Add to calendar → 44", href: "/task/demo/result" }
      ]}
    />
  );
}
