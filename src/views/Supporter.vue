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
      <div class="address">
        <h3>Unsere Spendenadresse:</h3>
        <VueQrcode :value="address" :options="{ width: 200 }"></VueQrcode>
        <p>{{address}}</p>
        <button
          type="button"
          class="el-button el-button--primary"
          v-clipboard:copy="address"
        >Adresse kopieren!</button>
      </div>
    </div>
    <div class="container">
      <div class="address">
        <h3>Trinity Deep Links</h3>
        <p>Spende jetzt einfach mit IOTA Trininty Deep Links</p>
        <p></p>
        <a :href="`iota://${address}?amount=1&message=IOTALove`">1 IOTA - #einfachIOTALove</a>
        <br />
        <br />
        <a :href="`iota://${address}?amount=1000000&message=IOTALove`">1 MIOTA - #einfachMIOTALove</a>
        <br />
        <br />
        <a :href="`iota://${address}?amount=10000000&message=IOTALove`">10 MIOTA - #zehnfachMIOTALove</a>
        <br />
        <br />
        <a :href="`iota://${address}?amount=100000000&message=IOTALove`">100 MIOTA - #HundermalMIOTALove</a>
      </div>
    </div>
    <div class="hero">
      <div class="container">
        <h1 class="heading">Unsere Freunde</h1>
        <div class="divider"></div>
        <p class="sub-heading">Ohne Euch gäbe es kein Projekt der Woche - Danke!</p>
      </div>
    </div>
    <div class="container">
      <p>
        Wir von einfachIOTA betrachten die IOTA Community als eine Art große Familie die zusammen hält und sich gegenseitig unterstützt.
        Daher berichten wir jede Woche über ein neues, oder auch ein bereits bekanntes Projekt aus dem IOTA Ökosystem.
        Wir hoffen es dadurch ein bisschen bekannter zu machen und freuen uns, wenn wir die Personen hinter den Projekten besser kennen lernen.
        Und wie es sich bei Freunden und Verwandten so gehört, wollen wir natürlich immer sofort sehen wie es ihnen aktuell ergeht und was sie so treiben.
        Wir hoffen, dass hier in Zukunft noch viele weitere Freunde und Verwandte hinzu kommen! 🤗
      </p>
      <table class="el-table hover">
        <tr>
          <th>Projekt</th>
          <th>Kurzbeschreibung</th>
          <th>Projekt der Woche</th>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://powsrv.io/">powsrv.io</a>
          </td>
          <td>POW-as-a-Service-Anbieter für IOTA</td>
           <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-powsrv-io">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-piri">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="http://qubiclite.org/">Qubic Lite</a>
          </td>
          <td>QLite Ecosystem, ein Prototyp von Qubic von microhash</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-qubic-lite">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-iota-address-notifie">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-iotipbot">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-node-red-mam">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://iota.partners/">IOTA.partners</a>
          </td>
          <td>interaktive Anleitung zum Installieren einer IOTA Node</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-iota-partners">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://lidbot.com/">TWO</a>
          </td>
          <td>IoT Müll Management (Umbenannt in 'lidbot')</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-two-iot-waste-management">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-tanglenodes-io">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="http://publiciota.com/">publicIOTA</a>
          </td>
          <td>Unabhängige Gruppe von IOTA Enthusiasten</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-publiciota">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://thetangle.org/">TheTangle.org</a>
          </td>
          <td>Dienst zum Durchsuchen des IOTA-Tangles</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-thetangle-org">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://pact.care/">Untangle Care</a>
          </td>
          <td>IOTA im Gesundheitswesen: Daten gehören dem Patient</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-untangle-care">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-tanglesheep">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-tangleid-biilabs">zum Artikel</a>
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
          <td>Leichtgewichtiger Node für das doch nicht finale IOTA Protokoll</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-iota-controlled-agent">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://iota-talk.com/">IOTA Talk</a>
          </td>
          <td>Forum für IOTA Community</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-iota-talk">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-the-tangle-bay">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-thinktangle">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-iotalink-directory">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://iota-einsteiger-guide.de/"
            >IOTA Einsteiger Guide</a>
          </td>
          <td>Der Einstieg zur großen Vision der IOTA Foundation.</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-iota-einsteiger-guide">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://xdk2mam.io/">XDK2MAM</a>
          </td>
          <td>Open-Source-Code zu schreiben für den Bosch XDK110 Sensor</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-xdk2mam">zum Artikel</a>
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-iota-coordinator-monitor">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.thingslab.technology/"
            >ProductID</a>
          </td>
          <td>Der digitale Zwillinge für Produkte</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-productid">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.helloiota.com/"
            >Hello IOTA</a>
          </td>
          <td>Webseite mit interessanten Artikeln und einem Forum.</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-hello-iota">zum Artikel</a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://tanglebay.org">Tangle Bay</a>
          </td>
          <td>Community Plattform - multilinguales Forum</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-tangle-bay">zum Artikel</a>
          </td>
        </tr>
         <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://easy-passphrase-saver.de/">IOTA Seed Saver</a>
          </td>
          <td>Edelstahlplatte zur Sicherung des Seeds oder Passphrase </td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-iota-seed-saver">zum Artikel</a>
          </td>
        </tr>
        <tr>
        <td>
          <a target="_blank" rel="noopener noreferrer" href="https://www.deposy.org/">Deposy</a>
        </td>
        <td>innovatives Pfandsystem mit IOTA</td>
        <td>
          <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/projekt-der-woche-deposy">zum Artikel</a>
        </td>
      </tr>
      <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.st.com/content/st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-expansion-packages/x-cube-iota1.html">CUBE-IOTA1</a>
          </td>
          <td>IOTA Erweiterung des STM32 Mikrocontroller von STMicroelectronics</td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.einfachiota.de/#/post/pdw-der-cube-iota1-von-stmicroelectronics">zum Artikel</a>
          </td>
        </tr>
      </table>
      <div class="divider"></div>
      <p>
        Kennst auch du ein Projekt, dass für die IOTA Community interessant ist und von uns erklärt werden soll? Dann komm doch einfach mal zu uns auf den Discord Server vorbei
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discordapp.com/invite/2FP9uHx"
        >https://discordapp.com/invite/2FP9uHx</a> und melde dich bei huhn#8246! Danke!
      </p>
    </div>
  </div>
</template>

<script>
import { composeAPI } from "@iota/core";
const converter = require("@iota/converter");
import VueQrcode from "@chenfengyuan/vue-qrcode";

const iota = composeAPI({
  provider: "https://nutzdoch.einfachiota.de"
});

export default {
  data() {
    return {
      address:
        "VO9H9GFNRTOLPUHM9MACFWSUFLNLDYCTKIPXCYLTNNNDMURPUIXNVBYQMRKOJDEYM9UDESGXBIWASIDRBFOBHCJGZD",
      transactions: [],
      balances: 0
    };
  },
  components: { VueQrcode },
  methods: {
    getMessage(trytes) {
      return converter.trytesToAscii(trytes + "9");
    },
    async fetchTransactions() {
      try {
        let txs = await iota.findTransactionObjects({
          addresses: [
            "VO9H9GFNRTOLPUHM9MACFWSUFLNLDYCTKIPXCYLTNNNDMURPUIXNVBYQMRKOJDEYM9UDESGXBIWASIDRBFOBHCJGZD"
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

  .address {
    text-align: center;
    p {
      word-break: break-word;
    }
  }
  a {
    color: var(--primary);
    &:hover {
      color: var(--primary--darken);
    }
  }
}
</style>
