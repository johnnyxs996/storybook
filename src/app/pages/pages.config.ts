import { PageConfiguration } from "./pages.model";

export const PagesConfigurations: PageConfiguration[] = [
  {
    headerImage: 'assets/header-image.jpeg',
    title: 'Congratulazioni!',
    subtitle: 'In questo giorno speciale, volevamo farti degli auguri altrettanto speciali',
    subSubtitle: 'Con un pizzico di nerdaggine 🤓',
    content: [
      {
        type: 'text',
        content: `Cara Roby,
        è finalmente arrivato il giorno tanto atteso, quel giorno speciale che abbiamo aspettato e sognato con ansia, quel giorno per cui hai lavorato duramente.
        "Solo" sei anni fa sembrava impossibile tutto questo, eppure con costanza, determinazione, capacità, sei stata capace di superare sfide, notti insonni ed esami al limite del possibile.
        Io, Giovanni, ricordo ogni singolo momento di questo tuo percorso, dall'identificativo del test di ammissione segnato su pelle con una graffetta, alla tensione dei primi esami.
        Io, Jole, sono entrata nella tua vita nel mezzo di questo percorso, ma ho fin da subito capito di che pasta eri fatta e sapevo che ci saresti riuscita alla grande!`
      },
      {
        type: 'image',
        content: [
          'assets/image-1.jpg',
          'assets/image-2.jpg',
          'assets/image-3.webp',
          'assets/image-4.jpg',
          'assets/image-5.jpeg',
        ]
      },
      {
        type: 'text',
        content: `Adesso puoi aprire la prima busta, e scoprire il primo pezzo del puzzle.`
      }
    ]
  },
  {
    headerImage: 'assets/header-image.jpeg',
    title: 'Titolo 2',
    subtitle: 'Sottotitolo',
    content: [
      {
        type: 'text',
        content: `Sappiamo bene quanti sacrifici hai fatto durante questo percorso, e tra questi vi è quello del non essere mai riuscita ad organizzare la vacanza o il weekend dei tuoi sogni, vuoi per non gravare sui tuoi genitori, vuoi per le sessioni nel bel mezzo della stagione ☀️.`
      },
      {
        type: 'image',
        content: [
          'assets/image-1.jpg',
          'assets/image-3.webp',
          'assets/image-5.jpeg',
        ]
      },
      {
        type: 'text',
        content: `Insieme abbiamo trascorso molto tempo e ci siamo divertiti, ma è arrivato il momento di fare il next step.
        Con questa card potrai andare ovunque vorrai, con chiunque vorrai, ma adesso è il momento di aprire la seconda busta.`
      }
    ]
  },
  {
    headerImage: 'assets/header-image.jpeg',
    title: 'Titolo 3',
    subtitle: 'Sottotitolo',
    content: [
      {
        type: 'text',
        content: `Adesso puoi preparare le valigie!`
      },
      {
        type: 'text',
        content: `Che sia in Europa, in Italia o a Melito di Napoli, con questo budget riesci adesso ad avere più possibilità di scegliere l'allogio che desideri (soprattutto al giorno d'oggi 📈).`
      },
      {
        type: 'image',
        content: [
          'assets/image-1.jpg',
          'assets/image-3.webp',
        ]
      },
      {
        type: 'text',
        content: `NON SO COSA METTERE QUI, puoi aprire la terza ed ultima busta.`
      }
    ]
  },
  {
    headerImage: 'assets/header-image.jpeg',
    title: 'Titolo 4',
    subtitle: 'Sottotitolo',
    content: [
      {
        type: 'text',
        content: `Questi ti serviranno per un eventuale volo, o anche solo per spenderli durante la tua avventura.`
      },
      {
        type: 'text',
        content: `Questo pensiero è il minimo che possiamo farti, e pensiamo possa essere la scelta giusta dopo anni di duro lavoro, impegno e fatica.
        Siamo certi che continuerai a brillare e a raggiungere tutti i tuoi obiettivi, come sei solita fare.
        Siamo orgogliosi di te e di tutto ciò che hai realizzato: sei un esempio ed hai insegnato tanto un po' a tutti noi.`
      },
      {
        type: 'image',
        content: [
          'assets/image-1.jpg',
          'assets/image-3.webp',
        ]
      },
      {
        type: 'text',
        content: `Congratulazioni dottoressa Frate! Questo è il tuo giorno, goditelo appieno.
        
        Con affetto,
        Johnny e Jole ❤️`
      }
    ]
  }
];
