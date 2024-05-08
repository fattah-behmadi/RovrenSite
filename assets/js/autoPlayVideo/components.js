import { WindowSingleton } from './singletons.js';

class AnimationSvg extends HTMLElement {

  // mouseLeaveHandler = (event) => {
  //   this.children[0].removeEventListener('mouseleave', this.mouseLeaveHandler);
  //   this.svg.svgatorPlayer.pause();
  // };
  //
  // mouseEnterHandler = () => {
  //   this.children[0].addEventListener('mouseleave', this.mouseLeaveHandler);
  //   this.svg.svgatorPlayer.play();
  // };

  windowScrollHandler = (_, size) => {
    const wrapperSize = this.children[0].getBoundingClientRect();
    const center = size.height/2;

    const shouldStart = (wrapperSize.y + wrapperSize.height >= center && wrapperSize.y <= center);

    const img = this.querySelector('img');
    if (img.alt === 'Validation Error') {
      console.log(`center ${center}`);
    }
    if (shouldStart && this.svg.svgatorPlayer.state === 'paused') {
      this.svg.svgatorPlayer.play();
    } else if (!shouldStart && this.svg.svgatorPlayer.state !== 'paused') {
      this.svg.svgatorPlayer.pause();
    }

  };

  loadHandler = (event) => {
    this.svg = event.target.contentDocument.querySelector('svg');
    WindowSingleton.registerScroll(this.windowScrollHandler);
    // this.children[0].addEventListener('mouseenter', this.mouseEnterHandler);
    this.svg.svgatorPlayer.pause();
  };

  connectedCallback () {
    const obj = this.querySelector('object');
    obj.addEventListener('load', this.loadHandler);
  }

  disconnectedCallback () {
    const obj = this.querySelector('object');
    const svg = obj.contentDocument.querySelector('svg');

    obj.removeEventListener('load', this.loadHandler);
    svg.removeEventListener('mouseenter', this.loadHandler);
  }
}

customElements.define('animation-svg', AnimationSvg);
