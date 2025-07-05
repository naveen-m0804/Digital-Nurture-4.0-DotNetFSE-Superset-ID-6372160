# Lab 4: Inserting Initial Data into the Database

## Objective
Use EF Core to insert initial categories and products asynchronously.

## Steps

### 1. Insert Data in `Program.cs`

```

using var context = new AppDbContext();

var electronics = new Category { Name = "Electronics" };
var groceries = new Category { Name = "Groceries" };
await context.Categories.AddRangeAsync(electronics, groceries);

var product1 = new Product { Name = "Laptop", Price = 75000, Category = electronics };
var product2 = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };
await context.Products.AddRangeAsync(product1, product2);

await context.SaveChangesAsync();

```

### 2. Run the App

```

dotnet run

```

### 3. Verify in SQL Server

- Open SQL Server Management Studio (SSMS) or Azure Data Studio.
- Check that the `Categories` and `Products` tables contain the new data.

**You have now successfully inserted initial data into your database using EF Core!**


