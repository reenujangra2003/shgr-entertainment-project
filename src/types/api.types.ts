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
  tags: string[];
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



// team-member 


/**
 * Single Team Member
 */
export interface TeamMember {
  id: number;
  image: string;
  name: string;
  designation: string;
  short_description: string;
  work: string[];
}

/**
 * Complete Team Member API response
 */
export interface TeamMembersResponse {
  code: number;
  message: string;
  data: TeamMember[];
}




// contact us 

/**
 * Contact Form POST API
 * POST /contact-form
 */

export interface ContactFormPayload {
  fullname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  code: number;
  message: string;
}
