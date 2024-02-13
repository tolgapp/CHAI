/* eslint-disable react/no-unescaped-entities */
import "../scss/InfoPage.scss";
import data from "../assets/howtomake.json";

const InfoPageData = () => {
  return (
    <div className="infoPageDiv">
      <h1>A flavorful and healthy beverage</h1>
      <div className="what-is-chai">
        <section>
          <h2>What is Chai Tea?</h2>
          <p>
            Chai tea is a spiced tea beverage that originated in India. It is
            typically made with black tea, milk, sugar, and spices such as
            cardamom, cinnamon, ginger, and cloves. Chai tea can be enjoyed hot
            or cold, and it is a popular drink in many countries around the
            world.
          </p>
        </section>
        <img src="/images/chai-info1.jpeg" alt="chai" />
      </div>
      <div className="benefits">
        <img src="/images/chai-info2.jpeg" alt="chai" />
        <section>
          <h2>Health Benefits of Chai Tea</h2>
          <p>
            Chai tea is a good source of antioxidants, which can help protect
            your body against damage from free radicals. Antioxidants have been
            linked to a number of health benefits, including a reduced risk of
            heart disease, cancer and Alzheimer's disease.
          </p>
        </section>
      </div>
      <section className="howtomakechai">
        <ol>
          <h3>How to make Chai Tea</h3>
          <p>Ingredients</p>
          {data.map((elt) => {
            return <li key={elt.id}>{elt.text}</li>;
          })}
        </ol>
        <img src="/images/ingredients.jpg" alt="chai ingredients" />
      </section>
    </div>
  );
};

export default InfoPageData;
