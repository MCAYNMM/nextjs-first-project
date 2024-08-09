import { Inter } from "next/font/google";
import HomePage from "../src/components/home/home-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-3 pt-32 ${inter.className}`}
    >
      <HomePage data={data} />
    </main>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("@/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
