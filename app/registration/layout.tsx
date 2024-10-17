import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Registration",
};
export default async function RegisterationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
