module test8

type rules 

  Bar(x, y) : t
  where x : t1
     and y : t2
     and (t1 or t2) => t 

  Foo(x, y, z) : t
    where x == A() and B() => t and y == AA()
       or x == C() and D() => t
   
 
   // Foo(x, y, z) : t
   //   where [
   //     f1 := x == A();
   //     f2 := y == AA() provided f1;
   //     f3 := B() => t1;
   //     f4 := x == C();
   //     f5 := D() => t2 provided f4;
   //     f6 := t1 or t2 => t;
   //   ]
           
//   A(e1, e2) : t1
//     where e1 : t1 
//     and e2 : t2 
//     and t1 == t2 else error "asd" on e2
// 
// 
//        
//   Baz(x, y) :-
//     where x : IntType() 
//        or y : FloatType()
//        
//   Bar(x, y) : t
//     where definition of x : t
//       and definition of y : t_y
//       and x == Foo() 
//           else error "" on x    
                  

       
       