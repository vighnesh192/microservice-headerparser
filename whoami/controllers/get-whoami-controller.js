export default function getWhoamiController(getWhoami) {
    return function whoamiController(httpRequest) {
        const whoami = getWhoami({
            ipaddress: httpRequest.ipaddress, 
            language: httpRequest.language, 
            software: httpRequest.software
        });

        return whoami;
    }
}