using System;
public class Logger
{
    private static Logger _instance;
    private static readonly object _lock = new object();
    // Private constructor to prevent instantiation
    private Logger() { }
    // Public static method to get the instance
    public static Logger Instance
    {
        get
        {
            // Double-checked locking for thread safety
            if (_instance == null)
            {
                lock (_lock)
                {
                    if (_instance == null)
                    {
                        _instance = new Logger();
                    }
                }
            }
            return _instance;
        }
    }
    // Example log method
    public void Log(string message)
    {
        Console.WriteLine($"Log: {message}");
    }
}
