using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Sample Products
        Product[] products = new Product[]
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Watch", "Accessories"),
            new Product(104, "Phone", "Electronics"),
            new Product(105, "T-shirt", "Fashion")
        };

        Console.WriteLine("Searching for 'Watch' using Linear Search:");
        Product linearResult = LinearSearch(products, "Watch");
        Console.WriteLine(linearResult != null ? $"Found: {linearResult.ProductName}" : "Not Found");

        // Sort by ProductName for Binary Search
        Array.Sort(products, (a, b) => a.ProductName.CompareTo(b.ProductName));

        Console.WriteLine("\nSearching for 'Watch' using Binary Search:");
        Product binaryResult = BinarySearch(products, "Watch");
        Console.WriteLine(binaryResult != null ? $"Found: {binaryResult.ProductName}" : "Not Found");
    }

    static Product LinearSearch(Product[] products, string name)
    {
        foreach (var product in products)
        {
            if (product.ProductName.Equals(name, StringComparison.OrdinalIgnoreCase))
                return product;
        }
        return null;
    }

    static Product BinarySearch(Product[] products, string name)
    {
        int left = 0, right = products.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;
            int comparison = string.Compare(name, products[mid].ProductName, true);

            if (comparison == 0)
                return products[mid];
            else if (comparison < 0)
                right = mid - 1;
            else
                left = mid + 1;
        }
        return null;
    }
}

