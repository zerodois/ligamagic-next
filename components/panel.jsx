const Store = ({ name, infos }) => (
  <section>
    <h4>{name}</h4>
    {infos.map((info, index) => (
      <main key={index}>
        <span>{info.card.name}</span>
        <span>{info.price}</span>
        <span>{info.quantity}</span>
        <span>{info.language}</span>
      </main>
    ))}
  </section>
);

const Panel = ({ result }) => !result ? null : (
  <div>
    <h1>Resultados</h1>
    <h3>Custo estimado: {result.estimatedCost}</h3>
    <div>
      {Object.entries(result.stores).map(([name, infos]) => (
        <Store
          key={name}
          name={name}
          infos={infos}
        />
      ))}
    </div>
    {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
  </div>
);

export default Panel;
