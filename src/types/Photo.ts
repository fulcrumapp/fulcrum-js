import { DataContainer } from "./DataContainer"

export interface ExifData {
	image_width?: number | null
	image_length?: number | null
	document_name?: string | null
	image_description?: string | null
	make?: string | null
	model?: string | null
	x_resolution?: number | null
	y_resolution?: number | null
	resolution_unit?: number | null
	software?: string | null
	date_time?: string | null
	artist?: string | null
	ycb_cr_positioning?: number | null
	exposure_time?: number | null
	f_number?: number | null
	exposure_program?: number | null
	iso_speed_ratings?: number | null
	date_time_original?: string | null
	date_time_digitized?: string | null
	shutter_speed_value?: number | null
	aperture_value?: number | null
	brightness_value?: number | null
	exposure_bias_value?: number | null
	max_aperture_value?: number | null
	metering_mode?: number | null
	flash?: number | null
	focal_length?: 5.4
	subsec_time?: string | null
	subsec_time_original?: string | null
	subsec_time_digitized?: string | null
	color_space?: number | null
	pixel_x_dimension?: number | null
	pixel_y_dimension?: number | null
	sensing_method?: number | null
	scene_type?: string | null
	exposure_mode?: number | null
	white_balance?: number | null
	focal_length_in_35mm_film?: number | null
	scene_capture_type?: number | null
	gps_latitude_ref?: string | null
	gps_latitude?: number | null
	gps_longitude_ref?: string | null
	gps_longitude?: number | null
	gps_altitude_ref?: string | null
	gps_altitude?: number | null
	gps_time_stamp?: [number, number, number]
	gps_dop?: number | null
	gps_date_stamp?: string | null
	gps_h_positioning_error?: number | null
}

export interface PhotoMetadata {
	created_by?: string | null
	created_by_id?: string | null
	updated_by?: string | null
	updated_by_id?: string | null
	thumbnail?: string | null
	large?: string | null
	original?: string | null
	access_key: string
	created_at?: string | null
	updated_at?: string | null
	uploaded?: boolean | null
	stored?: boolean | null
	processed?: boolean | null
	deleted_at?: string | null
	record_id?: string | null
	form_id?: string | null
	file_size?: number | null
	content_type?: string | null
	latitude?: number | null
	longitude?: number | null
	url?: string | null
	exif?: ExifData | null
}

export interface Photo {
	access_key: string
	created_at?: string | null
	updated_at?: string | null
	uploaded?: boolean | null
	stored?: boolean | null
	processed?: boolean | null
	deleted_at?: string | null
	record_id?: string | null
	form_id?: string | null
	file_size?: number | null
	content_type?: string | null
	latitude?: number | null
	longitude?: number | null
	url?: string | null
}

export interface PhotoContainer extends DataContainer<Photo> {
	objects: Photo[]
}
