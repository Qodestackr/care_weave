import React from "react";
import Link from "next/link";
import { AfyaMedMacShowcaseScroll } from "../components/ui/afyamed-mac-showcase";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-slate-700 dark:bg-[#0B0B0F] w-[80vw] mx-auto">

      <AfyaMedMacShowcaseScroll
        title={
          <span className="text-gray-50">
            Access premium healthcare from your palm.
            <br />Join us in shaping healthcare&apos;s future.
          </span>
        }
        badge={
          <Link href="/afyamed-shif-compliant">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/hospital/mac-scroll-platform.png`}
        showGradient={false}
      />

    </div>
  );
}

const Badge = ({ className }: { className?: string }) => {
  return (
    <>
      <div className="sticker">
        <div className="sticker-content">
          <span>SHIF</span>
          <span>Compliant</span>
        </div>
      </div>

    </>
  );
};
