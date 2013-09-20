type rules

  predicate Type <: Type is transitive and reflexive

  // implied
  // t1 <: t2
  // where t1 <: t3 and t3 <: t2
    
  // [] <: []
    
  [t | t*] <: [t' | t'*]
  where t <: t' 
    and t* <: t'*

  ClassType(c1) <: ClassType(c2)
  where c1 has parent c2
  
  e : t1
  where e : t2
    and t2 <: t1 else "type mismatch"

type rules

  True() : Bool()
  
  False() : Bool()
  
  IntValue(_) : Int()
  
  NewObject(c) : ClassType(c)

  UnExp(o, e) : tres
  where o : (t1, tres)
    and e : t1
    
  BinExp(o, e1, e2) : ty
  where o : (t1, t2, ty) else "Operator not defined"
    and e1 : t1 
    and e2 : t2 
  
  VarRef(x) : ty
  where definition of Variable x has type ty
  
  This() : ty
  where definition of This() has type ty
  
  Call(e, m, e*) : t
  where definition of m has type (t*, t)
    and e* : t*
      
  // different arity
  // type mismatch
    
  Not()       : (Bool(), Bool())
  Lt()        : (Int(), Int(), Bool())
  And()       : (Bool(), Bool(), Bool())

  Length()    : (IntArray(), Int())
  NewArray()  : (Int(), IntArray())
  
  Plus()      : (Int(), Int(), Int())
  Minus()     : (Int(), Int(), Int())
  Times()     : (Int(), Int(), Int())
  Subscript() : (IntArray(), Int(), Int())