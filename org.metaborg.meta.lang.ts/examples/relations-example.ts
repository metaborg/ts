module examples/relations-example
	
relations

  a-ty <widens: e-ty
  where a-ty <widens-prim: e-ty
     or a-ty <widens-ref: e-ty

	a-ty <widens-ref: e-ty
	where a-ty == Null()
     or (a-ty <is: Interface() and e-ty <is: Object())
     or (a-ty <is: Array() and e-ty <is: Object())
     or (a-ty <is: Array() and e-ty <is: Cloneable())
     or (a-ty <is: Array() and e-ty <is: Serializable())
     or a-ty <widens-array: e-ty
 
	ArrayType(a-ty) <widens-array: ArrayType(e-ty)
	where a-ty <widens-ref: e-ty

  Byte()   <widens-prim: Short()
  Byte()   <widens-prim: Int()
  Byte()   <widens-prim: Long()
  Byte()   <widens-prim: Float()
  Byte()   <widens-prim: Double()
  
  Short()  <widens-prim: Int()
  Short()  <widens-prim: Long()
  Short()  <widens-prim: Float()
  Short()  <widens-prim: Double()
  
  Char()   <widens-prim: Int()
  Char()   <widens-prim: Long()
  Char()   <widens-prim: Float()
  Char()   <widens-prim: Double()
  
  Int()    <widens-prim: Long()
  Int()    <widens-prim: Float()
  Int()    <widens-prim: Double()
   
  Long()   <widens-prim: Float()
  Long()   <widens-prim: Double()
  
  Float()  <widens-prim: Double()

signatures // Primitives

	Byte   : Type
	Short  : Type
	Char   : Type
	Int    : Type
	Long   : Type
	Float  : Type
	Double : Type

	Integral  : TypeKind
	Decimal   : TypeKind
	Numerical : TypeKind
	Primitive : TypeKind

relations

  Byte()  <is: Integral()
  Short() <is: Integral()
  Int()   <is: Integral()
  Long()  <is: Integral()
     
	Float()  <is: Decimal()
	Double() <is: Decimal()
	   
	t <is: Numerical()
	where t <is: Integral()
	   or t <is: Decimal()
	   
	Byte()   <is: Primitive()
	Short()  <is: Primitive()
	Char()   <is: Primitive()
	Int()    <is: Primitive()
	Long()   <is: Primitive()
	Float()  <is: Primitive()
	Double() <is: Primitive()

signatures // References

	RefType   : TypeName * TypeParams -> Type
	ArrayType : Type -> Type
	Null      : Type

	Reference    : TypeKind
	Class        : TypeKind
	Interface    : TypeKind
	Array        : TypeKind
	
	Object       : TypeKind 
	Cloneable    : TypeKind
	Serializable : TypeKind
	String       : TypeKind

relations

	RefType(_, _) <is: Reference()
	ArrayType(_)  <is: Reference()
	Null()        <is: Reference()

	ArrayType(_)  <is: Array()
	
relations // Built in type kinds

	RefType("Object", _)       <is: Object()
	RefType("Cloneable", _)    <is: Cloneable()
	RefType("Serializable", _) <is: Serializable()
	RefType("String", _)       <is: String()
