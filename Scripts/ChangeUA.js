/**
 * 修改UA提升网页版App应用的体验
 * Credit：zZPiglet
 */

let { url, headers } = $request;
if (url.indexOf('baidu.com') !== -1) {
    // 百度（替换为手机百度 Quark 的 User-Agent）
    headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)';
}

$done({headers});