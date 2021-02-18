import DataContainer from "./DataContainer";

export interface ExifData {
  aperture_value?: Nullable<number>;
  artist?: Nullable<string>;
  brightness_value?: Nullable<number>;
  color_space?: Nullable<number>;
  date_time_digitized?: Nullable<string>;
  date_time_original?: Nullable<string>;
  date_time?: Nullable<string>;
  document_name?: Nullable<string>;
  exposure_bias_value?: Nullable<number>;
  exposure_mode?: Nullable<number>;
  exposure_program?: Nullable<number>;
  exposure_time?: Nullable<number>;
  f_number?: Nullable<number>;
  flash?: Nullable<number>;
  focal_length_in_35mm_film?: Nullable<number>;
  focal_length?: Nullable<number>;
  gps_altitude_ref?: Nullable<string>;
  gps_altitude?: Nullable<number>;
  gps_date_stamp?: Nullable<string>;
  gps_dop?: Nullable<number>;
  gps_h_positioning_error?: Nullable<number>;
  gps_latitude_ref?: Nullable<string>;
  gps_latitude?: Nullable<number>;
  gps_longitude_ref?: Nullable<string>;
  gps_longitude?: Nullable<number>;
  gps_time_stamp?: [number, number, number];
  image_description?: Nullable<string>;
  image_length?: Nullable<number>;
  image_width?: Nullable<number>;
  iso_speed_ratings?: Nullable<number>;
  make?: Nullable<string>;
  max_aperture_value?: Nullable<number>;
  metering_mode?: Nullable<number>;
  model?: Nullable<string>;
  pixel_x_dimension?: Nullable<number>;
  pixel_y_dimension?: Nullable<number>;
  resolution_unit?: Nullable<number>;
  scene_capture_type?: Nullable<number>;
  scene_type?: Nullable<string>;
  sensing_method?: Nullable<number>;
  shutter_speed_value?: Nullable<number>;
  software?: Nullable<string>;
  subsec_time_digitized?: Nullable<string>;
  subsec_time_original?: Nullable<string>;
  subsec_time?: Nullable<string>;
  white_balance?: Nullable<number>;
  x_resolution?: Nullable<number>;
  y_resolution?: Nullable<number>;
  ycb_cr_positioning?: Nullable<number>;
}

export interface PhotoMetadata {
  access_key: string;
  content_type?: Nullable<string>;
  created_at?: Nullable<string>;
  created_by_id?: Nullable<string>;
  created_by?: Nullable<string>;
  deleted_at?: Nullable<string>;
  exif?: Nullable<ExifData>;
  file_size?: Nullable<number>;
  form_id?: Nullable<string>;
  large?: Nullable<string>;
  latitude?: Nullable<number>;
  longitude?: Nullable<number>;
  original?: Nullable<string>;
  processed?: Nullable<boolean>;
  record_id?: Nullable<string>;
  stored?: Nullable<boolean>;
  thumbnail?: Nullable<string>;
  updated_at?: Nullable<string>;
  updated_by_id?: Nullable<string>;
  updated_by?: Nullable<string>;
  uploaded?: Nullable<boolean>;
  url?: Nullable<string>;
}

export interface Photo {
  access_key: string;
  content_type?: Nullable<string>;
  created_at?: Nullable<string>;
  deleted_at?: Nullable<string>;
  file_size?: Nullable<number>;
  form_id?: Nullable<string>;
  latitude?: Nullable<number>;
  longitude?: Nullable<number>;
  processed?: Nullable<boolean>;
  record_id?: Nullable<string>;
  stored?: Nullable<boolean>;
  updated_at?: Nullable<string>;
  uploaded?: Nullable<boolean>;
  url?: Nullable<string>;
}

export interface PhotoContainer extends DataContainer<Photo> {
  objects: Photo[];
}
