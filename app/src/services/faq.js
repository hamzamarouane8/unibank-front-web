import {client} from './_config'
import {faqsQustions} from './samples/fags';

const faqsMock = (token , code) => {
  return Promise.resolve(faqsQustions);
};
export default class FaqService {

  loadFaqData = (code) => faqsMock(code).then((data) => data.faqs)

}
