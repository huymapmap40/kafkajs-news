import { Kafka, Producer } from 'kafkajs';

const TOPIC_NEWS = 'topic.collection.news';
const TOPIC_PREDICT = 'topic.prediction.news';
const kafka = new Kafka({
    clientId: "app-publish-news",
    brokers: ['52.15.77.79:9094']
});

const consumer = kafka.consumer({ groupId: 'test-group' })

const subscribeMessage = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic: TOPIC_PREDICT, fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
            value: message.value?.toString(),
            });
        },
    });
}

subscribeMessage();
