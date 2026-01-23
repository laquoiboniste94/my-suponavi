"use client";

import Image from "next/image";
import styles from '../SearchField/searchfield.module.css';
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const searchIcon = '/static/search.svg';

// Flexbox版のHTML
function SearchFieldComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem("q");
        if(q instanceof HTMLInputElement){
            const params = new URLSearchParams();
            params.set("q", q.value.trim());
            router.push(`/news/search?${params.toString()}`);
        }
    };
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.search}>
                <div className={styles.searchIcon}>
                    <Image 
                        src={searchIcon} 
                        alt="検索"
                        width={16} 
                        height={16}
                    />
                </div>
                <input 
                    type="text"
                    name="q"
                    defaultValue={searchParams.get("q") ?? undefined}
                    placeholder="キーワードを入力"
                    className={styles.searchInput}
                />
            </div>
        </form>
    );
}

export default function SearchField(){
    return (
        <Suspense>
            <SearchFieldComponent />
        </Suspense>
    );
}