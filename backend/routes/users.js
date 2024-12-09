const { userService } = require("../services");
const { userSchema } = require("../validations/user-validation");
const { postSchema } = require("../validations/post-validation");
const validateSchema = require("../middlewares/validation-middleware");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await userService.load();
    res.render("users", { users });
  } catch (err) {
    next(err);
  }
});

router.post("/", validateSchema(userSchema), async (req, res, next) => {
  try {
    const user = await userService.insert(req.body);
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
});

router.delete("/:userId", async (req, res, next) => {
  try {
    await userService.removeBy("_id", req.params.userId);
    res.send("user deleted successfully");
  } catch (err) {
    next(err);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const user = await userService.find(req.params.userId);
    if (!user) return res.status(404).send("cannot find user");

    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/:userId/posts",
  validateSchema(postSchema),
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { content } = req.body;

      const post = await userService.createPost(userId, content);

      res.status(201).json(post);
    } catch (err) {
      next(err);
    }
  }
);

router.post("/:userId/posts/:postId/like", async (req, res, next) => {
  try {
    const { userId, postId } = req.params;

    const post = await userService.like(userId, postId);
    res.status(200).json({
      message: "post liked successfully",
      post,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/:followerId/follow/:followingId", async (req, res, next) => {
  try {
    const { followerId, followingId } = req.params;

    const result = await userService.follow(followerId, followingId);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/:userId/repost/:originalPostId", async (req, res, next) => {
  try {
    const { userId, originalPostId } = req.params;
    const { content } = req.body;

    const result = await userService.repost(
      userId,
      originalPostId,
      content || ""
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
});

router.patch("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { name } = req.body;

    await userService.update(userId, { name });
    res.send("user updated successfully");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
