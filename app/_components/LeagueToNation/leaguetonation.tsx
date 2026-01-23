type Props = {
   league: string;
};

export default function LeagueToNation({ league }: Props) {
    const country = {
        "プレミアリーグ":"イングランド",
        "リーガエスパニョーラ":"スペイン", 
        "セリエA":"イタリア",
        "ブンデスリーガ":"ドイツ",
        "リーグアン":"フランス"
    }[league];
    
    return <span>{country}</span>;
}