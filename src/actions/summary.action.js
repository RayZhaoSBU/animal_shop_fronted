import {appConstant} from "../constants/constant";

export const saveSummary=(newSummary)=>{
    return {
        type:appConstant.SAVE_SUMMARY,
        payload: newSummary
    }
}
