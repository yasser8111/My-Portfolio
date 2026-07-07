"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("@/components/layout/SmoothScroll"), {
  ssr: false,
});

export default function SmoothScrollWrapper({ children }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
