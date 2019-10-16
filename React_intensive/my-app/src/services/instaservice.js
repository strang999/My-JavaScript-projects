export dafault class InstaService {
    constructor () {

    }
    getResource = (url) => {
      const res =   fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recieved ${res.status}`)
        }
        return res.json();  // возвращаеться промис, получаем данные с сервера в формате json
    }
}
28.44
