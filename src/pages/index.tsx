import { useAtom } from 'jotai';
import { countryState } from 'store';

export default function Home() {
	const [country, setCoutry] = useAtom(countryState);
	return <div>{country}</div>;
}
