// The entry file of your WebAssembly module.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.time('test');
// console.log("%c Line:55 🍎 console", "color:#4fff4B", new Date().getTime());
var constraints = {
    audio: false,
    video: {
        facingMode: 'environment',
    },
};
navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
function handleError(error) {
    console.log('getUserMedia error: ' + error.name, error);
}
var firstCamera = null;
var remainCameras = [];
var remainIndex = 0;
function handleSuccess(stream) {
    return __awaiter(this, void 0, void 0, function () {
        function captureFrame() {
            imageCapture.grabFrame()
                .then(function (imageBitmap) {
                console.log("%c Line:1 🍊 imageBitmap", "color:#ffdd4d", imageBitmap);
                // 将图像位图转换为canvas元素
                var canvas = document.createElement('canvas');
                canvas.width = imageBitmap.width;
                canvas.height = imageBitmap.height;
                var context = canvas.getContext('2d');
                context.drawImage(imageBitmap, 0, 0);
                document.body.appendChild(canvas);
                // 保存帧图像
                // saveFrame(canvas);
                // 处理下一帧
                // requestAnimationFrame(captureFrame);
            })
                .catch(function (error) {
                console.error('1捕获帧图像失败：', error);
            });
        }
        var videoTrack, deviceId, constraints2, imageCapture;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    videoTrack = stream.getVideoTracks()[0];
                    if (!!firstCamera) return [3 /*break*/, 2];
                    if (videoTrack.kind === 'video') {
                        firstCamera = videoTrack.getSettings();
                    }
                    return [4 /*yield*/, getVideoInputDevice(firstCamera.deviceId)];
                case 1:
                    remainCameras = (_a.sent()).cameras;
                    console.log("%c Line:40 🍓 remainCameras", "color:#ffdd4d", remainCameras.length);
                    _a.label = 2;
                case 2:
                    if (remainIndex < remainCameras.length) {
                        deviceId = remainCameras[remainIndex++].deviceId;
                        console.log("%c Line:62 🍿 deviceId", "color:#4fff4B", deviceId);
                        constraints2 = constraints = {
                            audio: false,
                            video: {
                                deviceId: deviceId,
                            },
                        };
                        navigator.mediaDevices.getUserMedia(constraints2).then(handleSuccess).catch(handleError);
                    }
                    else {
                        // console.timeEnd('test');
                        console.log("%c Line:55 🍎 console", "color:#4fff4B", new Date().getTime());
                    }
                    imageCapture = new ImageCapture(videoTrack);
                    console.log("%c Line:1 🍊 imageCapture", "color:#ffdd4d", videoTrack, imageCapture);
                    captureFrame();
                    return [2 /*return*/];
            }
        });
    });
}
function getVideoInputDevice(id) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var devices, cameras, camerasCapabilities, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!((_a = navigator.mediaDevices) === null || _a === void 0 ? void 0 : _a.enumerateDevices))
                        return [2 /*return*/, { cameras: [], camerasCapabilities: [] }];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                case 2:
                    devices = (_b.sent());
                    console.log("%c Line:67 🍫 devices", "color:#ea7e5c", devices);
                    cameras = devices.filter(function (v) { return v.kind === 'videoinput' && v.deviceId !== id; });
                    console.log("%c Line:95 🍯 cameras", "color:#4fff4B", cameras);
                    camerasCapabilities = cameras.map(function (device) {
                        var _a;
                        console.log("%c Line:71 🍪 getCapabilities", "color:#93c0a4", device.getCapabilities);
                        var capabilities = (_a = device.getCapabilities) === null || _a === void 0 ? void 0 : _a.call(device);
                        if (capabilities) {
                            console.log("%c Line:72 🍡 capabilities", "color:#93c0a4", '-------------------------------');
                            console.log("device label:".concat(device.label));
                            console.log("device id:".concat(device.deviceId));
                            console.log("kind is:".concat(device.kind));
                            console.log('capabilities' + JSON.stringify(capabilities));
                        }
                        return capabilities;
                    });
                    return [2 /*return*/, { cameras: cameras, camerasCapabilities: camerasCapabilities }];
                case 3:
                    error_1 = _b.sent();
                    console.error('getVideoInputDevice', error_1);
                    return [2 /*return*/, { cameras: [], camerasCapabilities: [] }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
