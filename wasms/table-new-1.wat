(module
  (type (;0;) (func (result i32)))
  (type (;1;) (func (param i32 i32) (result i32)))
  (func (;0;) (type 0) (result i32)
    i32.const 13)
  (func (;1;) (type 0) (result i32)
    i32.const 42)
  (func (;2;) (type 1) (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add)
  (table (;0;) 2 2 funcref)
  (export "tbl" (table 0))
  (export "add" (func 2))
  (export "a" (func 1))
  (elem (;0;) (i32.const 0) func 0 1))
