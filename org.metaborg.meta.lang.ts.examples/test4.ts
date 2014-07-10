module test4

type rules

  Call(e, m, e*) : t
  where definition of m : (t*, t) 
    and e* : t_e*
    and t_e* == t* else error "argument type mismatch" on e*