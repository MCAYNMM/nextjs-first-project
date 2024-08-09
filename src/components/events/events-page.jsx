import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
  console.log("sdsdsdsd", data);
  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">Event page</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={300} height={`300`} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
