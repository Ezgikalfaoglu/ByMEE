import { ComingSoon } from '@/navigation/ComingSoon';

/** 30 · Reply draft (BM-055, Eda). Figma frame: 30 · BM-055 · Reply draft · Eda */
export default function ReplyDraftRoute() {
  return (
    <ComingSoon
      id="30"
      name="Reply draft"
      header
      links={[
        { label: "Approve and send → 36", href: "/task/demo/approve" }
      ]}
    />
  );
}
