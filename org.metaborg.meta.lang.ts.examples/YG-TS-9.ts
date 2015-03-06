module YG-TS-9

type rules

SomeTerm(x):-
  where x : t
  else error $[some message $[x]] on x 
  
  