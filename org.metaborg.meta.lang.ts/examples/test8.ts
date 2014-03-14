module test8

type rules 

  A(e1, e2) : t1
    where e1 : t1 
    and e2 : t2 
    and t1 == t2 
        //else error "asd" on e2

  Foo(x, y, z) : t
    where x == A() and y == AA() and B() => t
       or x == C() and D() => t
       
  Baz(x, y) :-
    where x : IntType() 
       or y : FloatType()
       
  Bar(x, y) : t
    where definition of x : t
      and definition of y : t_y
      and x == Foo() 
          else error "" on x    
                  
   Foo(x, y, z) : t
     where [
       f1 := x == A();
       f2 := y == AA() provided f1;
       f3 := B() => t1;
       f4 := x == C();
       f5 := D() => t2 provided f4;
       f6 := t1 or t2 => t;
     ]
       
       