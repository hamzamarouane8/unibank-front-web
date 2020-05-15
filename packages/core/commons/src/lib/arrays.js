import keyBy from 'lodash.keyby'

export default {

  keyBy: (array, iteratee) => keyBy(array, iteratee),
  randomKeyBoards: (tab) => {
    for (var j, x, i = tab.length; i; j = parseInt(Math.random() * i), x = tab[--i], tab[i] = tab[j], tab[j] = x) ;
    return tab;
  }

}
