export function errorHandler(err, req, res, next) {
  console.error("Error:", err.stack);

  let status = err.status || 500;
  let message = err.message || "Internal Server Error";

  if (err.code === "P2002") {
    status = 400;
    message = "A superhero with this nickname already exists.";
  }

  res.status(status).json({
    status: "error",
    message,
  });
}
