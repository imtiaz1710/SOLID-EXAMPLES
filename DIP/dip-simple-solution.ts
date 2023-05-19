namespace DipSimpleSolution {
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
}