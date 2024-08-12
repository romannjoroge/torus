import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
import { PortalDefinition, PortalPacket, PortalPlugin } from "@kade-net/portals-parser"
import { PortalParams } from "../types"


export class HomePortalPlugin extends PortalPlugin<PortalParams, any> {
    async generateAsync(args: PortalParams): Promise<PortalDefinition> {
        return Promise.resolve({
            id: this.id,
            title: 'Torus',
            icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
            type: 'app',
            description: 'Interact with events',
            // image: generateURL({
            //     params: {
            //         id: 'home',
            //     },
            //     is_image: true
            // }),
            image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
            aspect_ratio: '1:1',
            buttons: [
                {
                    title: 'RSVP',
                    // target: generateURL({
                    //     params: {
                    //         id: 'home',
                    //         button: '1'
                    //     }
                    // }),
                    target: "",
                    index: 1,
                    type: 'post',
                },
                {
                    title: `View More Details`,
                    target: `https://shacks.notion.site/Shacks-FAQs-d4b6e28c334f4dbea55b01598a848db1?pvs=4`,
                    index: 2,
                    type: 'link'
                }
            ]
        })
    }

    prepareProps(args: PortalParams): Promise<any> {
        return Promise.resolve({})
    }

    generateView(props: any): JSX.Element {
        return (
            <div className="p-2">
                <h2>Event Title</h2>
                <Image
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    width={100}
                    height={100}
                    alt="Banner Image"
                    className="py-4"
                />
                <p className="py-4">Some form of description</p>
                <div className="flex justify-between">
                    <button>RSVP</button>
                    <button>View More Details</button>
                </div>
            </div>
        )
    }

    async getNext<T = Record<string, any>>(params: T, packet: PortalPacket) {
        const { button } = params as unknown as { button: `${number}` }

        if (button === '1') {
            return {
                id: 'success'
            }
        }
        return {} as any
    }


    static init() {
        return new HomePortalPlugin('home')
    }
}