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
  message: string | Record<string, string[]>;
}


// enquiry 
// Add these interfaces to your existing src/types/api.types.ts
// Do not replace other types already defined in that file.
export interface EnquiryFormPayload {
  interested_in: "partnership" | "career";
  fullname: string;
  email: string;
  phone: string;
  proposal: string;
  file: File;
  role?: string;
}

export interface EnquiryFormResponse {
  code: number;
  message: string | Record<string, string[]>;
}


// proifle 


export interface Profile {
  id: number;
  name: string;
  email: string;
  phone: string;
  address:string;
  address1:string;
  description: string;
  logo: string;
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
}

export interface ProfileResponse {
  code: number;
  message: string;
  data: Profile;
}
