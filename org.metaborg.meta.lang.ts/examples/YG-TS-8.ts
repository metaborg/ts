module YG-TS-8

/*
signature constructors
  Fptoui : A
  Fptosi : A
  Float : A
  Vector : A * A -> A
  TypeConversion : A * A * A -> A
*/

type rules

  TypeConversion(op, operand, typ) :-
  where (
        typ => Int(width)
        and (op => Fptoui() or op => Fptosi())
        and operand: operandt
        and operandt == Float()
        else error $[Expected float, got [operandt]] on operand
  ) or (
        typ => Vector(length, Int(x))
        and operand: operandt
        and operandt == Vector(length, Float())
       else error $[Expected vector of floats, got [operandt]] on operand
  ) else error $[[op] targets (vectors of) signed integer types, got [typ]] on typ
  
  
  TypeConversion(op, operand, typ) :-
  where 
        typ => Int(width)
        and (op => Fptoui() or op => Fptosi())
        and operand: operandt
        and operandt == Float()
        else error $[Expected float, got [operandt]] on operand
  