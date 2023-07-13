import dns from 'dns/promises';

const ip = await dns.lookup('softmill.co.kr'); // IP 정보
console.log('IP', ip);

const a = await dns.resolve('softmill.co.kr', 'A'); // A 레코드
console.log('A', a);

const mx = await dns.resolve('softmill.co.kr', 'MX'); // 메일 서버
console.log('MX', mx);

// const cname = await dns.resolve('softmill.co.kr', 'CNAME'); // 별칭
// console.log('CNAME', cname);

const any = await dns.resolve('softmill.co.kr', 'ANY'); // 그 외
console.log('ANY', any);