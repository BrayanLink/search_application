import {currencyFormatter} from '../helpers/formatPrice';
import {Product} from '../interfaces/product';

const ProductItem = ({product}: {product: Product}): JSX.Element => {
  const price = currencyFormatter({
    value: product.price,
    currency: product.currency_id,
  });

  return (
    <article className="product">
      <div className="product_thumbnail">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </div>
      <div className="product_data">
        <p className="product_data_price">{price}</p>
        <h1 className="product_data_title">{product.title}</h1>
      </div>
      <div className="product_city_name">
        <p>city name</p>
      </div>
    </article>
  );
};

export default ProductItem;
