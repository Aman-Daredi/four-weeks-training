namespace CovariantAndContravariantGenerics
{
    interface IProcessor<in TInput, out TResult>
    {
        TResult Process(TInput input);
    }

    class StringToIntProcessor : IProcessor<string, int>
    {
        // Implement Process method
        public int Process(string input)
        {
            //throw new NotImplementedException();
            return input.Length;
        }
    }

    class DoubleToStringProcessor : IProcessor<double, string>
    {
        // Implement Process method
        public string Process(double input)
        {
            //throw new NotImplementedException();
            return input.ToString();
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            // Demonstrate covariance and contravariance with IProcessor interface

            // Covariance demonstration
            IProcessor<string, int> processor = new StringToIntProcessor();
            int length = processor.Process("aman");
            Console.WriteLine(length);

            // Contravariance demonstration
            IProcessor<double, string> processor2 = new DoubleToStringProcessor();
            string s = processor2.Process(10.12);
            Console.WriteLine(s.GetType().Name);

        }
    }
}