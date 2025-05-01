# React Context API Example

Esercizio per comprendere l'utilizzo della React Context API in un'applicazione React. Questo README è stato scritto interamente con GitHub Copilot.

## Traccia dell'esercizio: Consegna

Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.

1. Partiamo col definire la lista dei post all’interno di `App.jsx`.
2. Se non lo abbiamo già fatto in precedenza, creiamo un componente `PostsPage.jsx` che conterrà al suo interno un titolo e un componente `PostsList.jsx` che mostra la lista di tutti i nostri post.
3. Creiamo un file per definire il nostro Context ed esportiamolo.
4. Importiamo il `Provider` in `App.jsx` e wrappiamoci la nostra applicazione.
5. Facciamo in modo che il componente `PostsList.jsx` recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.

### Struttura dell’App

```
App.jsx > PostsPage.jsx > PostsList.jsx > PostCard.jsx
```
