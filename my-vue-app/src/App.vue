<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from "vue";
import { EnvImage, CameraType, MetaData, StageType } from "./event.ts";
import pako from "pako";

console.log("%c Line:5 🍯 ALL", "color:#ed9ec7", {
  EnvImage,
  CameraType,
  MetaData,
  StageType,
});

onMounted(() => {
  let num = 0;
  const shouldFaceUser = true;
  var constraints = {
    audio: false,
    video: {
      width: 640,
      height: 640,
      facingMode: shouldFaceUser ? "user" : "environment",
    },
  };
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const ctx = canvas!.getContext("2d");
  const generateBase64Trans = (base64Str: string) => {
    const [base64head, base64Body] = base64Str.split(",");
    const strArr = base64head.match(/:(.*?);/);
    const mime = strArr ? strArr[1] : "";
    const str = window.atob(base64Body);
    let n = str.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = str.charCodeAt(n);
    }
    return { u8arr, mime: "image/jpeg" };
  };

  const base64ToBlob = (base64Str: string) => {
    const { u8arr, mime } = generateBase64Trans(base64Str);
    return new Blob([u8arr], { type: "image/jpeg" });
  };

  function drawImage() {
    video!.requestVideoFrameCallback(() => {
      num++;
      canvas!.width = video!.videoWidth;
      canvas!.height = video!.videoHeight;
      ctx!.drawImage(video!, 0, 0, canvas!.width, canvas!.height);
      // var id = ctx.getImageData(0, 0, canvas.width, canvas.height);
      // var pixelData = id.data;

      // 将canvas转换为base64字符串
      var base64Image = canvas.toDataURL("image/jpeg", 0.4);
      const { u8arr, mime } = generateBase64Trans(base64Image);

      const envImg = EnvImage.fromPartial({
        file: u8arr,
        type: CameraType.Front,
        stage: StageType.End,
        // meta
      });
      console.log("%c Line:32 🍉 envImg", "color:#e41a6a", {
        envImg,
        encodeinfo: EnvImage.encode(envImg).finish(),
        blob: new Blob([u8arr], { type: mime }),
        aa: window.btoa(
          String.fromCharCode(...EnvImage.encode(envImg).finish())
        ),
      });
      var imageUrl = URL.createObjectURL(new Blob([u8arr], { type: mime }));

      // 创建一个新的 img 元素并设置其 src 属性
      var imgElement = document.createElement("img");
      imgElement.src = imageUrl;

      // 将 img 元素添加到页面中
      document.body.appendChild(imgElement);
      if (num < 10) {
        drawImage();
      }
    });
  }
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
      console.log("%c Line:20 🥃 mediaStream", "color:#ed9ec7", mediaStream);
      // var video = document.querySelector("video");
      // stream = mediaStream;
      video!.srcObject = mediaStream;
      video!.onloadedmetadata = function (e) {
        console.log("%c Line:24 🍉 e", "color:#3f7cff", e);
        video!.play();
      };
      video!.addEventListener(
        "canplay",
        function (e) {
          drawImage();
        },
        false
      );
    })
    .catch(function (err) {
      console.log(err.message);
    });
});
</script>

<template>
  <div>Livenss Detection</div>
  <div id="config" style="height: 48px"></div>
  <div id="liveness-stage" style="height: 48px"></div>
  <div id="error-code" style="height: 48px"></div>
  <div>
    <button disabled id="switch-camera-btn" style="height: 48px">
      Switch Camera
    </button>
    <button disabled id="init-btn" style="height: 48px">Init</button>
    <button disabled id="reset-btn" style="height: 48px">reset</button>
  </div>
  <div id="hint" style="height: 48px"></div>
  <!-- <button disabled id="init-btn" style="height:48px">Init</button> -->
  <div>
    <canvas id="canvas" width="640" height="640"></canvas>
  </div>
  <video id="video" playsinline autoplay></video>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
video,
canvas {
  width: 500px;
}
</style>
