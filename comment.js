// comment.js

// Disqus 댓글 시스템 로드
function loadDisqus(shortname) {
    var d = document, s = d.createElement('script');
    s.src = `https://${shortname}.disqus.com/embed.js`;
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
}

// Tawk.to 채팅 시스템 로드
function loadTawkTo(propertyId) {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"), 
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = `https://embed.tawk.to/${propertyId}`;
        s1.charset = "UTF-8";
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
}

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", function() {
    loadDisqus("goraeuniverse");  // Disqus shortname 설정
    loadTawkTo("6784b4d4af5bfec1dbeaa7e6/1ihf64ns0");  // Tawk.to ID 설정
});
