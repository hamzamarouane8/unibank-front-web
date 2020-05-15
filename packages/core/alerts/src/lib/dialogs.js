import swal from 'sweetalert';
import get from 'lodash.get'
import Promise from 'bluebird'

export default {
  confirm: (title, text, props) => new Promise((resolve) => {
    swal({
      title,
      text,
      icon: get(props, 'danger') ? "warning" : null,
      buttons: get(props, 'buttons') || ["Non, annuler!", "Oui, continuer"],
      dangerMode: get(props, 'danger') || false,
    }).then((value) => {
      if (value) {
        resolve()
      }
    })
  })
}
