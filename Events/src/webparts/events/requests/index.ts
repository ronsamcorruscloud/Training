import axios from 'axios';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IItemAddResult } from "@pnp/sp/items";


export const addEvent = (event: any): Promise<any> => {
    return (
        sp.web.lists.getByTitle("event_list").items.add({
            Title: event.title,
            Description: event.description,
            Date: event.date
        }).then(resp => {
            return resp;
        })
    )
}