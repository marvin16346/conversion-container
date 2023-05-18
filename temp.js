
// 사용 중인 매체 목록 리스트 순회
// 각 매체의 공통 스크립트를 head에 그대로 붙여넣기
document.head.appendChild(commonScript);

// 각 매체의 트래킹 id 리스트 관련
const trackingScript = document.createElement("script");
// 카카오 매체의 트래킹 id 리스트 순회, 이벤트 순회
// eventCode는?
trackingScript.src += `
    kakaoPixel(${trackingId})[${eventCode}]();
`

document.head.appendChild(trackingScript);


function $trigger(eventName) {

}

// 이벤트 순회
// 이벤트 등록
// if (window.location.href matches event.url_reg) {
event.func_code();
// }
