import { EVENTS, IEVENTS } from "./collections";

export async function createEvent(args: IEVENTS): Promise<string> {
    try {
        let result = await EVENTS.insertOne(args);
        return result.insertedId.toString();
    } catch(err) {
        console.log(err);
        throw "Could Not Create Event";
    }
}