# REST_api_AlexMamani

## Start mongo service
One of the first things to do is start mongod, in order tu run our mongoDB, with the next line. It will ask your password:

```
sudo systemctl start mongod
```

![MongoDB](https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg)

[<div style="text-align: right">install mongodb on ubuntu</div>](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)
<br>

---

## Start NodeJS server
With the next command line, it will start the Node Server


```
npm start dev
```
[<div style="text-align: right">install NodeJS</div>](https://nodejs.org/en/download/)
<br>

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"/>

---
## Fill Blog Collection (table)
Running the next line, will INSERT the Blog Collection from the database

```
node seeder.js -i
```
  <code style="color: green">
  Number of documents inserted: 4 
  </code>
<br>
<br>

<br>
Running the next line, will SHOW the content of the Blog Collection from the database

```
node seeder.js -s
```
<br>Results:

```javascript
[
  {
    _id: '634eeb9ffcf549502b2a6701',
    title: 'Viaje del mes: la llegada del Otoño',
    author: 'Alex Mamani',
    body: 'Este mes hemos escogido el otoño, nuestra estaciónn favorita. Los colores del otoño siempre marcan un antes del invierno y un después del verano. El color ocre, rojo, amarillo y la caída de las hojas marcan un momento único tanto para la fotografía como para los amantes de los paisajes más espectaculares. Pero también en otras latitudes, la temporada de las auroras boreales.',
    createdAt: '2022-10-18T18:08:31.526Z',
    updatedAt: '2022-10-18T18:10:45.752Z',
    __v: 0
  },
  {
    _id: '634eec65fcf549502b2a6701',
    title: 'Sobre Viaja por libre',
    author: 'Ana',
    body: 'Viaja por libre es unn blog de viajes de tres apasionados de los viajes. Sabemos que viajar a veces tiene su propio proceso, como si ya desde el principio vivieras una aventura. Nuestro objetivo es hacerte más fácil el viajar por España, a destinos exóticos, realizar espectaculares rutas de senderismo o viajes de aventura. Te invitamos a conocer miles de lugares que visitar y a viajar por los 5 continentes. Todo. desde nuestra propia filosofía y forma de vida. Queremos recalcarte que ante todo somos aventureros más que viajeros, y por ello hemos querido trasladar en nuestro blog consejos para viajar y también ofertas para viajar más barato.',
    createdAt: '2022-10-18T18:11:49.380Z',
    updatedAt: '2022-10-18T18:11:49.380Z',
    __v: 0
  },
  {
    _id: '634eeca9fcf549502b2a6701',
    title: 'Lápizz Nómada',
    author: 'Andrea',
    body: 'Bienvenida a Lápiz Nómada, este rinconcito en donde encontrarás toda la info y la inspiraciónn que necesitas para lanzarte a viajar sola. Consejos y experiencias sinceras, contadas con honestidad, para que dejes atrás los miedos y te atrevas a vivir con libertad. Mi propósito es luchar por ser quien realmente somos: mujeres libres, fuertes e independientes que no tienen miedo de viajar desatando su auténtico potencial.',
    createdAt: '2022-10-18T18:12:57.459Z',
    updatedAt: '2022-10-18T18:12:57.459Z',
    __v: 0
  },
  {
    _id: '634eecf7fcf549502b2a6701',
    title: 'Designaholic',
    author: 'Diego',
    body: 'Designaholic es un blog que trata temas actuales y relevantes en el diseño y las disciplinas relacionadas, invitando a los “adictos” al diseño a reflexionar sobre temas recurrentes del día a día y el papel que esta materia juega en ellas.  Además de Diseño Industrial, Designaholic también toca una variedad de disciplinas creativas tales como el diseño gráfico, de experiencias, interactivo, sustentable, arte y arquitectura con un enfoque honesto y hablando directamente con el público.',
    createdAt: '2022-10-18T18:14:15.667Z',
    updatedAt: '2022-10-18T18:14:15.667Z',
    __v: 0
  }
]
```
  <code style="color: yellow">
  Number of document(s):  4 
  </code>
<br>
<br>

---

Running the next line, will SHOW the content of just ONE Document from the Blog Collection from the database, 634eecf7fcf549502b2a6701 is de id from blog

<br/>
node seeder.js -s <del>blog.id</del>

```

node seeder.js -s 634eecf7fcf549502b2a6701

```

```javascript
[
  {
    _id: '634eecf7fcf549502b2a6701',
    title: 'Designaholic',
    author: 'Diego',
    body: 'Designaholic es un blog que trata temas actuales y relevantes en el diseño y las disciplinas relacionadas, invitando a los “adictos” al diseño a reflexionar sobre temas recurrentes del día a día y el papel que esta materia juega en ellas.  Además de Diseño Industrial, Designaholic también toca una variedad de disciplinas creativas tales como el diseño gráfico, de experiencias, interactivo, sustentable, arte y arquitectura con un enfoque honesto y hablando directamente con el público.',
    createdAt: '2022-10-18T18:14:15.667Z',
    updatedAt: '2022-10-18T18:14:15.667Z',
    __v: 0
  }
]
```
<br>

---

Running the next line, will delete ALL the Blog Collection from the database

```
node seeder.js -d
```

  <code style="color: red">
  4 document(s) deleted  
  </code>
<br>


<br>

---

<br>



# Checklist
## Check if you have done the necessary, thanks. Have a good day

<br>

### Activities
- [x] Start mongo service
- [x] Start NodeJS server
- [x] Fill Blog Collection (table)
