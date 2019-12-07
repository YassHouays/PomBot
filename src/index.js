import './index.scss';
import Cookies from 'js-cookie';


const Rendering = require('./model/Rendering.js');

const rendering = new Rendering();

if (Cookies.get('public_token') === undefined) {
  // console.log('first launch');
  Cookies.set('public_token', 'dc1b9a51', { expires: 7 });
  // console.log(Cookies.get('public_token'));
  rendering.firstLaunch('First Launch');
} else {
  Cookies.remove('public_token');
  // console.log('Bot Interface');
  // console.log(Cookies.get('public_token'));
  rendering.firstLaunch('First Launch');
  // rendering.botInterface('Bot Interface');
}
