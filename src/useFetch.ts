import { useEffect, useState } from 'react';
import data from './db.json';

interface UseFetchState {
	data: null | any;
	isLoading: boolean;
	error: null | string;
}

export const useFetch = (url: string): UseFetchState => {
	const [state, setState] = useState<UseFetchState>({
		data: null,
		isLoading: true,
		error: null,
	});

	const getFetch = (): void => {
		setState({
			data,
			isLoading: false,
			error: '',
		});
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	return state;
};
