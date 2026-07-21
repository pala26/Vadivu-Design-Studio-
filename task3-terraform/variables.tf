variable "aws_region" {
  description = "AWS region to use (LocalStack accepts any valid region name)"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Name of the S3 bucket to create"
  type        = string
  default     = "my-devops-intern-bucket"
}

variable "environment" {
  description = "Environment tag applied to resources"
  type        = string
  default     = "dev"
}
