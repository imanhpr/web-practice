import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg flex flex-col space-y-4 bg-dark-800 text-xl p-16 text-light-50 items-center">
      {children}
    </div>
  );
}
