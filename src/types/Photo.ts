import { DataContainer } from "./DataContainer";

export interface ExifData {
  image_width?: Nullable<number>;
  image_length?: Nullable<number>;
  document_name?: Nullable<string>;
  image_description?: Nullable<string>;
  make?: Nullable<string>;
  model?: Nullable<string>;
  x_resolution?: Nullable<number>;
  y_resolution?: Nullable<number>;
  resolution_unit?: Nullable<number>;
  software?: Nullable<string>;
  date_time?: Nullable<string>;
  artist?: Nullable<string>;
  ycb_cr_positioning?: Nullable<number>;
  exposure_time?: Nullable<number>;
  f_number?: Nullable<number>;
  exposure_program?: Nullable<number>;
  iso_speed_ratings?: Nullable<number>;
  date_time_original?: Nullable<string>;
  date_time_digitized?: Nullable<string>;
  shutter_speed_value?: Nullable<number>;
  aperture_value?: Nullable<number>;
  brightness_value?: Nullable<number>;
  exposure_bias_value?: Nullable<number>;
  max_aperture_value?: Nullable<number>;
  metering_mode?: Nullable<number>;
  flash?: Nullable<number>;
  focal_length?: Nullable<number>;
  subsec_time?: Nullable<string>;
  subsec_time_original?: Nullable<string>;
  subsec_time_digitized?: Nullable<string>;
  color_space?: Nullable<number>;
  pixel_x_dimension?: Nullable<number>;
  pixel_y_dimension?: Nullable<number>;
  sensing_method?: Nullable<number>;
  scene_type?: Nullable<string>;
  exposure_mode?: Nullable<number>;
  white_balance?: Nullable<number>;
  focal_length_in_35mm_film?: Nullable<number>;
  scene_capture_type?: Nullable<number>;
  gps_latitude_ref?: Nullable<string>;
  gps_latitude?: Nullable<number>;
  gps_longitude_ref?: Nullable<string>;
  gps_longitude?: Nullable<number>;
  gps_altitude_ref?: Nullable<string>;
  gps_altitude?: Nullable<number>;
  gps_time_stamp?: [number, number, number];
  gps_dop?: Nullable<number>;
  gps_date_stamp?: Nullable<string>;
  gps_h_positioning_error?: Nullable<number>;
}

export interface PhotoMetadata {
  created_by?: Nullable<string>;
  created_by_id?: Nullable<string>;
  updated_by?: Nullable<string>;
  updated_by_id?: Nullable<string>;
  thumbnail?: Nullable<string>;
  large?: Nullable<string>;
  original?: Nullable<string>;
  access_key: string;
  created_at?: Nullable<string>;
  updated_at?: Nullable<string>;
  uploaded?: Nullable<boolean>;
  stored?: Nullable<boolean>;
  processed?: Nullable<boolean>;
  deleted_at?: Nullable<string>;
  record_id?: Nullable<string>;
  form_id?: Nullable<string>;
  file_size?: Nullable<number>;
  content_type?: Nullable<string>;
  latitude?: Nullable<number>;
  longitude?: Nullable<number>;
  url?: Nullable<string>;
  exif?: Nullable<ExifData>;
}

export interface Photo {
  access_key: string;
  created_at?: Nullable<string>;
  updated_at?: Nullable<string>;
  uploaded?: Nullable<boolean>;
  stored?: Nullable<boolean>;
  processed?: Nullable<boolean>;
  deleted_at?: Nullable<string>;
  record_id?: Nullable<string>;
  form_id?: Nullable<string>;
  file_size?: Nullable<number>;
  content_type?: Nullable<string>;
  latitude?: Nullable<number>;
  longitude?: Nullable<number>;
  url?: Nullable<string>;
}

export interface PhotoContainer extends DataContainer<Photo> {
  objects: Photo[];
}
