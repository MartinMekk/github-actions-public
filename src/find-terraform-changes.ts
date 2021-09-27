import * as core from '@actions/core'
import { findTerraformChanges } from './find-terraform-changes-implementation'

async function run(): Promise<void> {
  try {
    await findTerraformChanges()
  } catch (error: any) {
    core.setFailed(error)
  }
}

void run()
