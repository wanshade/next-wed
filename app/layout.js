import "./globals.css";
export const metadata = {
  title: "Wedding Of Karina & Wawan",
  description: "Undangan digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
