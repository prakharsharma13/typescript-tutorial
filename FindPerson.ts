interface Person {
    name: string;
    age: number;
    email: string;
  }
  
  function printPeopleInfo(people: Person[]): void {
    console.log('People Information:');
    people.forEach((person) => {
      console.log(`Name: ${person.name}, Age: ${person.age}, Email: ${person.email}`);
    });
  }
  
  // Example usage
  const people: Person[] = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Charlie', age: 22, email: 'charlie@example.com' }
  ];
  
  printPeopleInfo(people);
  