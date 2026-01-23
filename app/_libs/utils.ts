import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
    return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm");
};

/*export const leagueToNation = (league: string) => {
    const country = {
        "プレミアリーグ":"イングランド",
        "リーガエスパニョーラ":"スペイン", 
        "セリエA":"イタリア",
        "ブンデスリーガ":"ドイツ",
        "リーグアン":"フランス"
    }[league];
    
    return country;
}*/
export const leagueToNation = (league: string): string => {
    console.log(`🔄 leagueToNation called: "${league}"`);
    
    const mapping: { [key: string]: string } = {
        "プレミアリーグ": "イングランド",
        "リーガエスパニョーラ": "スペイン", 
        "セリエA": "イタリア", 
        "セリエＡ": "イタリア",
        "ブンデスリーガ": "ドイツ",
        "リーグアン": "フランス"
    };
    
    const result = mapping[league];
    console.log(`🎯 Mapping result: "${result}"`);
    console.log(`🔍 Available keys: ${Object.keys(mapping).join(', ')}`);
    console.log(`✅ Key exists? ${league in mapping ? 'YES' : 'NO'}`);
    
    return result || league;
};
