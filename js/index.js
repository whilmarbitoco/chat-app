const app = Vue.createApp({
    data() {
        return {
            chats: [],
            state: false,
        };
    },
    methods: {
        sendMessage(e) {
            e.preventDefault();
            this.chats = [...this.chats, this.chats];
            this.state = true;
        },
    },
}).mount("#app");
