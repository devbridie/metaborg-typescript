class Animal {
   name: string
   test(): number | string {
   }
}

class Cat extends Animal {
   name: string
   test(): number {
   }
}  

class Dog extends Animal {
	name: string
	test(): string {

	}
}

class Duck {
	name: string
	test(): number | string {
    }
}

const duckAnimal: Animal = new Duck() // structural typing: Duck matches animal

const animal: Animal = new Cat(); // Type widened

const x: number | string = animal.test() // test on animal
const catTest: number = new Cat().test()  // test on specific type Cat

interface OneField { num: number }
interface TwoField extends OneField { num2: number }

class X implements OneField, TwoField { // multiple implements
   num: number;
   num2: number;
}

const f2: TwoField = new X();
const f2: OneField = new X();

