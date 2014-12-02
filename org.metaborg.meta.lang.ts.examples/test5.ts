module test5

imports Foo

type rules

  Foo() :- 
  where true 
   
  Bar(x) :- 
  where x : Bool()
  
  Baz(x, t) : t
  //where true
  
  