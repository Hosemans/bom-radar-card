import { LovelaceCardConfig } from 'custom-card-helpers';

// TODO Add your configuration elements here for type-checking
export interface BomRadarCardConfig extends LovelaceCardConfig {
  show_radar_coverage: boolean;
  show_radar_location: boolean;
  show_range: boolean;
  show_marker: boolean;
  show_scale: boolean;
  show_playback: boolean;
  show_recenter: boolean;
  static_map: boolean;
  show_zoom: boolean;
  square_map: boolean;
  radar_location_fill_colour: undefined;
  radar_location_line_colour: undefined;
  radar_location_radius: undefined;
  extra_labels: undefined;
  frame_count: undefined;
  frame_delay: undefined;
  marker_longitude: undefined;
  marker_latitude: undefined;
  center_longitude: undefined;
  center_latitude: undefined;
  zoom_level: undefined;
  type: string;
  name?: string;
  map_style?: string;
  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;
  show_header_toggle?: boolean;
}
