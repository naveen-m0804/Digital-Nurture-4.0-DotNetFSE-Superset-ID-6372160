using NUnit.Framework;
using CalcLibrary;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class SimpleCalculatorTests
    {
        private SimpleCalculator _calculator;

        [SetUp]
        public void Setup()
        {
            _calculator = new SimpleCalculator();
        }

        [TearDown]
        public void Teardown()
        {
            _calculator = null;
        }

        [Test]
        [TestCase(5, 3, 8)]
        [TestCase(-2, -3, -5)]
        [TestCase(0, 0, 0)]
        public void Addition_ReturnsExpected(double a, double b, double expected)
        {
            var result = _calculator.Addition(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(5, 3, 2)]
        [TestCase(-2, -3, 1)]
        [TestCase(0, 0, 0)]
        public void Subtraction_ReturnsExpected(double a, double b, double expected)
        {
            var result = _calculator.Subtraction(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(5, 3, 15)]
        [TestCase(-2, -3, 6)]
        [TestCase(0, 5, 0)]
        public void Multiplication_ReturnsExpected(double a, double b, double expected)
        {
            var result = _calculator.Multiplication(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(6, 3, 2)]
        [TestCase(-6, -3, 2)]
        [TestCase(0, 5, 0)]
        public void Division_ReturnsExpected(double a, double b, double expected)
        {
            var result = _calculator.Division(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        public void Division_ByZero_ThrowsArgumentException()
        {
            Assert.That(() => _calculator.Division(5, 0),
                Throws.ArgumentException.With.Message.EqualTo("Second Parameter Can't be Zero"));
        }
    }
}
