import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatEvent = ({ data, pageName }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">Event in {pageName}</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
