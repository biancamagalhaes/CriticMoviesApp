class Websocket {
    instance: any;
    interval: any;
    token: string;
    url: string;

    onclose?: (f: any) => void;
    onmessage?: (f: any) => void;
    onerror?: (f: any) => void;
    onopen?: (f: any) => void;

    constructor(token: string, url: string) {
        this.token = token;
        this.url = url;
        this.interval = setInterval(() => {
            this.checkConnect();
        }, 3000);
    }

    checkConnect = () => {
        if (!this.instance || (this.instance && this.instance.readyState !== 1)) {
            this.onclose && this.onclose({});
            this.connect();
        }
    };

    connect = () => {
        this.instance = null;
        this.instance = new (WebSocket as any)(this.url, [], {
            headers: { Authorization: this.token },
        });
        this.instance.binaryType = 'arraybuffer';
        this.instance.onclose = (e: any) => this.onclose && this.onclose(e);
        this.instance.onopen = (e: any) => this.onopen && this.onopen(e);
        this.instance.onmessage = (e: any) => this.onmessage && this.onmessage(e);
        this.instance.onerror = (e: any) => this.onerror && this.onerror(e);
    };

    send = (a: string) => {
        if (this.instance) {
            if (this.instance.readyState === 1) {
                this.instance.send(a);
            }
        }
    };

    getStatus = () => {
        return this.instance.readyState;
    };

    close = () => {
        this.instance.close();
        clearInterval(this.interval);
    };
}

export default Websocket;
