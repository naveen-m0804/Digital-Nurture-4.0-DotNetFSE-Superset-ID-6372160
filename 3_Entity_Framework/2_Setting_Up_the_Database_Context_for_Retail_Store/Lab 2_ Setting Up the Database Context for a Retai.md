# Lab 2: Setting Up the Database Context for a Retail Store

## Objective
Configure the EF Core `DbContext` to connect your C# models to a SQL Server database.

## 1. Create Models

**Category.cs**
```

public class Category
{
public int Id { get; set; }
public string Name { get; set; }
public List<Product> Products { get; set; }
}

```

**Product.cs**
```

public class Product
{
public int Id { get; set; }
public string Name { get; set; }
public decimal Price { get; set; }
public int CategoryId { get; set; }
public Category Category { get; set; }
}

```

## 2. Create the AppDbContext

**AppDbContext.cs**
```

using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
public DbSet<Product> Products { get; set; }
public DbSet<Category> Categories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Your_Connection_String_Here");
    }
    }

```

## 3. (Optional) Add Connection String in appsettings.json

If you prefer, you can store your connection string in `appsettings.json` and load it in your context (recommended for ASP.NET Core projects).

**appsettings.json**
```

{
"ConnectionStrings": {
"DefaultConnection": "Your_Connection_String_Here"
}
}

```

**You are now ready to use EF Core to manage your retail store data!**


