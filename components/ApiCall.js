

export default async function ApiCall() {
    const url1="https://streams.rabbitholebd.com/live/Blessbit-Youtube_93/Biessbit-Youtube_93/index.m3u8&type=asm3u";
    const url2="https://streams.rabbitholebd.com/";
    const url3="http://15.1.1.34:8082/1LIVE/tracks-v1a1/mono.m3u8?token=95d08a46aa027f4face19bf4e23fc4ea31ef8376-91f799d7c09778aae32fe5eaf69267c7-1699455828-1699445028";
    
    // const url4=ctop('https://api.aynaott.xyz/api/eurotel.php?c=72')
    const url5="tv.location.href='play.php?stream=3LIVE'"
    const req= await fetch(url5);
    const res= req.json();
    return res;
}
