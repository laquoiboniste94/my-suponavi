type Props = {
   country: string;
};

export default function LeagueName({ country }: Props) {
    const league = {
        "イングランド": "プレミアリーグ",
        "スペイン": "リーガ・エスパニョーラ", 
        "イタリア": "セリエA",
        "ドイツ": "ブンデスリーガ",
        "フランス": "リーグ・アン",
    }[country] || `${country}リーグ`;
    
    return <span>{league}</span>;
}