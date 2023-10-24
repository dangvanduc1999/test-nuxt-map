import {END_POINT} from "~/utils/constant/app-endpoint";

export const getCategory = async (categoryId: number, productAttr: string, cursor: string | null) => {
	return await $fetch(END_POINT.category, {
		query: {
			categoryId,
			productAttr,
			cursor,
		}
	})
}
