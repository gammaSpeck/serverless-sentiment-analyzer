import { log } from '@libs/logger'

// This is to ensure that while testing, we don't fill the console with logs
jest.spyOn(log, 'info').mockImplementation(jest.fn())
jest.spyOn(log, 'error').mockImplementation(jest.fn())
jest.spyOn(log, 'warn').mockImplementation(jest.fn())
