import { useState, useEffect } from 'react';
import _ from 'lodash';
import './Panel.scss';
import Store from '../Store/Store';
import { formatPrice } from '../../utils'

const Status = ({ id, name, active }) => {
  return (
    <div
      className={[
        "status text--uppercase flex flex-center pointer",
        active ? 'status--active' : '',
      ].join(' ')}
    >
      {id}
    </div>
  );
};

const compose = (items, active = true) => {
  const extract = (status, cards) => cards.reduce((p, c) => ({
    ...status,
    [c.status.id]: { ...c.status, active: active || c.status.active }
  }), status);
  const status = items.reduce((p, item) => extract(p, item.cards), {});
  return Object.values(status);
};

const Panel = ({ result }) => {
  if(!result) {
    return null;
  }
  const [status, setStatus] = useState(compose(result.stores));
  return (
    <div className="panel flex-1">
    <div className="panel__result">
    <div className="text--uppercase panel__result__price flex flex-center">
    <div className="panel__result__price__description flex">
    <i className="material-icons text--primary">monetization_on</i>
    <span className="text--primary">Custo estimado</span>
    </div>
    <span className="flex-1">R$ {formatPrice(result.estimatedCost)} reais</span>
    </div>
    <div className="panel__result__filter flex">
    {status.map((item, index) => (
      <Status key={item.id} {...item} active={item.active} />
    ))}
    </div>
    </div>
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
};

export default Panel;
