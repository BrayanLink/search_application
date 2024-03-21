import {useEffect, useState} from 'react';
import API from '../services';
import {useParams} from 'react-router-dom';
import {Detail} from '../interfaces/detail';
import {currencyFormatter} from '../helpers/formatPrice';

export const useProduct = () => {
  const params = useParams();
  const id = params.id || '';

  const [productDetail, setProductDetail] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getProductDetail = async () => {
      setIsLoading(true);
      try {
        const [product, description] = await Promise.all([
          API.get(encodeURI(`https://api.mercadolibre.com/items/${id}`)),
          API.get(
            encodeURI(`https://api.mercadolibre.com/items/${id}/description`),
          ),
        ]);

        const {data: productData} = product;
        const {data: descriptionData} = description;

        const price = currencyFormatter({
          value: productData.price,
          currency: productData.currency_id,
        });

        const productDetail: Detail = {
          ...productData,
          ...descriptionData,
          price: price,
        };
        setProductDetail(productDetail);
        setIsLoading(false);
      } catch (error) {}
    };
    getProductDetail();
  }, [id]);

  return [productDetail, isLoading];
};
