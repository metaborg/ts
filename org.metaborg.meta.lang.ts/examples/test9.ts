module test9

type rules

  UnExp(o, e) : t_res 
  where o : (t_farg, t_res)
    and e : t_e 
    and t_e == t_farg else error "type mismatch" on e

