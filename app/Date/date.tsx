import styles from '../Date/date.module.css';
import Image from "next/image";
import { formatDate } from '../_libs/utils';

const clockIcon = '/clock.svg';

type Props = {
    publishdate: string;
};

export default function Date({ publishdate}: Props) {
    return (
        <span className={styles.date}>
            <Image src={clockIcon} alt=""
                width={16} height={16} priority />
            {formatDate(publishdate)}
        </span>
    );
}