(module
  (type (;0;) (func (result i32)))
  (func (;0;) (type 0) (result i32)
    i32.const 13)
  (func (;1;) (type 0) (result i32)
    i32.const 42)
  (table (;0;) 2 2 funcref)
  (export "tbl" (table 0))
  (elem (;0;) (i32.const 0) func 0 1)
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
