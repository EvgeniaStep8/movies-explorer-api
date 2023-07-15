class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ForbiddenRequestError';
    this.statusCode = 403;
  }
}

export default ForbiddenError;
