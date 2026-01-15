import type { Country } from '../../_libs/microcms';
import styles from '../Country/country.module.css';

type CountryData = {
  id: string;
  name: string;
};

type Props = {
    country: CountryData;  // ← 修正！
};

export default function CountryTag({ country }: Props ) {
    return <span className={styles.tag}>{country.name}</span>;
}