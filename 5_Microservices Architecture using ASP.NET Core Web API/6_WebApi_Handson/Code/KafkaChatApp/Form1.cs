using System;
using System.Windows.Forms;
using Confluent.Kafka;

namespace KafkaChatApp
{
    public partial class Form1 : Form
    {
        private readonly string kafkaServer = "localhost:9092";
        private readonly string topic = "chat-topic";

        public Form1()
        {
            InitializeComponent();
        }

        private async void BtnSend_Click(object sender, EventArgs e)
        {
            var message = txtMessage.Text;
            if (!string.IsNullOrWhiteSpace(message))
            {
                var config = new ProducerConfig { BootstrapServers = kafkaServer };
                using (var producer = new ProducerBuilder<Null, string>(config).Build())
                {
                    await producer.ProduceAsync(topic, new Message<Null, string> { Value = message });
                    MessageBox.Show("Message sent!");
                    txtMessage.Clear();
                }
            }
        }

        private void BtnCancel_Click(object sender, EventArgs e)
        {
            txtMessage.Clear();
        }
    }
}
