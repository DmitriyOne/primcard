variable "linked_project" {
  type        = string
  description = "Supabase project reference ID"
}

variable "git_branch" {
  type        = string
  default     = null
  description = "Git branch name for preview database branches"
}

variable "preview_site_url" {
  type        = string
  default     = "http://localhost:3001"
  description = "Base URL for preview environment. Used for auth redirects and email links."
}
