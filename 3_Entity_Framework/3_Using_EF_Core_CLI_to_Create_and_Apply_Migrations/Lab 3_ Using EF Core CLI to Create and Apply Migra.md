# Lab 3: Using EF Core CLI to Create and Apply Migrations

## Objective
Use the EF Core CLI to generate and apply migrations, creating your SQL Server database from your C# models.

## Steps

### 1. Install EF Core CLI (if not already)
```

dotnet tool install --global dotnet-ef

```

### 2. Create Initial Migration
```

dotnet ef migrations add InitialCreate

```
- This command generates a `Migrations` folder with code representing your schema.

### 3. Apply Migration to Create Database
```

dotnet ef database update

```
- This command creates the database and tables based on your models.

### 4. Verify in SQL Server
- Open **SQL Server Management Studio (SSMS)** or **Azure Data Studio**.
- Connect to your server and check that the `Products` and `Categories` tables have been created.

**You now have a working database schema managed by EF Core migrations!**

