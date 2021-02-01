var gProjs = [
  {
    id: 'minessweeper',
    name: 'Minessweeper',
    title: 'Better flag all of those mines',
    desc: "A new and improve version of the legendary 90's game",
    publishedAt: 1448693940000,
    imgUrl: `img/projs/minessweeper.png`,
    coverImgUrl: `img/projs/minessweepercover.jpg`,
    gitUrl: 'https://chen-sella.github.io/Sprint1_ChenSella/',
    labels: ['Matrixes', 'keyboard events', 'stopwatch'],
  },
  {
    id: 'booksservice',
    name: 'Books Service',
    title: 'The best platform for a books seller',
    desc: 'The platform you want to manage your sales',
    publishedAt: 1448693940000,
    imgUrl: `img/projs/booksservice.png`,
    coverImgUrl: `img/projs/booksservicecover.jpg`,
    gitUrl: 'https://chen-sella.github.io/books-service/',
    labels: ['CRUDL', 'MVC', 'Local Storage', 'paging'],
  },
  {
    id: 'secretsanta',
    name: 'Secret Santa',
    title: 'Draw your secret santa for this holiday seasons',
    desc: 'Family random draw of secret santa',
    publishedAt: 1448693940000,
    imgUrl: `img/projs/secretsanta.png`,
    coverImgUrl: `img/projs/secretsantacover.jpg`,
    gitUrl: 'https://chen-sella.github.io/Secret-Santa/',
    labels: ['Render', 'Vanila'],
  },
];

function getProjs() {
  return gProjs;
}

function findProj(projId) {
  return gProjs.find(function (proj) {
    return proj.id === projId;
  });
}

function onContactSubmit(ev) {
  ev.preventDefault();

  var email = $('#exampleInputEmail1').val();
  var subject = $('#exampleInputText1').val();
  var body = $('#exampleFormControlTextarea1').val();

  var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  window.open(url);
  $('#exampleInputEmail1').val('');
  $('#exampleInputText1').val('');
  $('#exampleFormControlTextarea1').val('');
}
