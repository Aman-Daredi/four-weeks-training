﻿namespace FileLoggerDisposableApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Use FileLogger and dispose of it properly
            FileLogger fl = new FileLogger("aman.txt");
            fl.Log("My name is Aman\n");
            fl.Log("I am 22 years old\n");
            fl.Dispose();

            // After using fl.Dispose(), I wasn't able to write to the same file as my _writer property was disposed successfully.

            fl = new FileLogger("ekta.txt");
            fl.Log("Hello World");
            fl.Dispose();
        }
    }

    class FileLogger : IDisposable
    {
        private StreamWriter _writer;

        public FileLogger(string filePath)
        {
            // Initialize StreamWriter instance
            _writer = new StreamWriter(filePath);
        }

        public void Dispose()
        {
            // Implement IDisposable pattern
            _writer.Dispose();
        }

        public void Log(string message)
        {
            // Write message to the file
            _writer.Write(message);
        }
    }
}