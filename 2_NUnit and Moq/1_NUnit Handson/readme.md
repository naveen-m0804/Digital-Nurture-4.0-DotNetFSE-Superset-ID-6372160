# ✅ Unit Testing in C# using NUnit – Calculator Test Project

This project demonstrates basic **Unit Testing** using **NUnit** in C#.  
The focus is on testing core calculator operations like addition, subtraction, multiplication, and division.

---

## 🎯 Objectives

- ✅ **Explain the meaning of Unit Testing and difference from Functional Testing**
  - Unit Testing: Tests the **smallest unit** of code (e.g., a method)
  - Functional Testing: Tests the **end-to-end flow or feature**
  - Unit tests often **mock dependencies** to isolate the unit

- ✅ **List various types of testing**
  - Unit Testing
  - Functional Testing
  - Automated Testing
  - Performance Testing

- ✅ **Understand the benefit of Automated Testing**
  - Saves time
  - Improves code reliability
  - Reduces manual errors
  - Enables faster development feedback

- ✅ **Explain loosely coupled & testable design**
  - Code should **not be tightly dependent** on concrete classes
  - Use **interfaces and dependency injection** to improve testability

- ✅ **Write your first test program**
  - Validated `Addition` using:
    - `[TestFixture]`
    - `[Test]`
    - `[TestCase]`

- ✅ **Understand key NUnit attributes**
  - `[SetUp]`: Runs before each test
  - `[TearDown]`: Runs after each test
  - `[Ignore]`: Skips a test with a reason

- ✅ **Explain the benefit of parameterized test cases**
  - Test different input/output combinations with a single method
  - Keeps code DRY (Don't Repeat Yourself)
  - Easily scalable

---

## 🧪 Technologies Used

- C# (.NET Framework 4.8)
- NUnit
- NUnit3TestAdapter
- Microsoft.NET.Test.Sdk
- Visual Studio



---

## ✅ Sample Test Example

```csharp
[Test]
[TestCase(2, 3, 5)]
[TestCase(-1, -1, -2)]
public void Addition_ReturnsExpected(double a, double b, double expected)
{
    var result = _calculator.Addition(a, b);
    Assert.That(result, Is.EqualTo(expected));
}
