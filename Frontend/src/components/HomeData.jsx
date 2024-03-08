import { useEffect, useState } from "react";
import "../scss/HomeData.scss";

const HomeData = () => {
  const data = [
    {
      id: 1,
      text: "Pure relaxation.",
    },
    {
      id: 2,
      text: "A natural antioxidant.",
    },
    {
      id: 3,
      text: "Liquid happiness.",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
   
      setActive((active) => (active + 1) % data.length);
    }, 4900);
    return () => clearInterval(intervalId);
  });
  const currentData = data[active];

  return (
    <>
      <div className="HomeData">
        <section className="image-container">
          <article className="text-container">
            <h1 className="chai">CHAI.</h1>
            <p className="slogan">{currentData.text}</p>
          </article>
          <img
            className="chai-latte"
            src="/images/chailatte.png"
            alt="chai latte"
          />
        </section>
      </div>
    </>
  );
};

export default HomeData;
