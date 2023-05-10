namespace FactorialApp
{
     public class Program
    {
        public static void Main(string[] args)
        {
            Console.Write("Enter a number: ");
            int number = int.Parse(Console.ReadLine());

            long factorial = CalculateFactorial(number);

            Console.WriteLine($"The factorial of {number} is: {factorial}");
        }

        public static long CalculateFactorial(int number)
        {

            if (number < 0)
            {
                throw new ArgumentException();
            }
            long factorial = 1;
            for (int i = 1; i <= number; i++)
            {
                factorial *= i;
            }
            return factorial;
            //throw new NotImplementedException();
        }
    }
}