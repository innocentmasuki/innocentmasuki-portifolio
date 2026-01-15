import type { Metadata } from "next";
import "../styles/globals.css";
import AudioPlayer from "@/components/AudioPlayer";
import Link from "next/link";
import NavMenuItem from "@/components/common/navMenuItem";
import Footer from "@/components/section/footer";
import data from "@/components/utils";

export const metadata: Metadata = {
  title: "i.me | Home",
  description: "Innocent Masuki Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white-100 relative">
        <AudioPlayer />
        <div className="flex relative font-visuelt flex-col h-screen">
          <nav className="w-full pb-2 px-4 md:px-10 lg:px-32 fixed top-0 z-50 left-0 bg-white pt-4 flex justify-between">
            <Link href={"/"}>
              <span className="text-4xl font-sacramento home-link">
                <span className="inline md:hidden">i</span>
                <span className="hidden md:inline lg:hidden">innocent</span>
                <span className="hidden md:hidden lg:inline">innocentmasuki</span>
                <span className="text-red-500">.me</span>
              </span>
            </Link>
            <ul className="font-visuelt text-xs gap-x-4 uppercase flex justify-between">
              {data.navMenuRoutes.map((route, index) => (
                <li key={index}>
                  <NavMenuItem title={route.title} path={route.path} />
                </li>
              ))}
            </ul>
          </nav>
          <main className="w-full flex flex-grow">
            <div className="w-full h-full pt-20">{children}</div>
          </main>
          <Footer data={data.mediaData} />
        </div>
      </body>
    </html>
  );
}
