using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using RetailStoreDbLab.Models;

namespace RetailStoreDbLab
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            var connectionString = configuration.GetConnectionString("DefaultConnection");

            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
            optionsBuilder.UseSqlServer(connectionString);

            using var context = new AppDbContext(optionsBuilder.Options);

            if (!await context.Products.AnyAsync(p => p.Name == "Laptop"))
            {
                var category = await context.Categories.FirstOrDefaultAsync();
                var laptop = new Product { Name = "Laptop", Price = 75000, CategoryId = category.Id };
                await context.Products.AddAsync(laptop);
                await context.SaveChangesAsync();
            }

            // 1. Retrieve All Products
            var products = await context.Products.ToListAsync();
            Console.WriteLine("All Products:");
            foreach (var p in products)
                Console.WriteLine($"{p.Name} - {p.Price}");

            // 2. Find by ID
            var product = await context.Products.FindAsync(1);
            Console.WriteLine($"\nFound: {product?.Name}");

            // 3. FirstOrDefault with Condition
            var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
            Console.WriteLine($"\nExpensive: {expensive?.Name}");
        }
    }
}
