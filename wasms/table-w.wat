(module
  (type (;0;) (func (param i32 i32)))
  (type (;1;) (func (param i32 i32 i32 i32)))
  (type (;2;) (func (param i32 i32 i32)))
  (type (;3;) (func (param i32 i32 i32 i32 i32)))
  (type (;4;) (func (result i32)))
  (type (;5;) (func (param i32 i32) (result i32)))
  (import "__wasabi_hooks" "begin_function" (func (;0;) (type 0)))
  (import "__wasabi_hooks" "local_get_i" (func (;1;) (type 1)))
  (import "__wasabi_hooks" "i32_const" (func (;2;) (type 2)))
  (import "__wasabi_hooks" "return_i" (func (;3;) (type 2)))
  (import "__wasabi_hooks" "i32_add" (func (;4;) (type 3)))
  (import "__wasabi_hooks" "end_function" (func (;5;) (type 0)))
  (func (;6;) (type 4) (result i32)
    (local i32)
    i32.const 0
    i32.const -1
    call 0
    i32.const 13
    i32.const 0
    i32.const 0
    i32.const 13
    call 2
    local.tee 0
    i32.const 0
    i32.const -1
    local.get 0
    call 3
    i32.const 0
    i32.const 1
    call 5)
  (func (;7;) (type 4) (result i32)
    (local i32)
    i32.const 1
    i32.const -1
    call 0
    i32.const 42
    i32.const 1
    i32.const 0
    i32.const 42
    call 2
    local.tee 0
    i32.const 1
    i32.const -1
    local.get 0
    call 3
    i32.const 1
    i32.const 1
    call 5)
  (func (;8;) (type 5) (param i32 i32) (result i32)
    (local i32 i32 i32 i32)
    i32.const 2
    i32.const -1
    call 0
    local.get 0
    i32.const 2
    i32.const 0
    i32.const 0
    local.get 0
    call 1
    local.get 1
    i32.const 2
    i32.const 1
    i32.const 1
    local.get 1
    call 1
    local.set 3
    local.tee 2
    local.get 3
    i32.add
    local.tee 4
    i32.const 2
    i32.const 2
    local.get 2
    local.get 3
    local.get 4
    call 4
    local.tee 5
    i32.const 2
    i32.const -1
    local.get 5
    call 3
    i32.const 2
    i32.const 3
    call 5)
  (table (;0;) 2 2 funcref)
  (global (;0;) (mut i32) (i32.const 1))
  (export "add" (func 8))
  (export "tbl" (table 0))
  (elem (;0;) (i32.const 0) func 6 7))
