namespace LinqListNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Create a list of integers
            List<int> numbers = new List<int> { 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 };

            // Use LINQ to perform the following operations:
            // 1. Find all even numbers
            var queryForAllEvenNumbers = numbers.Where(x => x % 2 == 0);

            // 2. Find all numbers greater than a specific value (e.g., 20)
            var queryForNumberGreaterThan20 = numbers.Where(x => x > 20);

            // 3. Calculate the sum of all numbers
            int sum = numbers.Sum(x => x);
            Console.WriteLine(sum);

            // 4. Calculate the average of all numbers
            double average = numbers.Average(x => x);
            Console.WriteLine(average);

            // 5. Find the minimum and maximum values in the list
            int Minimum = numbers.Min(x => x);
            int Maximum = numbers.Max(x => x);

            Console.WriteLine(Minimum + "  " + Maximum);

        }
    }
}