//
const handleServerError = (res, error, message = 'Internal server error') => {
  console.error(error); // Log the actual error for debugging
  res.status(500).json({ message });
};

const handleNotFoundError = (res, message = 'Resource not found') => {
  res.status(404).json({ message });
};

module.exports = {
  handleServerError,
  handleNotFoundError,
};