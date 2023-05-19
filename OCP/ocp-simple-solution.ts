namespace SimpleOCPSolution {
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

    class InternSalaryCalculator implements IEmployeeSalaryCalculator {
        calculateSalary(base: number): number {
            return base;
        }
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
}
