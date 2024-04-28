// The entry file of your WebAssembly module.

console.time('test');
// console.log("%c Line:55 🍎 console", "color:#4fff4B", new Date().getTime());
let constraints: MediaStreamConstraints =  {
    audio: false,
    video: {
        facingMode: 'environment',
    },
};
navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

function handleError(error: any): void {
    console.log('getUserMedia error: ' + error.name, error);
}
let firstCamera: any = null
let remainCameras: MediaDeviceInfo[] = []
let remainIndex = 0
async function handleSuccess(stream: MediaStream) {
    // console.log("%c Line:28 🍢 currentDevice", "color:#33a5ff", currentDevice);
    // console.log("%c Line:26 🍔 stream", "color:#42b983", stream);
    // var videoTracks = stream.getVideoTracks();
    // console.log("%c Line:28 🧀 Using video device1: ", "color:red", videoTracks[0].label);
    // document.getElementById('video1').srcObject = stream;

    const videoTrack = stream.getVideoTracks()[0];
    if (!firstCamera) {
        if (videoTrack.kind === 'video') {
            firstCamera = videoTrack.getSettings()
        }
        remainCameras= (await getVideoInputDevice(firstCamera.deviceId)).cameras;
        console.log("%c Line:40 🍓 remainCameras", "color:#ffdd4d", remainCameras.length);
    }
    if (remainIndex < remainCameras.length) {
        const deviceId = remainCameras[remainIndex++].deviceId
        console.log("%c Line:62 🍿 deviceId", "color:#4fff4B", deviceId);
        var constraints2 = constraints = {
            audio: false,
            video: {
                deviceId,
            },
        };
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
        .then(function(imageBitmap: any) {
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
        .catch(function(error: any) {
            console.error('1捕获帧图像失败：', error);
        });
    }
}

async function getVideoInputDevice(id: string) {
  if (!navigator.mediaDevices?.enumerateDevices) return { cameras: [], camerasCapabilities: [] }
  try {
      const devices = (await navigator.mediaDevices.enumerateDevices()) as InputDeviceInfo[]
      console.log("%c Line:67 🍫 devices", "color:#ea7e5c", devices);
      const cameras = devices.filter(v => v.kind === 'videoinput' && v.deviceId !== id)
      console.log("%c Line:95 🍯 cameras", "color:#4fff4B", cameras);
      // print camera information
      const camerasCapabilities = cameras.map((device: InputDeviceInfo) => {
          console.log("%c Line:71 🍪 getCapabilities", "color:#93c0a4", device.getCapabilities);
          const capabilities = device.getCapabilities?.()
          if (capabilities) {
              console.log("%c Line:72 🍡 capabilities", "color:#93c0a4", '-------------------------------');
              console.log(`device label:${device.label}`)
              console.log(`device id:${device.deviceId}`)
              console.log(`kind is:${device.kind}`)
              console.log('capabilities' + JSON.stringify(capabilities))
          }
          return capabilities
      })
      return { cameras, camerasCapabilities }
  } catch (error) {
      console.error('getVideoInputDevice', error)
      return { cameras: [], camerasCapabilities: [] }
  }
}
