const fetchMusic = (query, id) => {//funzione che interroga il server
    const section = document.querySelector(`#${id}`)//seleziona i div con query  selector e ${id}per indicarli per nome

    const row = document.querySelector(`#${id}Section`)
    console.log(row)//stampa i div selezionati attraverso il querySelector
    fetch(//interroga il server..'mi restituisci....+il nome preso dai parametri dell funzione
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
    )
      .then((raw) => {//la promessa restituisce una risposta dal server formato .json
        return raw.json()
      })
      .then((res) => {
        let music = res.data//risposte del server contenente un array di oggetti con info che a noi interessano
        console.log(music)
        section.classList.remove("d-none")//rimuove il d-none classe bootstrap che non fa apparire le sezzioni
        for (let i = 0; i < music.slice(0, 4).length; i++) {//itera i risultati
          const element = music[i]//salva in element i risultati 
          console.log(element)
          row.innerHTML += `<div class='col col-3'> <img class='w-100' src='${element.album.cover_xl}'/> </div>`//inserisci all'interno del div la relativa stringa, che crea il div col col-3 con img che dentro a src inserisce i risultati del server
        }
      })
      .catch((err) => console.log(err))//funzione che restituisce errore se qualcosa va storto
  }
  window.onload = () => {//al caricamento della finestra avvia la funzione con relativi parametri
    fetchMusic("eminem", "eminem")//una per ogni sezzione
    fetchMusic("queen", "queen")
    fetchMusic("metallica", "metallica")
  }