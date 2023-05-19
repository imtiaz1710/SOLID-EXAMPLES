namespace SimpleOCPProblem{
    class Employee{
        name: string;
        type:EmployeeType.Intern;
    }

    enum EmployeeType{
        Intern,
        Trainee,
        JuniorSoftwareEngineer,
        SoftwareEngineer
    }

    class EmployeeSalaryCalculator{
        private base: number = 15000;

        calculateSalary(employee: Employee): number{
            if(employee.type == EmployeeType.Intern){
                return this.base;
            }
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
}