interface A { }
class B implements A { }
class X { 
  b: B;
} 
class Y extends X {    
  b: A;  
} 