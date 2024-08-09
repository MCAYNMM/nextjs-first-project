import Image from "next/image";
import SingleEvent from "../../../src/components/events/single-events";

const EventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export async function getStaticPaths() {
  const { allEvents } = await import("@/data/data.json");
  const allPaths = allEvents.map((path) => ({
    params: {
      cat: path.city,
      id: path.id,
    },
  }));

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("@/data/data.json");
  const eventData = allEvents.filter((ev) => ev.id === id);
  console.log("eventData", eventData);
  return {
    props: { data: eventData },
  };
}

export default EventPage;
