import type { ServiceName } from './mockConfig';

/** Thrown by a service when the call fails. `message` is safe to show in the error state. */
export class ServiceError extends Error {
  constructor(
    message: string,
    public readonly service: ServiceName,
  ) {
    super(message);
    this.name = 'ServiceError';
  }
}

/** True when an unknown error is a ServiceError (use in catch blocks). */
export function isServiceError(error: unknown): error is ServiceError {
  return error instanceof ServiceError;
}
