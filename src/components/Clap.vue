<template>
  <div id="clap">
    <img @click="clap" alt="clap" class="clap-icon" src="../assets/clapping-hands.svg">
  </div>
</template>

<script>
const iotaLibrary = require('@iota/core')
import generateSeed from '../utils/generateSeed.js'

const iota = iotaLibrary.composeAPI({
  provider: 'https://nutzdoch.einfachiota.de'
})

console.log("22process.env.CLAP_ADDRESS", process.env.VUE_APP_CLAP_ADDRESS)

export default {

    methods: {
        clap() {
            console.log("clap!")
        },
        send() {
            // Dies ist unsere IOTA Empfänger Adresse. An diese Werden wir eine "HELLO WORLD" Nachricht schicken.
            console.log("process.env.CLAP_ADDRESS", process.env.VUE_APP_CLAP_ADDRESS)
            const address = process.env.VUE_APP_CLAP_ADDRESS

            // Dies ist unser Seed. Mithilfe des Seeds schicken wir die Nachricht.
            const seed = generateSeed()
            const message_in_trytes = "EINFACHIOTA"


            const transfers = [
            {
                value: 0,
                address: address,
                message: message_in_trytes
            }
            ]

            // Hier bereiten wir alles vor uns senden die Transaktion zum Tangle. Wenn alles klappt hat, bekommt ihr ein Budle Objekt in der Konsole angezeigt.
            iota
            .prepareTransfers(seed, transfers)
            .then(trytes => iota.sendTrytes(trytes, 3, 14))
            .then(bundle => {
                console.log(bundle)
            })
            .catch(err => {
                console.error(err)
            })
        }
    },
    mounted() {
        this.send()
    }
}
</script>
