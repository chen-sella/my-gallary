function onInit() {
  console.log('init');
  renderPortfolios();
}

function renderPortfolios() {
  var projs = onGetProjs();
  console.log(projs);
  var strHTML = projs
    .map(function (proj) {
      console.log(proj);
      return ` <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x" onclick="renderModal('${proj.id}')"></i>
        </div>
        </div>
        <img class="img-fluid" src="${proj.imgUrl}" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.name}</p>
        </div>
        </div>`;
    })
    .join('');
  $('#portfolio .row').html(strHTML);
}

function renderModal(projId) {
  var proj = onFindProj(projId);
  console.log(proj);
  var strHTML = ` <h2>${proj.name}</h2>
                <h1>${proj.title}</h1>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="${proj.imgUrl}" alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                      blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                      cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                    <li>Date: ${proj.publishedAt}</li>
                    <li>Client: Coding Academy</li>
                    <li>Category: Illustration</li>
                </ul>
                <a href="${proj.gitUrl}" target="_blank">
                  <i class="fa fa-github d-block mb-4"></i>
                </a>
                <button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fa fa-times"></i> Close Project</button>`;
   
    $('.modal-body').html(strHTML);
}

function onGetProjs() {
  return getProjs();
}

function onFindProj(projId){
    return findProj(projId);
}