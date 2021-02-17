import { DataContainer } from "./DataContainer"

type MinLat = number
type MinLong = number
type MaxLat = number
type MaxLong = number
export type BoundingBox = [MinLat, MinLong, MaxLat, MaxLong]

export interface StatusFieldChoice {
	label: string
	value: string
	color: string
}

export interface StatusField {
	type: string
	label: string
	key: string
	data_name: string
	default_value: string
	enabled: boolean
	read_only: boolean
	hidden: boolean
	description: string
	choices: StatusFieldChoice[]
	required: boolean
	disabled: boolean
	default_previous_value: boolean
}

export interface Element {
	temporary_place_holder: string
	// TODO: Define props of Element
}

export interface Form {
	name: string
	description?: string | null
	version?: number | null
	bounding_box?: BoundingBox | null
	record_title_key: string
	title_field_keys?: string[] | null
	status_field?: StatusField | null
	auto_assign?: boolean | null
	hidden_on_dashboard?: boolean | null
	record_count?: number | null
	geometry_types?: ["Point"] | [] | null
	geometry_required?: boolean | null
	script?: string | null
	projects_enabled?: boolean | null
	assignment_enabled?: boolean | null
	id?: string | null
	created_at?: string | null
	updated_at?: string | null
	image?: string | null
	image_thumbnail?: string | null
	image_small?: string | null
	image_large?: string | null
	elements: Element[]
}

export interface FormContainer extends DataContainer<Form> {
	objects: Form[]
}

export interface ShallowForm {
	// TODO: Further define props of ShallowForm
	id?: string | null
}

export interface ShallowFormContainer extends DataContainer<ShallowForm> {
	objects: ShallowForm[]
}
