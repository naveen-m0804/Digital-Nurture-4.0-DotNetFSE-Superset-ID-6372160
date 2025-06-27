CREATE DATABASE RankingWindowFunc;
GO

USE RankingWindowFunc;
GO

CREATE TABLE Product (
    ProductID INT IDENTITY(1,1) PRIMARY KEY,
    ProductName NVARCHAR(100),
    Category NVARCHAR(100),
    Price DECIMAL(10,2)
);
GO

INSERT INTO Product (ProductName, Category, Price) VALUES
('Laptop A', 'Electronics', 70000),
('Laptop B', 'Electronics', 70000),
('Laptop C', 'Electronics', 65000),
('Phone A', 'Electronics', 30000),
('Phone B', 'Electronics', 30000),
('Refrigerator A', 'Appliances', 50000),
('Refrigerator B', 'Appliances', 55000),
('Refrigerator C', 'Appliances', 55000),
('Microwave A', 'Appliances', 10000),
('Microwave B', 'Appliances', 12000);
GO

-- Using ROW_NUMBER()
SELECT *
FROM (
    SELECT 
        Category,
        ProductName,
        Price,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM Product
) AS RankedProducts
WHERE RowNum <= 3;

-- Using RANK()
SELECT *
FROM (
    SELECT 
        Category,
        ProductName,
        Price,
        RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum
    FROM Product
) AS RankedProducts
WHERE RankNum <= 3;

-- Using DENSE_RANK()
SELECT *
FROM (
    SELECT 
        Category,
        ProductName,
        Price,
        DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
    FROM Product
) AS RankedProducts
WHERE DenseRankNum <= 3;
