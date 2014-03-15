// note: do not put in git

module test2 

type rules  

  // UnExp(o, e) : tres 
  // where o : t_o
  //   and t_o => (t_farg, tres) 
  //   and e : t_e 
  //   and t_e == t_farg else error "type mismatch" on e
  
  This() : t 
  where definition of This() : t

  UnExp(o, e) : t_res 
  where o : (t_farg, t_res)
    //and e : t_e 
    //and t_e == t_farg else error "type mismatch" on e
    
    
  BinExp(o, e1, e2) : ty
  where o : (t1, t2, ty) //else error "Operator not defined" on o
    and e1 : t_e1 
    and e2 : t_e2 
    and t_e1 == t1 else error "type mismatch" on e1
    and t_e2 == t2 else error "type mismatch" on e2

  Plus(e1, e2) : t1
  where e1 : t1 
    and e2 : t2 
    and t1 == t2 
        
  Plus(e1, e2) : t1 
  where e1 : t1  
    and e2 : t2 
    and (t1 == Int() or t1 == String()) //else error "type mismatch" on e1
    and t1 == t2 //else error "arguments should have same type" on e2
    
  Not(e) : t
  where e : t
    and t == Bool() 
  
  Parent(p) : t
  where definition of p : t
     or ClassType(p) => t // t := <type-is(|ctx)> ClassType(p)
    
  