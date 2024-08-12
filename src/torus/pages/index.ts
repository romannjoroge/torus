import { PortalGenerator, PortalPacket } from "@kade-net/portals-parser";
import { PortalParams } from "./types";
import { HomePortalPlugin } from "./plugins";


function registerPortalPages(args: PortalParams) {
    return new PortalGenerator<PortalParams>(args.id ? args : {
        ...args,
        id: 'home'
    })
        .registerPlugin(HomePortalPlugin.init())
        // .registerPlugin(BuyerPortalPlugin.init())
        // .registerPlugin(ChosenShackPlugin.init())
        // .registerPlugin(NFTDetailsPlugin.init())
        // .registerPlugin(ChosenShackHistoryPlugin.init())
        // .registerPlugin(CreateShackPlugin.init())
        // .registerPlugin(ShackDashboardPlugin.init())
        // .registerPlugin(ListNFTPlugin.init())
        // .registerPlugin(UnlistNFTPlugin.init())
        // .registerPlugin(ListNFTPlugin.init())
        // .registerPlugin(SalerNFTHistoryPlugin.init())
        // .registerPlugin(StatusMessagePlugin.init())
        // .registerPlugin(ListingPriceFormPlugin.init())
        // .registerPlugin(ListedNFTsPlugin.init())
}

export async function generatePortalModel(args: PortalParams) {
    return registerPortalPages(args.id ? args : {
        ...args,
        id: 'home'
    })
        .serialize()
}

export async function renderView(args: PortalParams) {
    return registerPortalPages(args.id ? args : {
        ...args,
        id: 'home'
    })
        .render()
}

export async function getNextPortal(args: any, packet: PortalPacket) {
    return registerPortalPages(args.id ? args : {
        ...args,
        id: 'home'
    })
        .next(args, packet)
}