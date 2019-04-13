import './Panel.scss';
import Store from '../Store/Store';

const Panel = ({ result }) => !result ? null : (
  <div className="panel flex-1">
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
