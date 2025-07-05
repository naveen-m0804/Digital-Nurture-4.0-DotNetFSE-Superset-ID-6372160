using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using RetailInventory.Models;

namespace RetailInventory
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var context = new RetailContext())
            {
                context.Database.EnsureCreated();
            }

            bool exit = false;
            while (!exit)
            {
                Console.WriteLine("\nRetail Inventory System - CRUD Operations");
                Console.WriteLine("1. Add Product");
                Console.WriteLine("2. Get Product by ID");
                Console.WriteLine("3. Get All Products");
                Console.WriteLine("4. Update Product");
                Console.WriteLine("5. Delete Product");
                Console.WriteLine("6. Exit");
                Console.Write("Select an option: ");
                var choice = Console.ReadLine();

                switch (choice)
                {
                    case "1":
                        AddProduct();
                        break;
                    case "2":
                        GetProductById();
                        break;
                    case "3":
                        GetAllProducts();
                        break;
                    case "4":
                        UpdateProduct();
                        break;
                    case "5":
                        DeleteProduct();
                        break;
                    case "6":
                        exit = true;
                        break;
                    default:
                        Console.WriteLine("Invalid option. Try again.");
                        break;
                }
            }
        }

        static void AddProduct()
        {
            using (var context = new RetailContext())
            {
                Console.Write("Enter product name: ");
                string name = Console.ReadLine();

                Console.Write("Enter stock quantity: ");
                int stock = int.Parse(Console.ReadLine());

                // List categories
                var categories = context.Categories.ToList();
                if (!categories.Any())
                {
                    Console.Write("No categories found. Enter new category name: ");
                    string catName = Console.ReadLine();
                    var newCat = new Category { Name = catName };
                    context.Categories.Add(newCat);
                    context.SaveChanges();
                    categories.Add(newCat);
                }

                Console.WriteLine("Available Categories:");
                foreach (var cat in categories)
                {
                    Console.WriteLine($"{cat.CategoryId}. {cat.Name}");
                }
                Console.Write("Enter Category ID: ");
                int catId = int.Parse(Console.ReadLine());

                var product = new Product
                {
                    Name = name,
                    Stock = stock,
                    CategoryId = catId
                };
                context.Products.Add(product);
                context.SaveChanges();
                Console.WriteLine("Product added successfully.");
            }
        }

        static void GetProductById()
        {
            using (var context = new RetailContext())
            {
                Console.Write("Enter Product ID: ");
                int id = int.Parse(Console.ReadLine());

                var product = context.Products
                    .Include(p => p.Category)
                    .FirstOrDefault(p => p.ProductId == id);

                if (product != null)
                {
                    Console.WriteLine($"ID: {product.ProductId}, Name: {product.Name}, Stock: {product.Stock}, Category: {product.Category?.Name}");
                }
                else
                {
                    Console.WriteLine("Product not found.");
                }
            }
        }

        static void GetAllProducts()
        {
            using (var context = new RetailContext())
            {
                var products = context.Products.Include(p => p.Category).ToList();
                Console.WriteLine("All Products:");
                foreach (var p in products)
                {
                    Console.WriteLine($"ID: {p.ProductId}, Name: {p.Name}, Stock: {p.Stock}, Category: {p.Category?.Name}");
                }
            }
        }

        static void UpdateProduct()
        {
            using (var context = new RetailContext())
            {
                Console.Write("Enter Product ID to update: ");
                int id = int.Parse(Console.ReadLine());

                var product = context.Products.FirstOrDefault(p => p.ProductId == id);
                if (product == null)
                {
                    Console.WriteLine("Product not found.");
                    return;
                }

                Console.Write($"Enter new name (current: {product.Name}): ");
                string name = Console.ReadLine();
                if (!string.IsNullOrWhiteSpace(name))
                    product.Name = name;

                Console.Write($"Enter new stock (current: {product.Stock}): ");
                string stockInput = Console.ReadLine();
                if (int.TryParse(stockInput, out int stock))
                    product.Stock = stock;

                context.SaveChanges();
                Console.WriteLine("Product updated successfully.");
            }
        }

        static void DeleteProduct()
        {
            using (var context = new RetailContext())
            {
                Console.Write("Enter Product ID to delete: ");
                int id = int.Parse(Console.ReadLine());

                var product = context.Products.FirstOrDefault(p => p.ProductId == id);
                if (product == null)
                {
                    Console.WriteLine("Product not found.");
                    return;
                }

                context.Products.Remove(product);
                context.SaveChanges();
                Console.WriteLine("Product deleted successfully.");
            }
        }
    }
}
