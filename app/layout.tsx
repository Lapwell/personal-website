import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "The Bron Zone",
  description: "Welcome to the Bron Zone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning={true}>
        <MantineProvider defaultColorScheme="dark">
          <Sidebar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
