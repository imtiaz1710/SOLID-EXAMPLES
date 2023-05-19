//problem
namespace DipSimpleProblem {
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
}


