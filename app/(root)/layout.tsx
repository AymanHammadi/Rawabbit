import Navbar from "@/components/shared/navbar/Navbar";
import RightSidebar from "@/components/shared/RightSidebar";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/context/AuthProvider";

// import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <AuthProvider>
        <Navbar />
        <div className="flex">
          <RightSidebar />
          <section className="overflow-y-auto flex-1 px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 middle-section">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </section>
          <Toaster />
        </div>
        {/* Toaster */}
      </AuthProvider>
    </main>
  );
};

export default Layout;
