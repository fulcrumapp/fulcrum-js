//No idea if this is complete, so we'll use string[] instead of ExportFormats[] for context.plan.export_formats at the moment
type ExportFormats = "csv" | "xlsx" | "filegdb" | "shp" | "spatialite" | "sqlite" | "postgres" | "kml" | "geojson";

export interface UserContextRole {
  can_assign_records: Nullable<boolean>;
  can_change_project: Nullable<boolean>;
  can_change_status: Nullable<boolean>;
  can_create_records: Nullable<boolean>;
  can_delete_records: Nullable<boolean>;
  can_export_records: Nullable<boolean>;
  can_import_records: Nullable<boolean>;
  can_manage_apps: Nullable<boolean>;
  can_manage_choice_lists: Nullable<boolean>;
  can_manage_classification_sets: Nullable<boolean>;
  can_manage_layers: Nullable<boolean>;
  can_manage_members: Nullable<boolean>;
  can_manage_projects: Nullable<boolean>;
  can_manage_roles: Nullable<boolean>;
  can_manage_subscription: Nullable<boolean>;
  can_run_reports: Nullable<boolean>;
  can_update_organization: Nullable<boolean>;
  can_update_records: Nullable<boolean>;
  created_at: Nullable<string>;
  id: Nullable<string>;
  is_default: Nullable<boolean>;
  is_system: Nullable<boolean>;
  name: Nullable<string>;
  updated_at: Nullable<string>;
}

export interface UserContextPlan {
  activity_feed_enabled: Nullable<boolean>;
  audio_enabled: Nullable<boolean>;
  base_price_in_cents: Nullable<number>;
  created_at: Nullable<string>;
  data_shares_enabled: Nullable<boolean>;
  data_shares_limit: any; //TODO: Fulcrum docs don't indicate what type this is
  description: Nullable<string>;
  export_changesets_enabled: Nullable<boolean>;
  export_formats: Nullable<string[]>;
  export_full_history_enabled: Nullable<boolean>;
  export_photos: Nullable<boolean>;
  export_reports_enabled: Nullable<boolean>;
  id: Nullable<string>;
  included_users: Nullable<number>;
  maps_data_quota: any; //TODO: Fulcrum docs don't indicate what type this is
  media_data_quota: Nullable<number>;
  media_data_usage_includes_photos: Nullable<boolean>;
  media_data_usage_includes_signatures: Nullable<boolean>;
  media_data_usage_includes_videos: Nullable<boolean>;
  name: Nullable<string>;
  price_in_cents: Nullable<number>;
  public_color: Nullable<string>;
  public_slug: any; //TODO: Fulcrum docs don't indicate what type this is
  record_merging_enabled: Nullable<boolean>;
  repeatables_enabled: Nullable<boolean>;
  slug: Nullable<string>;
  updated_at: Nullable<string>;
  versioning_enabled: Nullable<boolean>;
  videos_enabled: Nullable<boolean>;
  view_history_enabled: Nullable<boolean>;
  webhooks_enabled: Nullable<boolean>;
}

export interface UserContext {
  ///@deprecated
  api_token?: string;

  id: Nullable<string>;
  name: Nullable<string>;
  plan: UserContextPlan;
  role: UserContextRole;
  type: Nullable<string>;
}

/** Return data structure for User API */
export default interface User {
  access?: {
    allowed?: Nullable<boolean>;
  };
  contexts: UserContext[];
  email?: Nullable<string>;
  first_name?: Nullable<string>;
  id?: Nullable<string>;
  image_large?: Nullable<string>;
  image_small?: Nullable<string>;
  last_name?: Nullable<string>;
  phone_number?: Nullable<string>;
}
