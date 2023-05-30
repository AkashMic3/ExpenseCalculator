import * as types from './types';


export function showFlashMessage(message:string) {
    return {
      type: types.FLASH_MESSAGE_SHOW,
      message
    };
  }


export function hideFlashMessage() {
    return {
      type: types.FLASH_MESSAGE_HIDE,
    };
  }