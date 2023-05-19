namespace SimpleIspProblem{
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
}