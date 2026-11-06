/* Tutorialul pentru lideri și administratori. */
window.TUT = {
  aplicatie: '../',
  alt: { url: './', text: '← Tutorialul pentru membri' },
  final: 'Emaus · o platformă a Bisericii Betel Constanța © 2026 · aplicatia.emaus@gmail.com',
  capitole: [
    { id: 'roluri', titlu: 'Roluri și limite', slides: [
      { titlu: 'Cine ce poate face', text: ['Administrarea e împărțită pe roluri. Niciun rol nu poate citi jurnalele, rugăciunile private sau conversațiile private ale membrilor: serverul nu are astfel de rute.'],
        carduri: [
          { titlu: 'Liderul de grup', pasi: ['Aprobă cererile de intrare în grup.', 'Publică anunțuri și activități pentru grup.', 'Recomandă viitori mentori din grupul lui.'] },
          { titlu: 'Administratorul comunității', pasi: ['Confirmă conturile noi și gestionează membrii.', 'Completează calendarul caietului (predica, versetul, meditația).', 'Publică materiale, activități și grupuri.'] },
          { titlu: 'Pastorul (titularul)', pasi: ['Numește și retrage administratorii comunității.', 'Numește coordonatorii mentorării.'] },
          { titlu: 'Coordonatorul mentorării', pasi: ['Formează perechile și aprobă mentorii.', 'Vede cine cu cine e, dar nu citește conversațiile; răspunde la sesizări.'] }
        ] }
    ] },
    { id: 'utilizatori', titlu: 'Utilizatori', slides: [
      { img: 'adm-1', titlu: 'Lista utilizatorilor', text: ['Administrare → Utilizatori: toți membrii comunității, cu filtre pentru ce cere atenție.'],
        note: ['Filele administrării: utilizatori, comunitate, grupuri, cântări, calendar, activități, rugăciune, bibliotecă, SMS, mesaje raportate, setări.', 'Filtrele: neconfirmați, cereri de statut, „Vor să fie contactați” pentru ucenicie și altele.'],
        sfaturi: ['Vezi doar datele contului; jurnalele și rugăciunile membrilor rămân private.'] },
      { img: 'adm-2', titlu: 'Fișa unei persoane', text: ['Apasă pe o persoană: statutul, rolul, starea în comunitate și acțiunile posibile.'],
        sfaturi: ['„Confirmă contul” pentru cei noi; „Am luat legătura” după ce ai vorbit cu cineva care a cerut contact pentru ucenicie.', 'Resetarea parolei generează o parolă temporară; persoana o schimbă la prima intrare.'] }
    ] },
    { id: 'calendar-caiet', titlu: 'Calendarul caietului', slides: [
      { img: 'adm-3', titlu: 'O zi din caiet', text: ['Administrare → Calendar: tipul zilei, predica, versetul (automat din YouVersion sau ales) și meditația opțională.'],
        sfaturi: ['Tipul zilei stabilește întrebările pe care le vede membrul. Răspunsurile deja scrise nu se șterg.', 'Meditația apare doar în zilele în care o completezi.'] }
    ] },
    { id: 'grupuri-admin', titlu: 'Grupuri și departamente', slides: [
      { img: 'adm-4', titlu: 'Grupurile bisericii', text: ['Creezi grupuri de casă și departamente, numești liderii și vezi grupurile fără lider.'],
        sfaturi: ['Grupurile private de familie nu sunt accesibile administratorilor: apare doar numărul lor.'] }
    ] },
    { id: 'mentorare-admin', titlu: 'Mentorare: coordonatorii', slides: [
      { titlu: 'Panoul coordonatorului', text: ['Coordonatorii îi numește pastorul sau un administrator al aplicației, din Mentorare → „Coordonatorii programului”, după email.'],
        carduri: [{ titlu: 'Ce face coordonatorul', pasi: ['Vede ucenicii care așteaptă și mentorii potriviți (același gen, aceeași grupă de vârstă, fără legături de familie sau de grup).', 'Formează perechea; fiecare îl vede pe celălalt doar după un nume biblic.', 'Aprobă mentorii după module, acord și recomandare.', 'Răspunde la „Ceva nu e în regulă” și „Am nevoie de sfat”; vede doar mesajele atașate.'] }] }
    ] }
  ]
};
