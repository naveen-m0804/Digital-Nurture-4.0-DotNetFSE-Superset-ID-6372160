using System;
using System.Globalization;
class FinancialForecast
{
    static void Main()
    {
        // Set culture to Indian (₹ symbol)
        CultureInfo culture = new CultureInfo("en-IN");
        CultureInfo.CurrentCulture = culture;

        double initialValue = 10000;         // Starting investment amount
        double annualGrowthRate = 0.08;      // 8% annual growth rate
        int years = 5;                       // Number of years to forecast

        double futureVal = ForecastIterative(initialValue, annualGrowthRate, years);

        // Output the result formatted in Indian currency
        Console.WriteLine($"Future Value after {years} years: {futureVal}");
    }

    // Iterative method to calculate future value based on growth rate
    static double ForecastIterative(double initialValue, double growthRate, int years)
    {
        double result = initialValue;
        for (int i = 1; i <= years; i++)
        {
            result *= (1 + growthRate);
        }
        return result;
    }
}
