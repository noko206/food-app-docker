import { useEffect } from 'react';
import useShopData from '../hooks/useShopDetails';

const ShopDetails = () => {
	const { getShopDetails, shopDetails } = useShopData();
	useEffect(() => getShopDetails(0), []);

	return (
		<>
			<h1>これは店舗詳細ページです！</h1>
			<p>{shopDetails?.name}</p>
			<p>{shopDetails?.address}</p>
			<ul>
				{shopDetails?.tags.map((tag: string) => {
					return <li>{tag}</li>;
				})}
			</ul>
		</>
	);
};

export default ShopDetails;
