# Lab 7: Writing Queries with LINQ

## Objective
Filter, sort, and project products for reporting using LINQ with EF Core.

## Steps

### 1. Filter and Sort Products

```

var filtered = await context.Products
.Where(p => p.Price > 1000)
.OrderByDescending(p => p.Price)
.ToListAsync();

```

### 2. Project into DTO

```

var productDTOs = await context.Products
.Select(p => new { p.Name, p.Price })
.ToListAsync();

```

**These queries help you efficiently filter, sort, and shape your data for reporting and dashboards.**

