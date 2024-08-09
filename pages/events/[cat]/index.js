import Image from "next/image";
import Link from "next/link";
import CatEvent from "../../../src/components/events/catEvent";

const EventsCatPage = ({ data, pageName }) => {
  return <CatEvent data={data} pageName={pageName} />;
};

export async function getStaticPaths() {
  const { events_categories } = await import("@/data/data.json");
  const allPaths = events_categories.map((category) => ({
    params: {
      cat: category.id.toString(),
    },
  }));

  console.log(allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  console.log(context, "sssssssssss");
  const id = context?.params.cat;
  const { allEvents } = require("@/data/data.json");

  const data = allEvents.filter((ev) => ev.city == id);
  console.log("data", data);

  return {
    props: { data, pageName: id },
  };
}

export default EventsCatPage;
