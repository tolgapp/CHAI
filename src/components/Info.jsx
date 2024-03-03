import "../scss/Info.scss";

const Info = () => {

  return (
    <div className="info">
      <section>
        <img
            className="chai12"
            src="/images/chai12.jpg"
            alt="two chai latte"
          />
        <img
          className="chai11"
          src="/images/chai11.jpg"
          alt="chai latte picture"
        />
        <img
          className="freshchai"
          src="/images/freshchai.jpeg"
          alt="chai latte picture"
        />
      </section>
      <article>
      <h3 className="chai-info">
          Enjoy a chai latte - our blend of black tea with aromatic spices made
          with steamed milk and honey.
        </h3>
      </article>
    </div>
  );
};

export default Info;
