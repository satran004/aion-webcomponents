/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AionBlocks {
    'duration': number;
    'gqlUrl': string;
    'limit': number;
  }
  interface AionBlocksAttributes extends StencilHTMLAttributes {
    'duration'?: number;
    'gqlUrl'?: string;
    'limit'?: number;
  }

  interface AionPay {
    'gqlUrl': string;
    'to': string;
  }
  interface AionPayAttributes extends StencilHTMLAttributes {
    'gqlUrl'?: string;
    'to'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AionBlocks': Components.AionBlocks;
    'AionPay': Components.AionPay;
  }

  interface StencilIntrinsicElements {
    'aion-blocks': Components.AionBlocksAttributes;
    'aion-pay': Components.AionPayAttributes;
  }


  interface HTMLAionBlocksElement extends Components.AionBlocks, HTMLStencilElement {}
  var HTMLAionBlocksElement: {
    prototype: HTMLAionBlocksElement;
    new (): HTMLAionBlocksElement;
  };

  interface HTMLAionPayElement extends Components.AionPay, HTMLStencilElement {}
  var HTMLAionPayElement: {
    prototype: HTMLAionPayElement;
    new (): HTMLAionPayElement;
  };

  interface HTMLElementTagNameMap {
    'aion-blocks': HTMLAionBlocksElement
    'aion-pay': HTMLAionPayElement
  }

  interface ElementTagNameMap {
    'aion-blocks': HTMLAionBlocksElement;
    'aion-pay': HTMLAionPayElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}