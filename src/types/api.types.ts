

// ============================================
// 1. COMMON API TYPES
// ============================================

export interface ApiRequestOptions {
  signal?: AbortSignal;
}

// ============================================
// 2. OUR PROJECT API
// ============================================

/**
 * Single project object
 */
export interface Project {
  id: number;
  image: string;
  title: string;
  tags: string;
  projectType: string;
  description: string;
  longdesc: string;
}

/**
 * Complete Our Project API response
 */
export interface ProjectsResponse {
  code: number;
  message: string;
  data: Project[];
}
