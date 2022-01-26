export interface Sets {
  count?: number;
  next?: string;
  previous?: null;
  results: SetResult[];
}

export interface SetResult {
  set_num: string;
  name?: string;
  year?: number;
  theme_id?: number;
  num_parts?: number;
  set_img_url?: string;
  set_url?: string;
  last_modified_dt?: Date;
}
export interface MiniFigs {
  count?: number;
  next?: string;
  previous?: null;
  results: MiniFigResult[];
}

export interface MiniFigResult {
  set_num: string;
  name?: string;
  num_parts?: number;
  set_img_url?: string;
  set_url?: string;
  last_modified_dt?: Date;
}

export interface MinifigDetails {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: Date;
}

export interface SetsDetails {
  set_num: string;
  name: string;
  year?: number;
  theme_id: number;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: Date;
}

export interface ReduxStore {
  sets: {
    data: SetResult[];
    error: boolean;
    loading: boolean;
  };
  minifigs: {
    data: MiniFigResult[];
    error: boolean;
    loading: boolean;
  };
  parts: {
    data: any[];
    error: boolean;
    loading: boolean;
  };
  fav: {
    liked: (SetsDetails | MinifigDetails)[];
  };
}
