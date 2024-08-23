import React from "react";
import DrawerAppBar from "@/components/AppBar";
import AppFooter from "@/components/AppFooter";

export default function MainLayout({children}: Readonly<{ children: React.ReactNode; }>) {

  return (
    <section>
      <DrawerAppBar>
        {children}
      </DrawerAppBar>
      <AppFooter/>
    </section>
  );
}
