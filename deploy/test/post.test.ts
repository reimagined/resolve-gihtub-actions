import { mocked } from 'ts-jest/utils'
import { execSync } from 'child_process'
import * as core from '@actions/core'
import { post } from '../src/post'

jest.mock('child_process')
jest.mock('@actions/core')

const mExec = mocked(execSync)
const mCoreGetState = mocked(core.getState)

let jobState: { [key: string]: string }

beforeEach(() => {
  jobState = {
    deployment_id: 'deployment-id',
  }

  mCoreGetState.mockImplementation((name) => jobState[name])
})

test('invoke cloud application deletion', async () => {
  await post()

  expect(mExec).toHaveBeenCalled()
  expect(mExec.mock.calls[0][0]).toMatchInlineSnapshot(
    `"yarn --silent resolve-cloud remove deployment-id --no-wait"`
  )
})

test('tolerate to script execution errors', async () => {
  mExec.mockImplementationOnce(() => {
    throw Error('script error')
  })

  await post()
})
