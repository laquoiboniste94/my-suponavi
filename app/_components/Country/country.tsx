import type { Country } from '../../_libs/microcms';
import styles from '../Country/country.module.css';

type Props = {
    country: Country;
};

export default function Country({ country }: Props ) {
    return <span className={styles.tag}>{country.name}</span>;
}