import { DataContainer } from "./DataContainer"

/**
 * Record Photo Field
 */
export interface Photo {
	caption?: string | null
	photo_id: string
}

/**
 * Record ChoiceList Field
 */
export interface ChoiceList {
	other_values: string[]
	choice_values: string[]
}

export interface LocationAttributes {
	latitude: number
	longitude: number
	altitude: number
	horizontal_accuracy: number
}

export interface FormValue {
	temporary_place_holder: string
	// TODO: Define props of FormValue
}

export interface Record {
	status?: string | null
	version?: number | null
	id?: string | null
	created_at?: string | null
	updated_at?: string | null
	client_created_at?: string | null
	client_updated_at?: string | null
	created_by?: string | null
	created_by_id?: string | null
	updated_by?: string | null
	updated_by_id?: string | null
	created_location?: LocationAttributes | null
	updated_location?: LocationAttributes | null
	created_duration?: number | null
	updated_duration?: number | null
	edited_duration?: number | null
	form_id: string
	project_id?: string | null
	changeset_id?: string | null
	assigned_to?: string | null
	assigned_to_id?: string | null
	form_values: FormValue
	latitude: number
	longitude: number
	altitude?: number | null
	speed?: number | null
	course?: number | null
	horizontal_accuracy?: number | null
	vertical_accuracy?: number | null
}

export interface RecordContainer extends DataContainer<Record> {
	objects: Record[]
}
