const app = Vue.createApp({
    data() {
        return {
            chatData: [
                {
                    id: 18245,
                    name: "whil",
                    msg: "Your chat",
                },
                {
                    id: 1832,
                    name: "auser",
                    msg: "Received chat",
                },
            ],
            chats: [],
            receive: [],
            currentUser: "whil",
            state: false,
        };
    },
    methods: {
        sendMessage(e) {
            e.preventDefault();
            if (this.chats.msg) {
                this.chats.id = Math.floor(Math.random() * 194727);
                this.chats.name = "whil";
                this.chats = [...this.chats, this.chats];
                this.state = true;
                //console.log(this.chats);
            }
        },
    },
    created() {
        // use an api and replace the chatData with the actual chat datas from the api ==\/
        //axios.get().then((chatData) => {});

        const chat = this.chatData.filter(
            (data) => data.name === this.currentUser
        );
        const rec = this.chatData.filter(
            (data) => data.name !== this.currentUser
        );
        this.receive = [...rec];
        this.chats = [...chat];
    },
}).mount("#app");
