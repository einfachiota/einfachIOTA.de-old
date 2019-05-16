<template>
  <div class="supporter">
    <div class="hero">
      <div class="container">
        <h1 class="heading">Unsere Unterstützer</h1>
        <div class="divider"></div>
        <p class="sub-heading">Dank Euch können wir unsere Server bezahlen - Danke!</p>
      </div>
    </div>
    <div class="container">
      <VueQrcode value="IKTYKKCZFZZECSFIJYWYSUUTXCIBNIFPFSPGUIUUAYONDYUSHEZVQBNPDYUTDMTNTHBLABCYYLZKLGIVCINGBALQVX" :options="{ width: 200 }"></VueQrcode>
    </div>
      <div class="hero">
        <div class="container">
          <h1 class="heading">Unsere Freunde</h1>
          <div class="divider"></div>
          <p class="sub-heading">Ohne Euch gäbe es kein Projekt der Woche, danke!</p>
        </div>
      </div>
    <div class="container">

      <p>Wir von einfachIOTA betrachten die IOTA Community als eine Art große Familie die zusammen hält und sich gegenseitig unterstützt. Daher berichten wir jede Woche über ein neues, oder auch ein bereits bekanntes Projekt aus dem IOTA Ökosystem. Wir hoffen es dadurch ein bisschen bekannter zu machen und freuen uns, wenn wir die Personen hinter den Projekten besser kennen lernen. Und wie es sich bei Freunden und Verwandten so gehört, wollen wir natürlich immer sofort sehen wie es ihnen aktuell ergeht und was sie so treiben. Wir hoffen, dass hier in Zukunft noch viele weitere Freunde und Verwandte hinzu kommen! 🤗</p>
      <table class="el-table hover">
        <tr>
          <th>Name/Webseite</th>
          <th>Kurzbeschreibung</th>
          <th>Projekt der Woche</th>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://powsrv.io/">powsrv.io</a>
          </td>
          <td>POW-as-a-Service-Anbieter für IOTA</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-powsrv-io/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ecosystem.iota.org/projects/piri"
            >Piri</a>
          </td>
          <td>Proxy und Load Balancer für IOTA Nodes</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-piri/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="http://qubiclite.org/">Qubic Lite</a>
          </td>
          <td>QLite Ecosystem, ein Prototyp von Qubic von microhash</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-qubic-lite/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://t.me/IOTA_IAN_BOT"
            >IOTA Address Notifier</a>
          </td>
          <td>IOTA Address Notifier (Telegram)</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-iota-address-notifie/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ecosystem.iota.org/projects/iotipbot"
            >ioTipBot</a>
          </td>
          <td>IOTA TipBot für verschiedene Chatplattformen</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-iotipbot/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ecosystem.iota.org/projects/node-red-contrib-iota-mam"
            >Node-Red-MAM</a>
          </td>
          <td>Entwicklungsumgebung und visueller Editor für das IOT</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-node-red-mam/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://iota.partners/">IOTA.partners</a>
          </td>
          <td>interaktive Anleitung zum Installieren einer IOTA Node</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-iota-partners/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://lidbot.com/">TWO</a>
          </td>
          <td>IoT Müll Management (Umgenannt in 'lidbot')</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-two-iot-waste-management/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tanglenodes.io/"
            >Tanglenodes.io</a>
          </td>
          <td>Online Mietservice für IOTA Fullnodes</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-tanglenodes-io/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="http://publiciota.com/">publicIOTA</a>
          </td>
          <td>Unabhängige Gruppe von IOTA Enthusiasten</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-publiciota/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://thetangle.org/">TheTangle.org</a>
          </td>
          <td>Dienst zum Durchsuchen des IOTA-Tangles</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-thetangle-org/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://pact.care/">Untangle Care</a>
          </td>
          <td>IOTA im Gesundheitswesen: Daten gehören dem Patient</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-untangle-care/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tanglesheep.com/"
            >TangleSheep</a>
          </td>
          <td>Echte Schaafe automatisch füttern durch IOTA</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-tanglesheep/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://biilabs.io/"
            >TangleID (BiiLabs)</a>
          </td>
          <td>Open-Source Projekt von BiiLabs (DLT-Incubator aus Taiwan)</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-tangleid-biilabs/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/iotaledger/ict"
            >IOTA controlled agent</a>
          </td>
          <td>Leichtgewichtiger Node für das finale IOTA Protokoll</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-iota-controlled-agent/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.iota-talk.de/">IOTA Talk</a>
          </td>
          <td>Forum für IOTA Community</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-iota-talk/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://thetanglebay.org/"
            >The Tangle Bay</a>
          </td>
          <td>Landkarte für Projekten und Geschäften mit IOTA-Bezug</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-the-tangle-bay/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://thinktangle.com/"
            >Think Tangle</a>
          </td>
          <td>Sammlung aller Ideen, Konzepte, POC, usw. rund um IOTA</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-thinktangle/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://iotalink.directory/"
            >IOTAlink.directory</a>
          </td>
          <td>Webseite mit nahezu allen wichtigen IOTA Links</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-iotalink-directory/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dropbox.com/s/aeenc8ng8ftz9kt/IOTA%20Einsteiger%20Guide.doc?dl=0"
            >IOTA Einsteiger Guide</a>
          </td>
          <td>Einsteiger Guide für IOTA: Word Datei mit fast 100 Seiten</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-iota-einsteiger-guide/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://xdk2mam.io/">XDK2MAM</a>
          </td>
          <td>Open-Source-Code zu schreiben für den Bosch XDK110 Sensor</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-xdk2mam/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wiki.einfachiota.de/"
            >einfachIOTA Wiki</a>
          </td>
          <td>Deutsche Übersetzung des IOTA Developer Doc. Portals</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-einfachiota-wiki/"
            >Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://coordinator.iotawatch.it/"
            >IOTA Coordinator Monitor</a>
          </td>
          <td>Webseite mit grafischen Darstellungen des IOTA Coordinators</td>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.einfachiota.de/projekt-der-woche-iota-coordinator-monitor/"
            >Link</a>
          </td>
        </tr>
      </table>
        <div class="divider"></div>
      <p>Kennst auch du ein Projekt, dass für die IOTA Community interessant ist und von uns erklärt werden soll? Dann komm doch einfach mal zu uns auf den Discord Server vorbei https://discordapp.com/invite/2FP9uHx und melde dich bei huhn#8246! Danke!</p>
    </div>
  </div>
</template>

<script>
import { composeAPI } from "@iota/core";
const converter = require("@iota/converter");
import VueQrcode from '@chenfengyuan/vue-qrcode';

const iota = composeAPI({
  provider: "https://nutzdoch.einfachiota.de"
});

export default {
  data() {
    return {
      transactions: [],
      balances: 0
    };
  },
  components: {VueQrcode},
  methods: {
    getMessage(trytes) {
      return converter.trytesToAscii(trytes + "9");
    },
    async fetchTransactions() {
      try {
        let txs = await iota.findTransactionObjects({
          addresses: [
            "IKTYKKCZFZZECSFIJYWYSUUTXCIBNIFPFSPGUIUUAYONDYUSHEZVQBNPDYUTDMTNTHBLABCYYLZKLGIVCINGBALQVX"
          ]
        });
        txs.map(tx => {
          iota
            .getLatestInclusion([tx.hash])
            .then(states => {
              if (states[0] == true) {
                this.transactions.push(tx);
              }
            })
            .catch(err => {
              console.log("Error while fetching latest inclusuin state: ", err);
            });
        });
      } catch (err) {
        console.log("Error while fetching transactions: ", err);
      }
    }
  },
  created() {
    this.fetchTransactions();

    iota
      .getBalances(
        [
          "IKTYKKCZFZZECSFIJYWYSUUTXCIBNIFPFSPGUIUUAYONDYUSHEZVQBNPDYUTDMTNTHBLABCYYLZKLGIVCINGBALQVX"
        ],
        100
      )
      .then(({ balances }) => {
        this.balances = balances;
      })
      .catch(err => {
        console.log("Error fetching balances: ", err);
      });
  }
};
</script>


<style lang="scss" scoped>
.heading {
  text-align: left !important;
}
.sub-heading {
  text-align: left !important;
}

.container {
  margin-bottom: 50px;
  a {
    color: var(--primary);
    &:hover {
      color: var(--primary--darken);
    }
  }
}
</style>