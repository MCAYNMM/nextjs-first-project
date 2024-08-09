import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailValue.match(emailRegex)) {
      setMessage("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValue, eventId: eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log("POST", data);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <div>
      {data.map((data) => (
        <>
          <div>
            <Image src={data.image} width={500} height={300} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <form onSubmit={onSubmit}>
              <label>Get Registered For This Event</label>
              <input ref={inputEmail} type="text" id="email" />{" "}
              <button type="submit">submit</button>
            </form>
            <p>{message}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default SingleEvent;
