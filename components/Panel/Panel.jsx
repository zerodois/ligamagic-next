import _ from 'lodash';
import './Panel.scss';
import Store from '../Store/Store';
import { formatPrice } from '../../utils'

const Panel = ({ result, onCardClick, onPurchase }) => {
  if(!result) {
    return null;
  }
  return (
    <div className="panel">
      <div className="panel__result">
        <div className="panel__result__title flex flex-center">
          <h1 className="panel__result__title__header flex-1">R$ {formatPrice(result.estimatedCost)} Reais</h1>
          <div>
            <button className="button button--primary">Comprar</button>
          </div>
        </div>
      </div>
      <div>
        {result.stores.map((item, index) => (
          <Store
            onPurchase={onPurchase}
            onCardClick={onCardClick}
            key={index}
            item={item}
          />
        ))}
      </div>
      {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
    </div>
  );
};

export default Panel;
