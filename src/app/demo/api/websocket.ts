export interface WebsocketMessage {
    id: string;
    topic: Topic;
    message: any;
    payload: any;
}

export enum Topic {
    Dashboard = 'dashboard'
}