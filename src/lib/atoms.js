import { atom } from "jotai";
import { investingData } from "../data";

export const companyNameAtorm = atom(investingData[0].name);