import 'isomorphic-fetch';
import _ from 'lodash';
import './Panel.scss';
import Store from '../Store/Store';
import { formatPrice, BUY_URL } from '../../utils'

const Panel = ({ result, onCardClick, onPurchase }) => {
  if(!result) {
    return null;
  }
  const storeCards = result.stores.map(store => (
    store.cards.map(card => ({
      quantidade: 1,
      id: card.offer,
      preco: parseFloat(card.price / 100).toFixed(2),
    }))
  ));
  const cards = storeCards.reduce((prev, curr) => [...prev, ...curr], []);

  return (
    <div className="panel">
      <div className="panel__result">
        <div className="panel__result__title flex flex-center">
          <h1 className="panel__result__title__header flex-1">R$ {formatPrice(result.best)} Reais</h1>
          <div>
            <form method="POST" target="__blank" action={BUY_URL}>
              <input type="hidden" name="opc" value="carrinho" />
              {cards.map((card, index) => (
                <div key={index}>
                  <input type="hidden" value={card.id} name={`cartas[${index}][id]`}/>
                  <input type="hidden" value={card.quantidade} name={`cartas[${index}][quantidade]`}/>
                  <input type="hidden" value={card.preco} name={`cartas[${index}][preco]`}/>
                </div>
              ))}
              <button className="button button--primary">Comprar</button>
            </form>
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
