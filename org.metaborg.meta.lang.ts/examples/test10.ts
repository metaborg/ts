module test10

relations

 a-ty <narrows-ref: e-ty
 where e-ty <widens-ref: a-ty // Apply widening on references the-ty other way around.
   or a-ty <is: Object()
   or(a-ty <is: Interface() and e-ty <is: Class() and not(e-ty <is: Final()))
   or(a-ty <is: Class() and e-ty <is: Interface() and not(a-ty <is: Final()) and not(a-ty <implements: e-ty))
   
   
 a-ty <narrows-ref: e-ty
 where e-ty <is: Final())
 
 
 a-ty <narrows-ref: e-ty
 where  not(e-ty <is: Final())

type rules

  A(x) : t
  where x : t
    and not(t == IntType())
    