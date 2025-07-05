# Lab 6: Updating and Deleting Records

## Objective
Update product prices and remove discontinued items using EF Core.

## Steps

### 1. Update a Product

```

var product = await context.Products.FirstOrDefaultAsync(p => p.Name == "Laptop");
if (product != null)
{
product.Price = 70000;
await context.SaveChangesAsync();
}

```

### 2. Delete a Product

```

var toDelete = await context.Products.FirstOrDefaultAsync(p => p.Name == "Rice Bag");
if (toDelete != null)
{
context.Products.Remove(toDelete);
await context.SaveChangesAsync();
}

```

**Use these patterns to update and delete records in your EF Core-powered application.**


