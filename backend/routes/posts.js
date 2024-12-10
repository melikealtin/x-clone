const { postService } = require("../services");
const { postSchema } = require("../validations/post-validation");
const validateSchema = require("../middlewares/validation-middleware");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await postService.load();
    res.render("posts", { posts });
  } catch (err) {
    next(err);
  }
});

router.get("/:postId", async (req, res, next) => {
  try {
    const post = await postService.find(req.params.postId);
    if (!post) return res.status(404).send("cannot find post");

    res.send(post);
  } catch (err) {
    next(err);
  }
});

router.delete("/:postId", async (req, res, next) => {
  try {
    await postService.removeBy("_id", req.params.postId);
    res.send("post deleted successfully");
  } catch (err) {
    next(err);
  }
});

router.post(
  "/:postId/reply",
  validateSchema(postSchema),
  async (req, res, next) => {
    try {
      const { postId } = req.params;
      const { content, author } = req.body;

      if (!content || !author) {
        return res
          .status(400)
          .json({ message: "content and author are required" });
      }

      const reply = await postService.reply(postId, content, author);

      res.status(201).json({
        message: "reply successfully created",
        reply,
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
