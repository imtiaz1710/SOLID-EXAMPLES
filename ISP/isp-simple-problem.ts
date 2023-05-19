namespace SimpleIspProblem{
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
}