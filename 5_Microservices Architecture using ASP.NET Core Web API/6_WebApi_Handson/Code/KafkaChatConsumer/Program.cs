using System;
using Confluent.Kafka;

namespace KafkaChatConsumer
{
    class Program
    {
        static void Main(string[] args)
        {
            var config = new ConsumerConfig
            {
                BootstrapServers = "localhost:9092",
                GroupId = "chat-consumer-group",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using (var consumer = new ConsumerBuilder<Null, string>(config).Build())
            {
                consumer.Subscribe("chat-topic");
                Console.WriteLine("Waiting for messages...");
                while (true)
                {
                    var consumeResult = consumer.Consume();
                    Console.WriteLine($"Received: {consumeResult.Message.Value}");
                }
            }
        }
    }
}
