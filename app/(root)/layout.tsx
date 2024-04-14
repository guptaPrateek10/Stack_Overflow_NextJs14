import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        left sidebar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        right sidebar
      </div>
      Toaster component
    </main>
  );
};

export default Layout;
