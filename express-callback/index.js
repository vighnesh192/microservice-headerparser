export default function makeExpressCallback(controller) {
    return (req, res) => {
        console.log('IP:-'+ req.connection.remoteAddress)
        const httpRequest = {
            ipaddress: req.connection.remoteAddress.slice(7),
            language: req.get('Accept-Language'),
            software: req.get('User-Agent')
        }

        const result = controller(httpRequest);

        res.json(result);
    }
}