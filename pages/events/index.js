import Image from "next/image";
import Link from "next/link";
import AllEvents from "../../src/components/events/events-page";

const EventsPage = ({ data }) => {
  return <AllEvents data={data} />;
};

export async function getStaticProps() {
  const { events_categories } = await import("@/data/data.json");
  console.log(events_categories, "ssssssssssssssss");
  return {
    props: {
      data: events_categories,
    },
  };
}

export default EventsPage;
