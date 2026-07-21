# Task 3 — Infrastructure as Code (IaC) with Terraform + LocalStack

## Goal
Use Terraform to provision an S3 bucket, pointed at **LocalStack** (a free local
AWS emulator) instead of real AWS — no cloud account or billing required.

## Prerequisites
- Terraform installed (`terraform -version` should work)
- Python + `pip install localstack awscli-local`
- Docker Desktop running
- A free LocalStack account + auth token (`localstack auth set-token <token>`)

## Files
| File            | Purpose                                                          |
|-----------------|-------------------------------------------------------------------|
| `provider.tf`   | Configures the AWS provider to point at LocalStack (`localhost:4566`) instead of real AWS |
| `variables.tf`  | Declares input variables (region, bucket name, environment) with defaults |
| `main.tf`       | Defines the `aws_s3_bucket` resource                              |
| `outputs.tf`    | Exposes the bucket name and ARN after apply                       |
| `.gitignore`    | Keeps local state files out of Git                                |

## Commands

```bash
# 1. Start LocalStack first (separate terminal step, done once per session)
localstack start -d
localstack status services      # confirm s3 shows "available"

# 2. Initialize Terraform (downloads the AWS provider plugin)
terraform init

# 3. Preview what will be created
terraform plan

# 4. Actually create the S3 bucket
terraform apply
# type 'yes' when prompted

# 5. Verify the bucket was really created, using the LocalStack-aware AWS CLI
awslocal s3 ls

# 6. Clean up when done
terraform destroy
localstack stop
```

## State Handling

Terraform tracks everything it creates in a **state file** (`terraform.tfstate`),
stored locally in this project folder.

- The state file maps each resource in your `.tf` files to its real identifier
  (here, the actual bucket that now exists inside LocalStack).
- Every `plan` or `apply` compares your `.tf` config against this state file to
  figure out what's new, changed, or needs to be destroyed.
- The state file is never edited by hand — Terraform manages it automatically.
- It can contain sensitive data, so it's excluded from Git via `.gitignore`.
- For a solo/local task like this, local state is fine. In a team or production
  setup, state is normally stored **remotely** (e.g., an S3 bucket + DynamoDB
  lock table, or Terraform Cloud) so multiple people can collaborate without
  overwriting each other's state file.

## Variables

Rather than hardcoding values like the bucket name or region directly into
`main.tf`, they're declared in `variables.tf` with sensible defaults. Benefits:

- The same `main.tf` can create a bucket with a different name just by
  overriding one variable — no code changes needed.
- Variables can be overridden three ways:
  ```bash
  # 1. Command-line flag
  terraform apply -var="bucket_name=my-other-bucket"

  # 2. A .tfvars file (create terraform.tfvars — it's gitignored)
  echo 'bucket_name = "my-other-bucket"' > terraform.tfvars
  terraform apply

  # 3. Environment variable
  $env:TF_VAR_bucket_name="my-other-bucket"
  terraform apply
  ```

## Why LocalStack instead of real AWS?
The task page explicitly allows "localstack or provider of choice." Using
LocalStack means:
- No AWS account, credit card, or billing risk
- Runs entirely on `localhost:4566`, fully disposable
- Terraform code is *nearly identical* to what you'd write for real AWS —
  only the `provider.tf` endpoints block differs

## Deliverables Checklist
- [x] Terraform code in GitHub repo (`provider.tf`, `variables.tf`, `main.tf`, `outputs.tf`)
- [x] README with commands (this file)
- [ ] Screenshot(s): LocalStack running, `terraform plan`, `terraform apply`, and `awslocal s3 ls` showing the bucket
