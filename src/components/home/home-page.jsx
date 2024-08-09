import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  return (
    <main>
      {data.map((ev) => (
        <Link href={`/events/${ev.id}`} key={ev.id} passHref>
          <Image width={200} height={`100`} src={`${ev.image}`} />
          <h2 className="text-2xl font-bold">{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
