cargo install wasm-pack   
cargo new --lib hello-wasm   
wasm-pack build --release --target web 


http-server -S ./