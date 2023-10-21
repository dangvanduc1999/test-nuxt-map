import {SubMenuAbouts, SubMenuMaps} from "~/utils/constant/app-constants";
import _ from "lodash"

export const mappingSubMenu = (key: string) => {
	const mappingObject = {
		"1": SubMenuMaps,
		"4": SubMenuAbouts
	}
	return _.get(mappingObject, key, [])
}
export const mappingSubMenuTitle = (key: string):string => {
	const mappingObject = {
		"1": "Maps",
		"4": "About us"
	}
	return _.get(mappingObject, key, "")
}
