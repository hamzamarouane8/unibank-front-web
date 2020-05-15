import {client} from "./_config";

export default class FaqService  {

  //TODO waiting for ahmed to finish the api of countries
  loadListCountries = () => client.content.faqs(code).then((data) => data.data)
}
