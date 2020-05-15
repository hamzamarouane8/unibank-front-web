import {client} from './_config'

export default class FaqService {

  loadFaqData = (code) => client.content.faqs(code).then((data) => data.data)

}
