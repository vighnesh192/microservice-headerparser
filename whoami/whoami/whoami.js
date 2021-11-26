export default function BuildMakeWhoamiEntity() {
    return function makeWhoamiEntity({ ipaddress, language, software }) {
        console.log('ip'+typeof(ipaddress), 'lang'+language,'soft'+ software)
        if(!ipaddress || !language || !software) {
            throw new Error("Denying knowledge");
        }

        return Object.freeze({
            getIpaddress: () => ipaddress,
            getLanguage: () => language,
            getSoftware: () => software
        })
    }
}