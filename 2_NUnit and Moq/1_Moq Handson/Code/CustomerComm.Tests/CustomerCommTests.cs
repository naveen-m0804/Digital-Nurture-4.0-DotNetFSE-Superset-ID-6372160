using NUnit.Framework;
using Moq;
using CustomerCommLib;

namespace CustomerComm.Tests
{
    [TestFixture]
    public class CustomerCommTests
    {
        private CustomerCommLib.CustomerComm _customerComm;
        private Mock<IMailSender> _mockMailSender;

        [OneTimeSetUp]
        public void Setup()
        {
            // Create and configure the mock
            _mockMailSender = new Mock<IMailSender>();
            _mockMailSender
                .Setup(sender => sender.SendMail(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(true);

            // Inject mock into CustomerComm
            _customerComm = new CustomerCommLib.CustomerComm(_mockMailSender.Object);
        }

        [Test]
        public void SendMailToCustomer_ReturnsTrue_WhenMockReturnsTrue()
        {
            // Act
            bool result = _customerComm.SendMailToCustomer();

            //Output message
            TestContext.WriteLine("Result of SendMailToCustomer: " + result);

            // Assert
            Assert.That(result, Is.True);
        }
    }
}
