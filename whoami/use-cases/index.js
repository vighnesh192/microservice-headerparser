import makeGetWhoami from "./getWhoami.js";
import makeWhoamiEntity from "../whoami/index.js";

const getWhoami = makeGetWhoami(makeWhoamiEntity);

export default getWhoami;