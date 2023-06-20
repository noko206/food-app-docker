export type shopDetailsType = {
	name: string;
	address: string;
	tags: Array<string>;
};

export const Shops = (): Array<shopDetailsType> => {
	return [
		{
			name: 'テスト店舗1',
			address: 'テスト住所1',
			tags: ['ラーメン', '中華'],
		},
	];
};

export default Shops;
