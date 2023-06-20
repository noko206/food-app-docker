import { useCallback, useState } from 'react';
import Shops from '../db/Shops';

const useShopList = () => {
	const [shopsList, setShopList] = useState([]);
	const getShopList = useCallback(() => {
		const shopList = Shops;
	}, []);
	return { getShopList };
};
