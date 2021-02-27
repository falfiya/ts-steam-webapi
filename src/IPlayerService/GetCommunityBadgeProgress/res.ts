import {o_response} from "../../shared/o_response";
import {quest} from "./quest";

type res = o_response<{quests: quest[]}>;

export = res;
