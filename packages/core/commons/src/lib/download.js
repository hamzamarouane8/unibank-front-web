import { saveAs } from 'file-saver';


export default {
  openDialog: (url, name) => {
    saveAs(url, name);
  },
};
