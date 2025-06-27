USE RankingWindowFunc ;
GO

-- DATABASE SCHEMA ------------------------------------------
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Region VARCHAR(50)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- SAMPLE DATA ----------------------------------------------
INSERT INTO Customers (CustomerID, Name, Region) VALUES
(1, 'Alice', 'North'),
(2, 'Bob', 'South'),
(3, 'Charlie', 'East'),
(4, 'David', 'West');

INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Tablet', 'Electronics', 600.00),
(4, 'Headphones', 'Accessories', 150.00);

INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES
(1, 1, '2023-01-15'),
(2, 2, '2023-02-20'),
(3, 3, '2023-03-25'),
(4, 4, '2023-04-30');

INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 1),
(4, 4, 4, 3);

-- EXERCISE 1: NON-CLUSTERED INDEX -------------------------

-- Step 1: Query before index creation
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- Step 2: Create a non-clustered index on ProductName
CREATE NONCLUSTERED INDEX IX_Products_ProductName
ON Products (ProductName);

-- Step 3: Query after index creation
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- EXERCISE 2: CLUSTERED INDEX -----------------------------

-- Step 1: Query before index creation
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';

-- Step 2: Create a clustered index on OrderDate
-- (First drop the existing PK clustered index and re-add PK as non-clustered because a table can have only one clustered index)

ALTER TABLE Orders DROP CONSTRAINT PK__Orders; -- PK__Orders will be system-generated name, adjust if needed
-- Since dropping PK is complex, here's better: Create clustered index separately (if no clustered index exists)
-- If PK is already clustered, skip this or create on another column
CREATE CLUSTERED INDEX IX_Orders_OrderDate
ON Orders (OrderDate);

-- Step 3: Query after index creation
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';

-- EXERCISE 3: COMPOSITE INDEX -----------------------------

-- Step 1: Query before index creation
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';

-- Step 2: Create composite index on CustomerID and OrderDate
CREATE NONCLUSTERED INDEX IX_Orders_CustomerID_OrderDate
ON Orders (CustomerID, OrderDate);

-- Step 3: Query after index creation
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';
