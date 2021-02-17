import { DataContainer } from "./DataContainer"

export interface Choice {
	label: string
	value?: string | null
}

export interface ChoiceList {
	name: string
	description?: string | null
	version?: number | null
	id?: string | null
	created_at?: string | null
	updated_at?: string | null
	choices: Choice[]
}

export interface ChoiceListContainer extends DataContainer<ChoiceList> {
	objects: ChoiceList[]
}
