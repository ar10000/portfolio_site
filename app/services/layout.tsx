import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - AI Development & Workflow Automation | Andrew Ryan",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

