# Lab 5: Retrieving Data from the Database

## Objective
Use EF Core methods to retrieve product data for display.

## Steps

### 1. Retrieve All Products

```

var products = await context.Products.ToListAsync();
foreach (var p in products)
Console.WriteLine(\$"{p.Name} - {p.Price}");

```

### 2. Find by ID

```

var product = await context.Products.FindAsync(1);
Console.WriteLine(\$"Found: {product?.Name}");

```

### 3. FirstOrDefault with Condition

```

var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
Console.WriteLine(\$"Expensive: {expensive?.Name}");

```

**These queries help you display and search for products efficiently using EF Core.**
