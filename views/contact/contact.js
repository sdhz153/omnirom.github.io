import { siteURL, container } from '../../js/const.js'

class ContactView {

  constructor() {
  }

  async displayView() {
    try {
      let pageContent = await axios
        .get(siteURL + 'views/contact/contact.html');
      let post = await pageContent.data;
      container.innerHTML = post
    } catch (error) {
      console.log("display contact view error: " + error);
    }
  }
}

export default ContactView = new ContactView();