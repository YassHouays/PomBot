class Rendering {
  constructor(param) {
    this.param = param;
  }

  firstLaunch(param = this.param) {
    const element = document.querySelector('#app');
    const elH1 = document.createElement('h1');
    elH1.textContent = param;
    element.innerHTML = '<div class="container"> <div class="row d-flex justify-content-center"> <a href="" class="col-8 text-center app-start"> <div class="aps-layer rounded-circle"> <div class="aps-layer aps-layer-s rounded-circle"> <div class="aps-layer aps-layer-t rounded-circle"> <span>Ouvrir UsainBot</span> </div> </div> </div> </a> </div> </div>';
  }

  botInterface(param = this.param) {
    const element = document.querySelector('#app');
    const elH1 = document.createElement('h1');
    elH1.textContent = param;
    element.innerHTML = 'Bot Interface';
  }
}

module.exports = Rendering;
