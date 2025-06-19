using System;
class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.Instance;
        Logger logger2 = Logger.Instance;
        logger1.Log("First log message.");
        logger2.Log("Second log message.");
        // Test: Are both references the same?
        if (object.ReferenceEquals(logger1, logger2))
        {
            Console.WriteLine("Logger is a singleton. Both references are the same.");
        }
        else
        {
            Console.WriteLine("Logger is NOT a singleton. References are different.");
        }
    }
}
