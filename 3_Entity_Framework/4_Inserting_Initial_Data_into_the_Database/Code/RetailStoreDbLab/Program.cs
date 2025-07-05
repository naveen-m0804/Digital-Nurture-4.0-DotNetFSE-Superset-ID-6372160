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

            await context.Database.EnsureCreatedAsync();

            if (!await context.Categories.AnyAsync() && !await context.Products.AnyAsync())
            {
                var electronics = new Category { Name = "Electronics" };
                var groceries = new Category { Name = "Groceries" };

                await context.Categories.AddRangeAsync(electronics, groceries);

                var product1 = new Product { Name = "Laptop", Price = 75000, Category = electronics };
                var product2 = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };

                await context.Products.AddRangeAsync(product1, product2);

                await context.SaveChangesAsync();

                Console.WriteLine("Initial data inserted successfully.");
            }
            else
            {
                Console.WriteLine("Data already exists. No new data inserted.");
            }

            var products = await context.Products.Include(p => p.Category).ToListAsync();
            Console.WriteLine("\nProducts in Database:");
            foreach (var product in products)
            {
                Console.WriteLine($"ID: {product.Id}, Name: {product.Name}, Price: {product.Price}, Category: {product.Category?.Name}");
            }
        }
    }
}
