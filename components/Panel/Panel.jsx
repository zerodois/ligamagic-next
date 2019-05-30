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
        <div className="text--uppercase panel__result__price flex flex-center">
          <div className="panel__result__price__description flex">
            <i className="material-icons text--primary">monetization_on</i>
            <span className="text--primary">Custo estimado</span>
          </div>
          <span className="flex-1">R$ {formatPrice(result.estimatedCost)} reais</span>
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
