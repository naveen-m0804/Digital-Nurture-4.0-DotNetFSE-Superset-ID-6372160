# 📦 Unit Testing with Moq - CustomerComm Example

## 🧠 Objectives

This project demonstrates the use of **Mocking** and **Dependency Injection (DI)** for writing unit testable code in a .NET application using **NUnit** and **Moq** frameworks.

---

### ✅ Learning Goals

- **Understand how Mocking enhances Test-Driven Development (TDD)**  
  - Learn about **Mocking**, **Isolation**, and **Test Doubles**
  - Difference between **Mock**, **Fake**, and **Stub**
  - Key advantages of TDD when using Mocks

- **Explain the purpose of Mocking in Unit Testing**  
  - Importance of **isolation** in unit tests
  - Avoid testing external dependencies (SMTP, DB, Files)
  - Create **Mocks** and **Stubs** for dependent services

- **Understand Dependency Injection (DI)** and how it helps in unit testing  
  - Types of DI: **Constructor Injection**, **Method Injection**
  - Promotes loosely coupled and testable code
  - Enables easy mocking of dependencies

- **Demonstrate testable code with Moq**  
  - Code example: `CustomerComm` and `IMailSender`
  - Inject mock object to simulate email sending

- **Mocking Database Access for Unit Tests**  
  - Simulate a database call using interfaces and mocks
  - Eliminate dependency on actual DB connection during tests

- **Mocking File System Access for Unit Tests**  
  - Use mock interfaces to test logic that reads/writes files
  - Prevent real file system changes while testing

---

### 🛠 Technologies Used

- .NET Framework
- C#
- NUnit
- Moq
- Visual Studio IDE

---

### 📂 Project Structure

CustomerCommLib/ ← Main library
├── IMailSender.cs ← Interface for email sending
├── MailSender.cs ← Real implementation using SMTP
└── CustomerComm.cs ← Class under test (uses IMailSender)

CustomerComm.Tests/ ← Unit test project
└── CustomerCommTests.cs← Moq-based test for CustomerComm


---

### 📌 How to Run

1. Open the solution in Visual Studio
2. Build the solution (`Ctrl + Shift + B`)
3. Go to **Test > Test Explorer**
4. Run tests – You should see green ✅ for success

---

### 👨‍💻 Author

> Created for hands-on learning of unit testing with Moq and NUnit  
> Ideal for practicing **Test-Driven Development (TDD)** using **mocked services**

---

