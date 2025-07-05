using System;
using System.Linq;
using RetailStoreDbLab.Models;

namespace RetailStoreDbLab
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var context = new AppDbContext())
            {
                // Add a category if none exist
                if (!context.Categories.Any())
                {
                    var category = new Category { Name = "Electronics" };
                    context.Categories.Add(category);
                    context.SaveChanges();
                }

                // Add a product if none exist
                if (!context.Products.Any())
                {
                    var category = context.Categories.First();
                    var product = new Product
                    {
                        Name = "Smartphone",
                        Price = 29999.99m,
                        CategoryId = category.Id
                    };
                    context.Products.Add(product);
                    context.SaveChanges();
                }

                // Display products
                var products = context.Products
                    .Select(p => new { p.Id, p.Name, p.Price, Category = p.Category.Name })
                    .ToList();

                foreach (var p in products)
                {
                    Console.WriteLine($"ID: {p.Id}, Name: {p.Name}, Price: {p.Price}, Category: {p.Category}");
                }
            }
        }
    }
}
