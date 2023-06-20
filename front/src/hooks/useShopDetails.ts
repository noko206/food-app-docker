import { useCallback, useState } from 'react';
import { shopDetailsType, Shops } from '../db/Shops';

const useShopDetails = () => {
	const [shopDetails, setShopDetails] = useState<shopDetailsType>();
	const getShopDetails = useCallback((id: number) => {
		const shopsData = Shops();
		setShopDetails(shopsData[id]);
	}, []);
	return { getShopDetails, shopDetails };
};

export default useShopDetails;
