using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using RetailStoreDbLab.Models;

namespace RetailStoreDbLab
{
    // Optional: Strongly-typed DTO class for projection
    public class ProductDTO
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
    }

    class Program
    {
        static async Task Main(string[] args)
        {
            // Load configuration from appsettings.json
            var configuration = new ConfigurationBuilder()
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            var connectionString = configuration.GetConnectionString("DefaultConnection");

            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
            optionsBuilder.UseSqlServer(connectionString);

            using var context = new AppDbContext(optionsBuilder.Options);

            // 1. Filter and Sort: Products with Price > 1000, sorted descending by Price
            var filtered = await context.Products
                .Where(p => p.Price > 1000)
                .OrderByDescending(p => p.Price)
                .ToListAsync();

            Console.WriteLine("Filtered and Sorted Products (Price > 1000):");
            foreach (var p in filtered)
                Console.WriteLine($"{p.Name} - {p.Price}");

            // 2. Project into Anonymous DTO (Name and Price only)
            var productDTOs = await context.Products
                .Select(p => new { p.Name, p.Price })
                .ToListAsync();

            Console.WriteLine("\nProduct DTOs (Anonymous Type):");
            foreach (var dto in productDTOs)
                Console.WriteLine($"{dto.Name} - {dto.Price}");

            // 3. (Optional) Project into Strongly-Typed DTO
            var strongDTOs = await context.Products
                .Select(p => new ProductDTO { Name = p.Name, Price = p.Price })
                .ToListAsync();

            Console.WriteLine("\nProduct DTOs (Strongly Typed):");
            foreach (var dto in strongDTOs)
                Console.WriteLine($"{dto.Name} - {dto.Price}");
        }
    }
}
