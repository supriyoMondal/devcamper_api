//@desc  Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

//@desc  Get single bootcamps
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show bootcamp" });
};

//@desc  Create new bootcamps
//@route POST /api/v1/bootcamps
//@access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create bootcamp" });
};

//@desc  Update bootcamps
//@route PUT /api/v1/bootcamps/:id
//@access Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update bootcamp" });
};

//@desc  Delete bootcamps
//@route DELETE /api/v1/bootcamps
//@access Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "delete bootcamp" });
};
