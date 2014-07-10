module test6

type rules

  Not(e) : Bool()  
  where e : Bool() else error "foo" on e
    //and t == Bool() 
    // desugared to rewrite, but could be type-match

  Not(e) : Bool()
  where e : t
    and Bool() == t else error "foo" on e
  
  Foo(e1, e2) : t1 
  where e1 : t1
    and e2 : t2
    //and t1 <: t2 // bug in order of create-subtype-task
    
  Parent(p) : t
  where definition of p : t 
     or ClassType(p) => t // t := <type-is(|ctx)> ClassType(p)
      
  // e@This(): ty
  // whre definition of e: ty
  
//    nabl-constraint(|ctx):
//     NewObject(c) -> <fail>
//     where
//       ty := <type-lookup(|ctx)> c 
//     ; m  := <type-match(|ctx, MainType())> ty
//     ; <task-create-error-on-success(|ctx, m, "cannot instantiate main class")> c
// 
//   nabl-constraint(|ctx):
//     Parent(c) -> <fail>
//     where
//       ty := <type-lookup(|ctx)> c 
//     ; m  := <type-match(|ctx, MainType())> ty
//     ; <task-create-error-on-success(|ctx, m, "cannot inherit from main class")> c
// 
//   nabl-constraint(|ctx):
//     ClassType(c) -> <fail>
//     where
//       ty := <type-lookup(|ctx)> c 
//     ; m  := <type-match(|ctx, MainType())> ty
//     ; <task-create-error-on-success(|ctx, m, "cannot instantiate main class")> c

      
  NewObject(c):-
  where definition of c: MainType()
   else error "cannot instantiate main class" on c
            
            
