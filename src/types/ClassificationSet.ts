import { DataContainer } from "./DataContainer"

export interface ClassificationSetItem {
	label: string
	value?: string | null
	child_classifications?: ClassificationSetItem[]
}

export interface ClassificationSet {
	name: string
	description?: string | null
	version?: number | null
	id?: string | null
	created_at?: string | null
	updated_at?: string | null
	items: ClassificationSetItem[]
}

export interface ClassificationSetContainer extends DataContainer<ClassificationSet> {
	objects: ClassificationSet[]
}
