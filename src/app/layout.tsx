

import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ProfileProvider } from "@/context/ProfileContext";
import { getProfile } from "@/services/profile.service";
import type { Profile } from "@/types/api.types";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHGR Entertainment | Stories That Inspire",
  description:
    "SHGR Entertainment is an Indian film and web series production house creating devotional and fiction stories.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let profile: Profile | null = null;

  try {
    // Fetch profile from backend API.
    // getProfile() uses Next.js fetch revalidation (300 seconds).
    profile = await getProfile();
  } catch (error: unknown) {
    console.error("Failed to load profile:", error);
  }

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${manrope.variable}`}>
        <ProfileProvider profile={profile}>
          <Header />

          {children}

          <Footer />
        </ProfileProvider>
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import { Playfair_Display, Manrope } from "next/font/google";
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   variable: "--font-playfair",
//   display: "swap",
// });

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   variable: "--font-manrope",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "SHGR Entertainment | Stories That Inspire",
//   description:
//     "SHGR Entertainment is an Indian film and web series production house creating devotional and fiction stories.",
//   icons: {
//     icon: "/images/logo.png",
//     shortcut: "/images/logo.png",
//     apple: "/images/logo.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${playfair.variable} ${manrope.variable}`}>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
