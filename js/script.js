/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1 - al click su una thumb, visualizzare in grande l'immagine corrispondente
2 - applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3 - quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
*/

//imposto vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            slides : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
        
        //indice impostato alla prima immagine del carosello
        activeIndex: 0,
        //metto true la funzione di autoplay
        isAutoplayOn: true,
        //inizializzo l'intervallo
        autoplayInterval: null,

        }
    },

    methods: {

        //funzione per avanzare nel carosello con operatore ternario se è l'ultima viene riportata a 0, altrimenti incrementa di uno
        nextSlide() {
            this.activeIndex = this.activeIndex === this.slides.length - 1 ? 0 : this.activeIndex + 1;
        },
        //funzione per tornare indietro nel carosello con operatore ternario se è la prima viene riportata all'ultima, altrimenti decrementa di uno
        prevSlide() {
            this.activeIndex = this.activeIndex === 0 ? this.slides.length - 1 : this.activeIndex - 1;
        },
        //funzione per portare l'immagine del carosello allo stesso indice di quello cliccato sulle thumbnail
        setActiveIndex(index) {
            this.activeIndex = index;
        },
        //funzione per far partire l'autoplay che farà avanzare il carosello ogni 3 secondi
        startAutoplay() {
            this.autoplayInterval = setInterval(this.nextSlide, 3000);
            this.isAutoplayOn = true;
        },
        //funzione per fermare l'autoplay
          stopAutoplay() {
            clearInterval(this.autoplayInterval);
            this.isAutoplayOn = false;
        },

      },
      //per eseguire azioni che richiedono l'accesso al DOM o per inizializzare lo stato.
      mounted() {
        //faccio partire l'autoplay
        this.startAutoplay();
      }
}

//collego vue all'id nell'html
).mount('#app');