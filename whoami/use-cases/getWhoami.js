export default function makeGetWhoami(makeWhoamiEntity) {
    return function getWhoami({ ipaddress, language, software }) {
        const whoami = makeWhoamiEntity({ ipaddress, language, software })

        return {
            ipaddress: whoami.getIpaddress(),
            language: whoami.getLanguage(),
            software: whoami.getSoftware()
        }
    }
}