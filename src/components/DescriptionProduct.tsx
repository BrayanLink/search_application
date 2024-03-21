import {Detail} from '../interfaces/detail';
import {DESCRIPTION_PRODUCT} from '../tokens/tokensApp';

const DescriptionProduct = ({
  productDetail,
}: {
  productDetail: Detail;
}): JSX.Element => {
  return (
    <section className="detail_product">
      <img
        src={productDetail.pictures[0].secure_url || ''}
        className="product_image"
        alt={productDetail.title}
        loading="lazy"
      />
      <h2>{DESCRIPTION_PRODUCT}</h2>
      <p>{productDetail.plain_text}</p>
    </section>
  );
};

export default DescriptionProduct;
