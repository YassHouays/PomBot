import './index.scss';
/** Class for say */

class HelloWorld {
  /**
   * @constructor
   * @param {String} param
   */
  constructor(param = 'Hello world') {
    this.param = param;
  }

  /**
   * @param {String} param
   */
  speak(param = this.param) {
    const el = document.querySelector('#app');
    const elH1 = document.createElement('h1');
    const elH2 = document.createElement('h2');

    elH1.textContent = param;
    elH2.textContent = param;
    el.appendChild(elH1);
    el.appendChild(elH2);
  }
}

const helloWorld = new HelloWorld();
helloWorld.speak();
helloWorld.speak('Bonjour le monde');
