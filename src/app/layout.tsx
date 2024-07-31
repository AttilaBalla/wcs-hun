import React from "react";
import type {Metadata} from "next";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import theme from "@/theme/theme";
import DrawerAppBar from "@/components/AppBar";
import AppFooter from "@/components/AppFooter";


export const metadata: Metadata = {
  title: "WCS Magyar Kupa",
  description: "Generated by create next app",
  icons: {
    icon: '/static/images/logo.png',
  }
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
    <body>
    <CssBaseline/>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <DrawerAppBar>
          {children}
        </DrawerAppBar>
        <AppFooter/>
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}
