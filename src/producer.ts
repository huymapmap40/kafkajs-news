import { Kafka, Producer } from 'kafkajs';
import * as Utility from './utility';

const TOPIC = 'topic.collection.news';
const kafka = new Kafka({
    clientId: "app-publish-news",
    brokers: ['52.15.77.79:9094']
});

const producer = kafka.producer();

const publishMessage = async (producer: Producer, topic: string, dataArray: object[]): Promise<void> => {
    await producer.connect();
    // Send message to kafka every 5s
    for(var i=0; i< dataArr.length; i++) {
        await producer.send({
            topic: TOPIC,
            messages: [{value: JSON.stringify(dataArr[i])}]
        });
        await Utility.delay(5000);
    }
    
    await producer.disconnect();
}

// Publish all data in addresses.csv to topic kafka
const addressCsv = './data/predict_data.csv';
const dataArr = Utility.csvToObject(addressCsv);
publishMessage(producer, TOPIC, dataArr);

