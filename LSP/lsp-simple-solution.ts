namespace SimpleLSPProblem {
    interface IFruit{
         GetColor(): string;
    }

    class Apple implements IFruit{
        public GetColor() {
            return "Red";
        }
    }

    class Orange implements IFruit{
        public GetColor() {
            return "Orange";
        }
    }
}