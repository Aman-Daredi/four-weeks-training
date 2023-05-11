namespace LinqFilterAndSort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Create a list of Person objects
            List<Person> persons = new List<Person> {
                new Person {FirstName = "Aman", LastName = "Daredi", Age = 22},
                new Person {FirstName = "Nishant", LastName = "Pandya", Age = 25},
                new Person {FirstName = "Saurav", LastName = "Pandya", Age = 20},
                new Person {FirstName = "Meet", LastName = "Modi", Age = 16},
                new Person {FirstName = "Nitin", LastName = "Adani", Age = 11},
                new Person {FirstName = "Bahubali", LastName = "Ambani", Age = 19},

            };

            // Use LINQ to filter and sort the list
            persons = persons.Where(p => p.Age > 18).ToList();
            persons = persons.OrderBy(p => p.LastName).ThenBy(p => p.FirstName).ToList();

            // Print the filtered and sorted list of people to the console
            persons.ForEach(p => Console.WriteLine("FirstName: {0}, LastName: {1}, Age: {2},", p.FirstName, p.LastName, p.Age));
        }
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
    }
}