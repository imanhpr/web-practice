import React from "react";
import Card from "./Card";

function CenterSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="container flex flex-col h-screen-sm mx-auto w-full items-center justify-center">
      <Card>{children}</Card>
    </section>
  );
}

export default CenterSection;
