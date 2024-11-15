import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/Header";

export const metadata = {
  title: "WhatByte",
  description: "Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header/>
        {children}</body>
    </html>
  );
}
