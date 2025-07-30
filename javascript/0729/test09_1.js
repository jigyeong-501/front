//test09_1.js

'use strict';

function regExCheck() {
    const regEx1 = /atom/g; // 'atom'이라는 문자열이 포함되어있는가
    const regEx2 = /mbc|kbs|sbs/g; // mbc또는 kbs또는 sbs
    const regEx3 = /홍길(동|순)/g // 이름이 홍길동 홍길순을 포함
    const regEx4 = /[a-z]/g; // 영문 소문자 포함
    const regEx5 = /[A-Z]/g; // 영문 대문자 포함
    const regEx6 = /[가-힣]/g; // 한글 포함
    const regEx7 = /[^a-z]/g; // 영문 소문자만 포함
    const regEx8 = /[^a-zA-Z0-9]/g; // 영문 대소문자 숫자만 포함
    const regEx9 = /[^0-9가-힣]/g; // 영문 대소문자 숫자만 포함
    const regEx10 = /[^a-zA-Z0-9_-]/g; // 영문 대소문자 숫자 언더바 하이픈만 포함
    const regEx21 = /\./g; // '.' 포함
    const regEx22 = /\d/g; // 숫자를 포함
    const regEx23 = /\D/g; // 숫자 아닌 다른값을 포함
    const regEx24 = /\W/g; // 영문자, 숫자, _ 값을 포함
    const regEx25 = /\s/g; // 영문자, 숫자, _ 값을 포함

    let content = document.getElementById("content").value.trim();

    if(content == "") {
        alert("문자열을 입력하세요");
        document.getElementById("content").focus();
        return false;
    }

    // 정규식 체크하기
    // if(!content.match(regEx1)) alert("본문에 atom문자열을 포함하고 있지 않습니다");
    // if(!content.match(regEx2)) alert("본문에 mbc, kbs, sbs문자열을 포함하고 있지 않습니다");
    // if(!content.match(regEx3)) alert("본문에 홍길동 홍길순문자열을 포함하고 있지 않습니다");
    // if(!content.match(regEx4)) alert("본문에 영문 소문자를 포함하고 있지 않습니다");
    // if(!content.match(regEx5)) alert("본문에 영문 대문자를 포함하고 있지 않습니다");
    // if(!content.match(regEx6)) alert("본문에 한글을 포함하고 있지 않습니다");
    // if(content.match(regEx7)) alert("본문에 영문 소문자가 아닌문자가 포함하고 있습니다");
    // if((regEx8).test(content)) alert("본문에 영문 대소문자, 숫자가 아닌문자가 포함하고 있습니다");
    // if((regEx9).test(content)) alert("본문에 한글,숫자가 아닌문자가 포함하고 있습니다");
    // if((regEx10).test(content)) alert("본문에 영문 대소문자, 숫자, _, -가 아닌문자가 포함하고 있습니다");
    // if((regEx21).test(content)) alert("본문에 '.'' 아닌문자가 포함하고 있습니다");
    // if(!(regEx22).test(content)) alert("본문에 숫자가 아닌문자가 포함하고 있습니다");
    // if((regEx23).test(content)) alert("본문에 숫자가 아닌 다른값을 포함하고 있습니다");
    // if((regEx24).test(content)) alert("본문에 영문자,숫자,_가 아닌 다른값을 포함하고 있습니다");
    if((regEx25).test(content)) alert("본문에 공백이 있습니다");
    
    else {
        let str = '정상적으로 입력되었습니다';
        alert(str);
        demo.innerHTML = str + "(" + content + ")";
    }
}