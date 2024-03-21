import {Detail} from '../interfaces/detail';
import {BUY_LABEL} from '../tokens/tokensApp';

const ActionProduct = ({
  productDetail,
}: {
  productDetail: Detail;
}): JSX.Element => {
  return (
    <section className="detail_action">
      <p>{productDetail.condition || ''}</p>
      <h1>{productDetail.title || ''}</h1>
      <span>{productDetail.price || ''}</span>
      <button type="button" onClick={event => event.preventDefault()}>
        {BUY_LABEL}
      </button>
    </section>
  );
};

export default ActionProduct;
