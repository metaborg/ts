module test7

type rules

  Foo(x) has mult m
  where "*" => m
  
  Bar(e, t) has mult i
  where e : i
  
  