// use wasm_bindgen::prelude::*;
// use wasm_bindgen::JsCast;
// use wasm_bindgen_futures::JsFuture;
// use futures::executor::spawn_local;
// use web_sys::{console,MediaDevices,MediaStreamConstraints};
// use web_sys::{HtmlElement};
// use web_sys::{HtmlElement, MediaDevices, MediaStreamConstraints};

// #[wasm_bindgen(start)]
// async fn start() {
//     // spawn_local(async {});
//     // 获取浏览器的 navigator 对象
//     let navigator = web_sys::window().expect("无法获取 window 对象").navigator();
//     // console::log_1(&navigator.dyn_into::<JsValue>().unwrap());
//         // .and_then(|window| window.navigator())
//         // .expect("无法获取 navigator 对象");

//     let media_devices: MediaDevices = navigator.media_devices().expect("REASON");
//     console::log_1(&media_devices);
//     // 设置摄像头调用约束
//     let mut constraints = MediaStreamConstraints::new();
//     constraints.video(&JsValue::from(true));
//     constraints.audio(&JsValue::from(false));
//     console::log_1(&constraints);
//     // // 检查浏览器是否支持媒体设备
//     // if media_devices.ondevicechange().is_none() {
//     //     web_sys::console::log_1(&"浏览器不支持媒体设备".into());
//     //     return;
//     // }

//     // 调用摄像头
//     let promise = media_devices.get_user_media_with_constraints(&constraints);
//     // let promise_js = JsFuture::from(promise).await.unwrap_throw();

//     // if let Ok(media_stream) = promise_js {
//     //     let stream: web_sys::MediaStream = media_stream.dyn_into().unwrap();
//     //     console::log_1(&JsValue::from_str("成功获取媒体流"));

//     //     // 在这里可以对媒体流进行操作，例如将其显示在视频元素中
//     //     // let video_element = web_sys::HtmlVideoElement::new_with_width_and_height(640, 480)?;
//     //     // video_element.set_src_object(Some(&stream));
//     //     // video_element.play();
//     // } else if let Err(error) = promise_js {
//     //     console::error_1(&error);
//     // }
//     // let closure = Closure::wrap(Box::new(move |stream_result: Result<web_sys::MediaStream, JsValue>| {
//     //     // if let Ok(stream) = stream_result {
//     //     //     // 成功获取摄像头流
//     //     //     let video_element = create_video_element();
//     //     //     video_element.set_src_object(Some(&stream));
//     //     //     web_sys::console::log_1(&"成功获取摄像头流".into());
//     //     // } else if let Err(error) = stream_result {
//     //     //     // 获取摄像头流失败
//     //     //     web_sys::console::error_1(&error);
//     //     // }
//     // }) as Box<dyn FnMut(Result<web_sys::MediaStream, JsValue>)>);
//     // promise.expect("REASON").then(|result| {
//     //     // 处理成功获取媒体设备的逻辑
//     //     // 在此处使用 result
//     // }).catch(|error| {
//     //     // 处理获取媒体设备失败的逻辑
//     //     // 在此处处理错误
//     // });
//     // web_sys::window()
//     //     .and_then(|window| window.promises())
//     //     .expect("无法获取 promises 对象")
//     //     .then_with_opt_callback_and_error_callback(
//     //         &promise,
//     //         Some(closure.as_ref().unchecked_ref()),
//     //         Some(closure.as_ref().unchecked_ref()),
//     //     )
//     //     .expect("无法调用 then_with_opt_callback_and_error_callback");
//     // closure.forget();
//     // let closure = Closure::once_into_js(move |media_stream: Result<web_sys::MediaStream, JsValue>| {
//     //     if let Ok(stream) = media_stream {
//     //         console::log_1(&JsValue::from_str("Successfully got media stream"));

//     //         // 在这里可以对媒体流进行操作，例如将其显示在视频元素中
//     //         // let video_element = web_sys::HtmlVideoElement::new_with_width_and_height(640, 480)?;
//     //         // video_element.set_src_object(Some(&stream));
//     //         // video_element.play();
//     //     } else if let Err(error) = media_stream {
//     //         console::error_1(&error);
//     //     }
//     // });
//     // js_sys::Promise::from(promise);
//     // .then(&closure);
// }

// fn create_video_element() -> HtmlElement {
//     let document = web_sys::window().expect("无法获取 window 对象").document().expect("无法获取 document 对象");
//     let video_element = document.create_element("video").expect("无法创建 video 元素");
//     video_element
//         .dyn_into::<HtmlElement>()
//         .map_err(|_| ())
//         .expect("无法将元素转换为 HtmlElement")
// }
// #[wasm_bindgen]
// fn quickjsTest() {
//     // use quickjs_sys as q;
//     // let mut ctx = q::Context::new();
    
//     // let file_path = args_parse();
//     // let code = std::fs::read_to_string(&file_path);
//     // match code {
//     //     Ok(code) => {
//     //         ctx.eval_str(code.as_str(), &file_path);
//     //     }
//     //     Err(e) => {
//     //         eprintln!("{}", e.to_string());
//     //     }
//     // }
// }
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
use wasmedge_quickjs::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {

    // console::log_1(&format!("Hello, {}!", name).into());
    // use rquickjs_sys as q;
    // let mut ctx = q::Context::new();
    // let code = include_str!("./main.js");
    let mut ctx = Context::new();
    run_js_code(&mut ctx);
}
fn run_js_code(ctx: &mut Context) {
    println!("\n<----run_js_code---->");
    let code = r#"
    let a = 1+1;
    print('js print: 1+1=',a);
    'hello'; // eval_return
    "#;
    let r = ctx.eval_global_str(code);
    println!("return value:{:?}", r);
}