import "../scss/InfoSecond.scss"

const InfoSecond = () => {
  return (
    <div className="info-second">
      <article>
        <h3 className="header-second">
        <strong>CHAI.</strong> in Munich offers 10+ delicious chai & chai latte flavors, alongside satisfying vegetarian & non-vegetarian snacks.
        </h3>
        <p>Service: </p>
        <ul>
            <li>Delivery</li>
            <li>Pick-Up</li>
            <li>Online Reservations</li>
        </ul>
      </article>
      <section>
        <img className="" src="/images/store.jpeg" alt="two chai latte" />
      </section>
    </div>
  );
};

export default InfoSecond;
