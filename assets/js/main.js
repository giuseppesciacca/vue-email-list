const { createApp } = Vue

createApp({
    data() {
        return {
            email: null,
            numEmail: 10,
            listEmail: [],
        }
    },
    mounted() {
        for (let i = 0; i < this.numEmail; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    this.email = response.data.response;
                    console.log(this.email);
                    this.listEmail.push(this.email);
                })
        }
    }
}).mount('#app')