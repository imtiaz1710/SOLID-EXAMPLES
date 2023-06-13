# **SOLID**

OOD (Object Oriented Design Principle) which is popular by Robert C. Martin.

## **Single Responsibility Principle (SRP):** 
---

>The Single Responsibility Principle (SRP) states that each software module should have one and only one reason to change.

>Gather together the things that change for the same reasons. Separate those things that change for different reasons.

```typescript
    class Product {
        public name: string;
        public description: string;
        public price: number;

        public purchase() {
            //implementation
        }

        public generatingInovoice() {
            //implementation
        }
    }
```

The principle states that there should be only one responsibility for each module. In the example of upper class it violates the SRP for introducing **purchase()** and **generatingInovoice()** method in a single class. They should not be together in a module because purchasing and generating Inovoice is two different things and has two different reasons for changing. According to the principle we have to create two differnt class for these two methods like the follwoing: 

```typescript
    class Product {
        public name: string;
        public description: string;
        public price: number;
    }
    
    class ProductPurchase {
        public purchase(product: Product) {
            //implementation
        }
    }
    
    class InovoiceGenerator{
        public generateInovoice(product: Product) {
            ///implementation
        }
    }
```

That is the example of class level module. If we write code for a task in a method that is not responsible for that, also violates the SRP. Here is an example of a method that violates the SRP: 

```typscript
createUser(){
    //code for creating a user
    //code for sending email to the user
}
```
creating user and sending email are two different tasks. There should be another mehtod for the seneding email who is only responsible for sending email. 

If we not maintain SRP in our code,  it can lead to a number of problems like: Code complexity, Code duplication, Code coupling, Testing complexity etc.

## **Open Close Principle (OCP)**
---
Earlier Open/closed principle was defined by Bertrand Meyer in 1988:

> “Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.”

Le's see the following example:

```typescript
   class Employee{
        name: string;
        type:EmployeeType.Intern;
    }

    enum EmployeeType{
        Trainee,
        JuniorSoftwareEngineer,
        SoftwareEngineer
    }

    class EmployeeSalaryCalculator{
        private base: number = 15000;

        calculateSalary(employee: Employee): number{
            else if(employee.type == EmployeeType.Trainee){
                return this.base * 1.67;
            }
            else if(employee.type == EmployeeType.JuniorSoftwareEngineer){
                return this.base * 3;
            }
            else if( employee.type == EmployeeType.SoftwareEngineer){
                return this.base * 5;
            }

            return 0;
        }
    }
```
In the above example, we have ``Employee`` class which has a property named ``type``. Based on that type in the ``EmployeeSalaryCalculator`` class we calculate the salary of different types of employee. If more employee type added then we have to change the code in ``EmployeeType`` enum and calculate salary method. If we change the existing class or method in production, it can create bugs in our working code and we have to test all the module which use it. Our code should close for modification. We should not modify our existing code, unless we get bug in it. Let's see the below code example how we apply OCP in the previous code.

```typescript
    class Employee {
        name: string;
        salaryCalculator: IEmployeeSalaryCalculator;

        constructor(name: string, calculator: IEmployeeSalaryCalculator) {
            this.name = name;
            this.salaryCalculator = calculator;
        }
    }

    interface IEmployeeSalaryCalculator {
        calculateSalary(base: number): number;
    }

    class TraineeSalaryCalculator implements IEmployeeSalaryCalculator{
        calculateSalary(base: number): number {
            return base * 1.67;
        }
    }

    class JuniorSoftwareEngineerSalaryCalculator implements IEmployeeSalaryCalculator{
        calculateSalary(base: number): number {
            return base * 3;
        }   
    }

    class SoftwareEngineer implements IEmployeeSalaryCalculator{
        calculateSalary(base: number): number {
            return base * 5;
        }
    }
```

We can create ```IEmployeeSalaryCalculator```  interface for salary calculation. We can create salary calculator class for each type of employee and implement the interface to it. Now, If we have to add new type of employee then we can easily create a class for this and implement the interface to it. No code will be modified. There will be no effect on the existing code for the new type. Our code is now open for extension and we can extend our code according to our need.



## **Liskov Substitution Principle (LSP)**
---
>The principle defines that objects of a superclass shall be replaceable/interchangeable with objects of its subclasses without breaking the application. 


Robert C. Martin summarizes it:

>Subtypes must be substitutable for their base types.

Barbara Liskov, defining it in 1988, provided a more mathematical definition:

>If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2 then S is a subtype of T.

```typescript
public class Animal {
    public void makeNoise() {
        System.out.println("I am making noise");
    }
}

 class DumbDog extends Animal {
    @Override
    public void makeNoise() {
        throw new RuntimeException("I can't make noise");
    }
 }
```


In the above code example, we can inherit ``DumbDog`` from ``Animal``. Compailer will not give any error. But they are not interchangeable. ``DumDog`` can not make any noise. It will confuse developer. If we want to inherit, we have to ensure that the parent class property that the child class override will behave same as parent class. Let's take a look at the following example:

```typescript
public class Dog extends Animal {
    @Override
    public void makeNoise() {
        System.out.println("bow wow");
    }
}

public class Cat extends Animal {
    @Override
    public void makeNoise() {
        System.out.println("meow meow");
    }
}
```
If we inherit ``Dog`` or ``Cat`` from ``Animal``. The ``Animal`` instance is interchangable to ``Dog`` or ``Cat`` instance. Dog and cat can make noise. 


## **Interface Segregation Principle (ISP)**
---
>It is the SRP for Interface.

>Clients should not be forced to implement any methods they don’t use. Rather than one fat interface, numerous little interfaces are preferred based on groups of methods with each interface serving one submodule.

Let's see the following example:

```typescript
   interface IPrinter{
        print(content: string): void;
        scan(): void;
        fax(): void;
    }

    class MultiFunctionPrinter implements IPrinter{
        print(content: string): void {
            //implementation
        }
        scan(): void {
            //implementation 
        }
        fax(): void {
            //implementation
        }
    }

    class AnaloguePrinter implements IPrinter{
        print(content: string): void {
            //implementation
        }
        scan(): void {
            throw new Error("Method not implemented.");
        }
        fax(): void {
            throw new Error("Method not implemented.");
        }
    }
```

In the above example, we force ``AnaloguePriner`` to implement ``scan() ``and ``fax()`` functionality. But they have no functionality like these. And we force every type of printer to implement the functinality that they don't have. We can create separate interface for each of the funcionality. The solution of the problem are given below:

```typescript
    interface IPrinter{
        print(content: string): void;
    }

    interface IFaxTask{
        fax(): void;
    }

    interface IScanner{
        scan(): void;
    }

    class MultiFunctionPrinter implements IPrinter, IScanner, IFaxTask{
        print(content: string): void {
            //implementation
        }
        scan(): void {
            //implementation 
        }
        fax(): void {
            //implementation
        }
    }

    class AnalogPrinter implements IPrinter{
        print(content: string): void {
            //implementation
        }
    }
```
Now, we separate the interface for each of the functionality and do not force analogue type printer to implement the functuality that it doesn't have.


## **Dependency Inversion Principle (DIP)**
---
>High-level modules should not depend on low-level modules. Both should depend on abstractions.Abstractions should not depend on details. Details should depend on abstractions.

In the following diagram ``EmployeeService`` and ``UserService`` depends on ``Logger``. That violates the DIP.

![alt text](DIP1.PNG)

DIP states that both Logger, ``UserService`` and ``EmployeeService`` class should depends on ``ILogger`` interface. 
![alt text](DIP2.PNG)

Let's see below example: 

```typescript
    class Logger {
        public logToConsole(message: string) {
            //implementation
        }
    }

    class EmployeeService { //higher level module
        createEmployee() {
            //creation employee
            let logger: Logger = new Logger(); //low level module
            logger.logToConsole("Employee creation completed");
        }
    }

    class UserService {
        createUser() {
            //creating user
            let logger: Logger = new Logger();
            logger.logToConsole("User creation completed");
        }
    }
```

Here, High level module is the ``EmployeeService`` and ``UserService`` class. They depend on Logger class which is low level module. If we want to change our logger then we have to modify every class or module which use it and also test it.
It violates the OCP. And make code tightly coupled.According to the principle, we can create ``ILogger`` interface.``Logger``, ``EmployeeService`` and ``UserService`` class will depend on it. Then our system will be loosely coupled.

>Loose coupling, where you have minimal interdependence between components or modules of a system, is a sign of a well-structured application.

Here is the solution:

```typescript
    interface ILogger {
        log(message: string): void;
    }

    class ConsoleLogger implements ILogger {
        log(message: string): void {
            //implementation
        }
    }

    class EmailLogger implements ILogger {
        log(message: string): void {
            //implementation
        }
    }

    class EmployeeService {
        private _logger: ILogger;
        
        constructor(logger: ILogger) {
            this._logger = logger;
        }

        createEmployee() {
            //creating employee
            this._logger.log("Employee creation completed");
        }
    }

    class UserService {
        private _logger: ILogger;

        constructor(logger: ILogger) {
            this._logger = logger;
        }

        createUser() {
            //creating user
            this._logger.log("User creation completed");
        }
    }

    function main() {
        const logger: ILogger = new ConsoleLogger();

        const employeeService: EmployeeService = new EmployeeService(logger);
        employeeService.createEmployee();

        const userService: UserService = new UserService(logger);
        userService.createUser();
    }
```

### Sources:
---
SOLID: 
- https://medium.com/@alemarr/solid-principles-using-typescript-c475031efcd3

SRP:
- https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html 


OCP:
- https://medium.com/swift-india/solid-principles-part-2-open-closed-principle-bf0514b824ca 
- https://blog.cleancoder.com/uncle-bob/2014/05/12/TheOpenClosedPrinciple.html


LSP: 
- https://medium.com/design-patterns-principles/liskov-substitution-principle-648bb2d55187#:~:text=The%20Liskov%20Substitution%20Principle%20(LSP)%20is%20one%20of%20five%20SOLID,subclasses%20without%20breaking%20the%20application

- https://medium.com/@learnstuff.io/liskov-substitution-principle-ad0d6a51ffb0


ISP:
- https://medium.com/swift-india/solid-principles-part-4-interface-segregation-principle-68b671927c88

DIP: 
- https://medium.com/@kedren.villena/simplifying-dependency-inversion-principle-dip-59228122649a