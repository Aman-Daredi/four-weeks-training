using System.Diagnostics;

namespace AsyncAwaitBasics
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            // Call PerformCalculations and measure time taken using Stopwatch
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            await PerformCalculations(10);
            stopwatch.Stop();
            Console.WriteLine("Elapse time: {0}", stopwatch.Elapsed.TotalSeconds);
        }

        static async Task SimulateLongRunningTask(int delayInSeconds)
        {
            // Implement long-running task simulation
            await Task.Delay(delayInSeconds);
            
        }

        static async Task PerformCalculations(int numberOfTasks)
        {
            // Start long-running tasks concurrently and wait for them to

            var tasks = new List<Task>();
            for(int i=0; i<numberOfTasks; i++) { 
                tasks.Add(SimulateLongRunningTask(10000));
            }
            await Task.WhenAll(tasks);
        }
    }
}