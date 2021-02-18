export interface UserContext {
  ///@deprecated
  api_token?: string;

  //     name: "John Doe";
  //     id: "5tbk714i-0aia-uwxk-n3i9-e67ivvmt8qyn";
  //     type: "organization";
  //     role: {
  //       name: "Owner";
  //       is_system: true;
  //       is_default: false;
  //       can_manage_subscription: true;
  //       can_update_organization: true;
  //       can_manage_members: true;
  //       can_manage_roles: true;
  //       can_manage_layers: true;
  //       can_manage_apps: true;
  //       can_create_records: true;
  //       can_update_records: true;
  //       can_delete_records: true;
  //       can_manage_projects: true;
  //       can_manage_choice_lists: true;
  //       can_manage_classification_sets: true;
  //       can_change_status: true;
  //       can_change_project: true;
  //       can_assign_records: true;
  //       can_import_records: true;
  //       can_export_records: true;
  //       can_run_reports: true;
  //       id: "qel78mds-4bxx-dmdq-v8p3-tww9w6qwng2p";
  //       created_at: "2013-10-15T17:40:25Z";
  //       updated_at: "2013-10-15T17:40:25Z";
  //     };
  //     plan: {
  //       name: "My Organization";
  //       description: "";
  //       export_formats: ["csv", "xlsx", "filegdb", "shp", "spatialite", "sqlite", "postgres", "kml", "geojson"];
  //       export_photos: false;
  //       maps_data_quota: null;
  //       public_slug: null;
  //       public_color: "";
  //       base_price_in_cents: 0;
  //       price_in_cents: 0;
  //       included_users: 1;
  //       slug: "myorganization";
  //       versioning_enabled: true;
  //       webhooks_enabled: true;
  //       view_history_enabled: true;
  //       repeatables_enabled: true;
  //       export_reports_enabled: true;
  //       export_full_history_enabled: true;
  //       record_merging_enabled: true;
  //       export_changesets_enabled: true;
  //       activity_feed_enabled: true;
  //       data_shares_enabled: true;
  //       data_shares_limit: null;
  //       media_data_quota: 3221225472;
  //       media_data_usage_includes_photos: true;
  //       media_data_usage_includes_signatures: true;
  //       media_data_usage_includes_videos: true;
  //       videos_enabled: true;
  //       audio_enabled: true;
  //       id: "4g5eik8j-h3ic-wmbv-936z-ru7gppdo648p";
  //       created_at: "2014-01-23T16:22:01Z";
  //       updated_at: "2015-04-01T12:56:04Z";
  //     };
}

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
