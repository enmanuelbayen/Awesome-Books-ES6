import { DateTime } from "../node_modules/luxon/src/luxon.js";

const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('date').innerHTML = now;

