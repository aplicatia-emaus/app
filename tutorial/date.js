/* Tutorialul pentru membri. note[k] explică elementul evidențiat cu numărul k + 1 (vezi slides.js din teste). */
window.TUT = {
  aplicatie: '../',
  alt: { url: 'admin.html', text: 'Pentru lideri și administratori →' },
  final: 'Emaus · o platformă a Bisericii Betel Constanța © 2026 · Întrebări sau sugestii: aplicatia.emaus@gmail.com',
  capitole: [
    { id: 'instalare', titlu: 'Instalează aplicația', slides: [
      { titlu: 'Emaus pe ecranul telefonului', text: ['Emaus se deschide din browser, dar merge cel mai bine instalată pe ecran, ca orice aplicație: pornește mai repede, primești notificări și vezi pe iconiță câte mesaje noi ai.'],
        carduri: [
          { titlu: 'Android (Chrome)', pasi: ['Deschide aplicatia-emaus.github.io/app în Chrome.', 'Apasă meniul ⋮ din dreapta sus.', 'Alege „Instalează aplicația” sau „Adaugă pe ecranul de pornire”.', 'Deschide Emaus de pe ecran și intră în cont.'] },
          { titlu: 'iPhone / iPad (Safari)', pasi: ['Deschide aplicatia-emaus.github.io/app în Safari.', 'Apasă butonul Partajează (pătratul cu săgeata în sus).', 'Alege „Adaugă pe ecranul principal”, apoi „Adaugă”.', 'Deschide Emaus de pe ecran. Notificările le pornești din Profil.'] },
          { titlu: 'Contul', pasi: ['Intri cu invitația primită de la un membru (un link) sau încerci aplicația 24 de ore.', 'Te autentifici o singură dată; aplicația te ține minte pe acel telefon.', 'Ai uitat parola? „Ai uitat parola?” îți trimite un cod pe email.'] }
        ] }
    ] },
    { id: 'acasa', titlu: 'Acasă', slides: [
      { img: 'acasa-1', titlu: 'Pagina de pornire', text: ['Aici începe fiecare zi: un salut, versetul-motto și scurtăturile spre tot ce folosești des.'],
        note: ['Caietul ucenicului: ziua de azi și întrebarea zilei. Apasă ca să scrii.', 'Dacă ești într-o pereche de mentorare, vezi cine a scris ultimul și când, fără conținutul mesajelor.'] },
      { img: 'acasa-2', titlu: 'Pastilele și meniul de jos', text: ['Pastilele sunt grupate pe secțiuni: Ucenicie, Calendar, Resurse și Contul meu. Le poți face mari sau mici din Profil.'],
        note: ['Ucenicie: Caietul, Rugăciunile, Materialele, Grupurile de casă, Mentorarea și Evanghelizarea.', 'Calendar: agenda zilei, sarcinile, cumpărăturile, luna, calendarul comun și progresul tău.', 'Meniul de jos te duce oricând la Acasă, Ucenicie, Calendar, Mesaje și Resurse.'] }
    ] },
    { id: 'caiet', titlu: 'Caietul ucenicului', slides: [
      { img: 'caiet-1', titlu: 'Ziua din caiet', text: ['Caietul urmează anul bisericesc: în fiecare zi, un verset, o meditație și întrebările zilei. Duminica primești fișa predicii.'],
        note: ['Pictogramele de sus te mută între secțiunile Uceniciei. Când derulezi, rămân doar titlurile, ca să ai loc.', 'Bara cu zilele: treci la altă zi cu săgețile sau apăsând pe zi. Punctul arată zilele completate.', 'Versetul zilei; mai jos găsești meditația și devoționalul.'] },
      { img: 'caiet-2', titlu: 'Scrie ce ți-a vorbit Dumnezeu', text: ['Scrie liber. Se salvează singur, chiar și fără semnal (se trimite când revine internetul).'],
        note: ['Câți frați și surori au scris azi în caiet (doar numărul, de la 3 persoane în sus) și ecoul gândului tău de ieri.', 'Întrebarea zilei. Jurnalul tău e privat: nu îl citește nimeni, nici administratorii.'] },
      { img: 'caiet-3', titlu: 'După ce ai scris', text: ['O dată pe zi, după ce ai completat fișa și ieși din câmpul de scris, primești o mulțumire și invitația de a împărtăși.'],
        note: ['Câți au scris azi și seria ta de zile la rând. Fără clasamente: doar ca să știi că nu ești singur.', '„Cu numele meu” sau „Anonim” deschid împărtășirea; „Nu acum” închide. Poți opri mesajul cu „Nu mai arăta”.'] },
      { img: 'caiet-4', titlu: 'Împărtășește un gând', text: ['Se trimite o copie a textului; jurnalul tău rămâne neschimbat. O poți retrage oricând.'],
        note: ['Poți scurta textul, de exemplu la o singură frază.', 'Alegi cui: toată comunitatea sau doar grupurile tale.', 'Bifează „Fără numele meu” ca să apară anonim.'] },
      { img: 'caiet-5', titlu: 'Ce au împărtășit alții', text: ['După ce îți completezi fișa zilei, vezi gândurile și cererile de rugăciune împărtășite de alții în acea zi.'],
        note: ['Răspunde cu „Amin”, „M-a încurajat”, „Mă rog și eu” sau trimite un bilețel de încurajare. Autorul vede câte reacții a primit.'] }
    ] },
    { id: 'rugaciuni', titlu: 'Rugăciuni', slides: [
      { img: 'rug-1', titlu: 'Rugăciunea de azi', text: ['„Azi” adună ghidul de rugăciune al zilei și cererile comunității care așteaptă rugăciunea ta.'],
        note: ['Filele: Azi, Comunitatea (cererile împărtășite) și Lista mea (privată).'],
        sfaturi: ['„Mă rog” îi arată autorului câte persoane se roagă, nu și cine.', 'O cerere împărtășită stă 5 zile în flux, apoi iese singură.'] },
      { img: 'rug-2', titlu: 'Lista mea de rugăciune', text: ['Cererile tale și oamenii pentru care te rogi. Când Dumnezeu răspunde, marchează „Ascultată” și notează cum.'],
        sfaturi: ['Lista e privată. O cerere ajunge la alții doar dacă alegi să o împărtășești, cu numele tău sau anonim.'] }
    ] },
    { id: 'grupuri', titlu: 'Grupuri de casă', slides: [
      { img: 'grup-1', titlu: 'Grupul tău și celelalte grupuri', text: ['Vezi grupul din care faci parte, programul și locurile libere ale celorlalte grupuri.'],
        sfaturi: ['„Grup de familie nou” creează un grup privat pentru familia ta: conversație, calendar comun și liste, doar pentru voi.', 'Te poți înscrie în orice grup; cererea o aprobă liderii lui.'] }
    ] },
    { id: 'mentorare', titlu: 'Mentorare', slides: [
      { img: 'ment-1', titlu: 'Doi câte doi, 8 săptămâni', text: ['Un mentor care ascultă și se roagă cu tine, de același gen și cam de aceeași vârstă. La început vă cunoașteți doar după un nume din Biblie.'],
        note: ['Motto-ul și pe scurt cum funcționează programul.', 'Perechile tale: deschide conversația cu mentorul sau ucenicul.', 'Drumul mentorului: ghidul în 4 module, acordul, recomandarea și aprobarea coordonatorului.'] },
      { img: 'ment-2', titlu: 'Ghidul săptămânii', text: ['În fiecare săptămână primiți o temă, un verset, o întrebare și o rugăciune.'],
        note: ['Răsfoiește săptămânile; cea de acum e marcată.'] },
      { img: 'ment-3', titlu: '„Ne cunoaștem?” și conversația', text: ['Numele adevărate se arată doar dacă amândoi spuneți da. Celălalt nu află ce ai răspuns tu.'],
        note: ['Întrebarea „Ne cunoaștem?” apare după 2 săptămâni.', 'Conversația e doar a voastră: nici administratorii, nici coordonatorii nu o citesc.'],
        sfaturi: ['„Ceva nu e în regulă” ajunge doar la coordonator. Poți încheia oricând, fără explicații.'] }
    ] },
    { id: 'evanghelizare', titlu: 'Evanghelizare', slides: [
      { img: 'evg-1', titlu: 'Cursuri și instrumente', text: ['Cursuri scurte, pe lecții, cu certificat de absolvire, și instrumente pentru a vorbi altora despre Hristos.'],
        sfaturi: ['Progresul se salvează în cont; certificatul îl descarci ca PDF.'] }
    ] },
    { id: 'calendar', titlu: 'Calendar', slides: [
      { img: 'cal-1', titlu: 'Agenda zilei', text: ['Activitățile bisericii apar singure; adaugi și activitățile tale, cu reminder pe telefon.'],
        note: ['Alege ziua.', 'Filele zilei: Agenda, Sarcini și Cumpărături.'],
        sfaturi: ['La activitățile bisericii bifează „Intenționez să particip”, ca organizatorii să știe câți vin.'] },
      { img: 'cal-2', titlu: 'Sarcini', text: ['Sarcinile zilei, cu oră dacă vrei. Ce nu rezolvi rămâne la „Rămase din zilele trecute”.'],
        note: ['Scrie sarcina și apasă +. Ceasul adaugă o oră.', 'La o sarcină poți atașa o listă (bagaje, cumpărături, o rețetă), chiar dintr-un șablon.', 'Listele tale de sarcini; le poți împărtăși cu familia sau cu grupul.'],
        sfaturi: ['Poți propune o sarcină cuiva din conexiunile sau grupurile tale; persoana o acceptă sau spune că nu poate.'] },
      { img: 'cal-3', titlu: 'Cumpărături', text: ['Lista casei, cu categorii, cantități și prețuri. Aplicația învață prețurile din ce ai cumpărat.'],
        note: ['Împărtășește lista: toți cei aleși adaugă și bifează, iar lista se actualizează la câteva secunde.', 'Scrie „2 kg mere”: cantitatea și unitatea se recunosc singure.', 'Câte produse mai ai și cât estimezi că vei plăti.'],
        sfaturi: ['În magazin folosește „Mod magazin”: bife mari, ecranul rămâne aprins.'] },
      { img: 'cal-4', titlu: 'Luna', text: ['Toată luna dintr-o privire: zilele completate în caiet, predicile și activitățile din agendă. Caută în notițele tale cu „Caută în notițe”.'] },
      { img: 'cal-5', titlu: 'Calendarul comun', text: ['Orarul comun al unui grup sau al familiei: fiecare persoană are culoarea ei. Bun ca să găsiți o oră în care sunteți toți liberi.'],
        note: ['Culorile fiecărei persoane.', 'Câte activități și dacă se suprapun.'],
        sfaturi: ['O activitate personală apare aici doar dacă o partajezi cu acel grup.'] },
      { img: 'cal-6', titlu: 'Progresul meu', text: ['Câte zile ai completat, seria de zile la rând și reperele atinse. Fiecare pătrățel e o zi din anul bisericesc.'] }
    ] },
    { id: 'mesaje', titlu: 'Mesaje', slides: [
      { img: 'mesaje-1', titlu: 'Conversațiile tale', text: ['Conversațiile grupurilor și departamentelor din care faci parte, ale familiei și mesajele directe.'],
        sfaturi: ['La „Persoane” găsești membrii și le poți trimite o cerere de conectare.', 'Mesajele directe le vedeți doar voi doi. Un mesaj nepotrivit îl poți raporta.'] }
    ] },
    { id: 'resurse', titlu: 'Resurse', slides: [
      { img: 'res-1', titlu: 'Biblioteca', text: ['Cărți creștine de citit sau de ascultat în aplicație. Progresul se salvează; la final lași un gând.'],
        note: ['Resursele: Biblioteca, Cântări, Radio și Jocuri. Butonul Resurse redeschide ultima folosită.'],
        sfaturi: ['Jocurile biblice au regulile explicate la începutul fiecărui joc.'] },
      { img: 'res-2', titlu: 'Cântări', text: ['Cântările bisericii, cu versuri și acorduri. Caută după număr, titlu sau versuri.'],
        sfaturi: ['„Liste de proiecție”: pregătește lista pentru un eveniment și împărtășește-o cu echipa.'] },
      { img: 'res-3', titlu: 'Radio', text: ['Radio Betel (muzică și predici) și posturile creștine din Constanța. Radioul merge mai departe când navighezi prin aplicație.'],
        sfaturi: ['Când biserica transmite live, aplicația îți arată transmisiunea.'] }
    ] },
    { id: 'profil', titlu: 'Profil și confidențialitate', slides: [
      { img: 'profil-1', titlu: 'Preferințele tale', text: ['Datele tale, tema (luminos sau întunecat), mărimea textului și pictogramele de pe Acasă.'],
        note: ['Pictogramele de pe Acasă: mici (benzi) sau mari (pătrate).', 'Mărimea textului: 5 trepte, aplicate imediat.'] },
      { img: 'profil-2', titlu: 'Despre aplicație', text: ['Emaus e o platformă a Bisericii Betel Constanța. Jurnalul, rugăciunile și agenda ta sunt private.'],
        note: ['Paginile bisericii și adresa pentru întrebări sau sugestii.'],
        sfaturi: ['Nota de confidențialitate spune exact cine vede ce. Din Profil îți poți șterge oricând contul.'] }
    ] }
  ]
};
