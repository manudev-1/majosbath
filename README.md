# Majo's Bath

## Descrizione
Progetto ITALIANO che permette di recensire i bagni del ITI Ettore Majorana di Grugliasco

## Collabora

### Requisiti
I requisiti per poter collaborare sono:
- git
- npm
- nodemon global

### Clona la repository
Apri un terminale ed esegui:
```bash
git clone https://github.com/manudev-1/majosbath.git
```

### Installa i pacchetti Server e Client
```bash
C:\**\majosbath> cd server
C:\**\majosbath\server> npm i
...
...
C:\**\majosbath\server> cd ..\client
C:\**\majosbath\client> npm i
...
...
```

### Avvia Server e Client offline
Avrai bisogno di 2 terminali aperti, sul primo:
```bash
C:\**\majosbath\server> npm install -g nodemon
...
...
C:\**\majosbath\server> nodemon ./**/app.js
```
Sul secondo:
```bash
C:\**\majosbath\client> npm run dev 
```

## Rami
Descrizione dei rami per creare Pull Request(**PR**) in maniera consona

- `main`: Ramo principale, eseguire PR dirette solo per urgenze, prefisso del branch correzioni `hotfix-*`
- `develop`: Ramo di sviluppo per il versioning, prefisso del branch `feat-*`
- `*-personal`: Ramo personale per test

## Auto correzioni PR
**@sourcery-ai** si occuperà di dare consigli nelle PR che creerete, seguite i consigli se pensate siano utili e reagite al commento di sourcery-ai con 👍 o 👎 a seconda se avete o meno seguito il consiglio.
![image](https://github.com/user-attachments/assets/dd3c49d5-46fe-4290-a9f1-f19a7bea9408)
