const asyncHendler = (requestHendler) => {
  (req, res, next) => {
    Promise.resolve(requestHendler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHendler;
// const asyncHendler = (fn) =>async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

// HOC Higher order fucntion - o function jo kisi fucntion ko as parametter bhi use kar sakte he or return bhi kar sate as variable
