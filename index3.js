const constraints = {
    audio: false,
    video: {
      width: 1920,
      height: 1920,
      facingMode: 'environment',
    },
  };
  
  const firstCamera = {
    settings: null,
    remainCameras: [],
    remainIndex: 0,
  };
  
  navigator.mediaDevices.getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError);
  
  function handleError(error) {
    console.log('getUserMedia error: ' + error.name, error);
  }
  
  async function handleSuccess(stream) {
    const videoTrack = stream.getVideoTracks()[0];
  
    if (!firstCamera.settings) {
      if (videoTrack.kind === 'video') {
        firstCamera.settings = videoTrack.getSettings();
      }
      const { cameras } = await getVideoInputDevice(firstCamera.settings.deviceId);
      firstCamera.remainCameras = cameras;
      console.log('%c Line:40 🍓 remainCameras', 'color:#ffdd4d', firstCamera.remainCameras);
    }
  
    if (firstCamera.remainIndex < firstCamera.remainCameras.length) {
      console.log(firstCamera.remainIndex, '===');
      const deviceId = firstCamera.remainCameras[firstCamera.remainIndex++].deviceId;
      const constraints2 = {
        audio: false,
        video: {
          width: 640 * (firstCamera.remainIndex + 1),
          height: 480 * (firstCamera.remainIndex + 1),
          deviceId,
        },
      };
      console.log('%c Line:62 🍿 constraints2', 'color:#4fff4B', constraints2);
      navigator.mediaDevices.getUserMedia(constraints2)
        .then(handleSuccess)
        .catch(handleError);
    } else {
      console.log('%c Line:55 🍎 console', 'color:#4fff4B', new Date().getTime());
    }
  
    const imageCapture = new ImageCapture(videoTrack);
    console.log('%c Line:1 🍊 imageCapture', 'color:#ffdd4d', videoTrack, imageCapture);
    captureFrame(imageCapture);
  }
  
  function captureFrame(imageCapture) {
    imageCapture.grabFrame()
      .then(function (imageBitmap) {
        console.log('%c Line:1 🍊 imageBitmap', 'color:#ffdd4d', imageBitmap);
        const canvas = document.createElement('canvas');
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        const context = canvas.getContext('2d');
        context.drawImage(imageBitmap, 0, 0);
        document.body.appendChild(canvas);
      })
      .catch(function (error) {
        console.error('1捕获帧图像失败：', error);
      });
  }
  
  async function getVideoInputDevice(id) {
    if (!navigator.mediaDevices?.enumerateDevices) return [];
  
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cameras = devices.filter((v) => v.kind === 'videoinput' && v.deviceId !== id);
      const obscamera = devices.filter((v) => v.kind === 'videoinput' && v.label.includes('OBS'));
      const camerasCapabilities = devices.map((device) => {
        const capabilities = device.getCapabilities && device.getCapabilities();
        if (capabilities) {
          console.log(
            '%c Line:72 🍡 capabilities',
            'color:#93c0a4',
            '-------------------------------'
          );
          console.log(`device label:${device.label}`);
          console.log(`device id:${device.deviceId}`);
          console.log(`kind is:${device.kind}`);
          console.log('capabilities' + JSON.stringify(capabilities));
        }
        return capabilities;
      });
      return { cameras: [...cameras, ...obscamera], camerasCapabilities };
    } catch (error) {
      console.error('getVideoInputDevice', error);
      return {};
    }
  }