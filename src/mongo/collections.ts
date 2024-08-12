import { DATABASE } from "./client"

export interface IEVENTS {
    title: string,
    bannerURL: string,
    description: string,
    rsvp: string[],
    creator: string
}

export const EVENTS = DATABASE.collection<IEVENTS>("events");