import getWhoamiController from "./get-whoami-controller.js"
import getWhoami from "../use-cases/index.js";

const whoamiController = getWhoamiController(getWhoami)

export default whoamiController;