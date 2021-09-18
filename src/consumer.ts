import { Kafka, Producer } from 'kafkajs';

const kafka = new Kafka({
    clientId: "app-publish-news",
    brokers: ['localhost:9094']
});

const consumer = kafka.consumer({ groupId: 'test-group' })

const subscribeMessage = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic: 'abcxyz', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
            value: message.value?.toString(),
            });
        },
    });
}

subscribeMessage();
