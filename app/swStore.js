/* eslint-disable no-console */
export const SW_DISPATCH = 'SW/DISPATCH';

export default function serviceWorkerStore({ dispatch }) {

  navigator.serviceWorker.addEventListener('message', ev => {

    try {
      const { data } = ev;
      const state = typeof data === 'object' ? data : JSON.parse(data);
      // console.log('serviceWorkerStore state :', state);

      if (state.type === SW_DISPATCH) {
        dispatch(state);
      }
    } catch (err) {
      // console.error('Error Service Worker store :', err);
      // Just ignore it's not related to store.
    }
  }, false);

}
