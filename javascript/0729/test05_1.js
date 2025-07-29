// test05_1.js

'use strict';

//           0         1         2         3         4         5     
//           1234567890123456789012345678901234567890123456789012
let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let test2 = '    ABC         BC  ABC       GHI   JKLABCMN...... A AC .. OPQ.. abc opq';

// length : 길이
// substring() : 특정문자열의 지정된 위치의 문자열을 추출한다.
// indexOf() : 문자열(문자) 검색(찾는값이 있으면 위치값 반환, 없으면 -1 반환)
// lastIndexOf : 뒤에서부터 문자열 검색.. 없으면 -1 반환
// includes() : 특정 문자열을 포함유무(true/false 반환)
// concat() : 문자열 결합
// slice() : 지정된 인덱스위치부터, 지정인덱스-1까지의 문자열을 가져온다.
// trim() : 문자열의 앞뒤 공백을 삭제한다.
// replace : 특정 문자(문자열)로 치환(첫번째 검색한 문자(문자열)만 치환한다)
// replaceAll() : 특정 문자(문자열)로 모두 검색하여 치환해준다.
// charAt() : 1개 문자열 추출

let str = '';

str += "length : " + text1.length + "<br>"
str += "substring(6) : " + text1.substring(6) + "<br>";
str += "substring(6, 10) : " + text1.substring(6, 10) + "<br>";
str += "indexOf('abc') : " + text1.indexOf('abc') + "<br>";
str += "indexOf('abc') : " + test2.indexOf('abc') + "<br>";
str += "lastIndexOf('abc') : " + test2.indexOf('abc') + "<br>";
str += "includes('abc') : " + test2.includes('abc') + "<br>";
str += "text1.concat(test2.trim()) : " + text1.concat(test2.trim()) + "<br>";
str += "text1.slice(5) : " + text1.slice(5) + "<br>";
str += "text1.slice(5, 10) : " + text1.slice(5, 10) + "<br>";
str += text1.replace("abc", 'opq') + "<br>";
str += text1.replace("BC", '12345') + "<br>";
str += text1.replaceAll("BC", '12345') + "<br>";
str += text1.charAt(5) + "<br>";

console.log(str);

demo.innerHTML = str;
// document.getElementById("demo").innerHTML = str;

let tel = '010-1234-5678';
let tels = tel.split('-');
console.log(tels[0]);
console.log(tels[1]);
console.log(tels[2]);
console.log('');

tels.forEach(data => console.log(data));

console.log(tels.join("/"));