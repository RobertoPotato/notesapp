const URI = "http://192.168.100.3:8000";

export default {
  async fetchnotes() {
    try {
      let response = await fetch(URI + "/api/notes");
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  }
};
