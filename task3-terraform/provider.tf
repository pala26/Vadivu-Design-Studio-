terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region

  # Fake credentials — LocalStack doesn't check these, but the AWS
  # provider requires *something* to be set or it will error out.
  access_key = "test"
  secret_key = "test"

  # Skip all the validation steps that normally hit real AWS
  s3_use_path_style           = true
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  # Point every AWS service endpoint at LocalStack running on localhost:4566
  endpoints {
    s3 = "http://localhost:4566"
  }
}
