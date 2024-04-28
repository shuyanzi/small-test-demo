
// import init from './test-wasm/pkg/test_wasm.js';

// function run(res) {
//     console.log("%c Line:14 🍧 res", "color:#465975", res);
//     // res.greet("WebAssembly");
//     // res.start();

// }

// init().then(run)

console.time('test');
console.log("%c Line:55 🍎 console", "color:#4fff4B", new Date().getTime());
var constraints = window.constraints = {
    audio: false,
    video: true,
    video: {
        width: { exact: 1380 },
        heigth: { exact: 1280 },
        facingMode: 'environment',
    },
};
navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);


function handleError(error) {
    console.log('getUserMedia error: ' + error.name, error);
}
window.firstCamera = null
window.remainCameras = []
window.remainIndex = 0
var ww = 40
var hh = 10
async function handleSuccess(stream) {
    
    // console.log("%c Line:28 🍢 currentDevice", "color:#33a5ff", currentDevice);
    // console.log("%c Line:26 🍔 stream", "color:#42b983", stream);
    // var videoTracks = stream.getVideoTracks();
    // console.log("%c Line:28 🧀 Using video device1: ", "color:red", videoTracks[0].label);
    // document.getElementById('video1').srcObject = stream;

    const videoTrack = stream.getVideoTracks()[0];
    if (!window.firstCamera) {
        if (videoTrack.kind === 'video') {
            window.firstCamera = videoTrack.getSettings()
        }
        window.remainCameras= (await getVideoInputDevice(window.firstCamera.deviceId)).cameras;
        console.log("%c Line:40 🍓 remainCameras", "color:#ffdd4d", remainCameras);
    }
    if (window.remainIndex < window.remainCameras.length) {
        const deviceId = window.remainCameras[window.remainIndex++].deviceId
        ww =  ww * (window.remainIndex + 1)
        hh =  hh * (window.remainIndex + 1)
        var constraints2 = window.constraints = {
            audio: false,
            video: {
                width: ww,
                heigth: hh,
                deviceId,
            },
        };
        console.log("%c Line:62 🍿 constraints2", "color:#4fff4B", constraints2, deviceId);
        navigator.mediaDevices.getUserMedia(constraints2).then(handleSuccess).catch(handleError);
    } else {
        // console.timeEnd('test');
        console.log("%c Line:55 🍎 console", "color:#4fff4B", new Date().getTime());
    }
    const imageCapture = new ImageCapture(videoTrack);
    console.log("%c Line:1 🍊 imageCapture", "color:#ffdd4d", videoTrack,imageCapture);
    captureFrame();
    function captureFrame() {
        imageCapture.grabFrame()
        .then(function(imageBitmap) {
            console.log("%c Line:1 🍊 imageBitmap", "color:#ffdd4d", imageBitmap);
            // 将图像位图转换为canvas元素
            const canvas = document.createElement('canvas');
            canvas.width = imageBitmap.width;
            canvas.height = imageBitmap.height;
            const context = canvas.getContext('2d');
            context.drawImage(imageBitmap, 0, 0);
            document.body.appendChild(canvas);
            // 保存帧图像
            // saveFrame(canvas);
            // 处理下一帧
            // requestAnimationFrame(captureFrame);
        })
        .catch(function(error) {
            console.error('1捕获帧图像失败：', error);
        });
    }
}

async function getVideoInputDevice(id) {
    console.log("%c Line:96 🍯 id", "color:#33a5ff", id);
    if (!navigator.mediaDevices.enumerateDevices) return []
    try {
        const devices = await navigator.mediaDevices.enumerateDevices()
        console.log("%c Line:67 🍫 devices", "color:#ea7e5c", devices);
        const cameras = devices.filter(v => v.kind === 'videoinput' && v.deviceId !== id)
        const obscamera = devices.filter(v => v.kind === 'videoinput' && v.label.includes('OBS'))
        console.log("%c Line:95 🍯 cameras", "color:#4fff4B", cameras, obscamera);
        // print camera information
        const camerasCapabilities = devices.map(device => {
            console.log("%c Line:71 🍪 getCapabilities", "color:#93c0a4", device.getCapabilities);
            const capabilities = device.getCapabilities && device.getCapabilities()
            if (capabilities) {
                console.log("%c Line:72 🍡 capabilities", "color:#93c0a4", '-------------------------------');
                console.log(`device label:${device.label}`)
                console.log(`device id:${device.deviceId}`)
                console.log(`kind is:${device.kind}`)
                console.log('capabilities' + JSON.stringify(capabilities))
            }
            return capabilities
        })
        return { cameras: [...cameras, ...obscamera, ...obscamera, ...obscamera], camerasCapabilities }
    } catch (error) {
        console.error('getVideoInputDevice', error)
        return {}
    }
}
