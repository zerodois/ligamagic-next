const Store = ({ item }) => (
  <section>
    <h4>{item.store.name}</h4>
    {item.cards.map((card, index) => (
      <main key={index}>
        <span>{card.name}</span>
        <span>{card.price}</span>
        <span>{card.quantity}</span>
        <span>{card.language}</span>
      </main>
    ))}
  </section>
);

const Panel = ({ result }) => !result ? null : (
  <div>
    <h1>Resultados</h1>
    <h3>Custo estimado: {result.estimatedCost}</h3>
    <div>
      {result.stores.map((item, index) => (
        <Store
          key={index}
          item={item}
        />
      ))}
    </div>
    {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
  </div>
);

export default Panel;
