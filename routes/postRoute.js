const router = require("express").Router();
const Post = require("../models/postModal");

// POST
router.post("/", async (req, res) => {
  const { title, markdown } = req.body;

  if (!title) {
    return res.status(400).json({ msg: "Your title is missing" });
  } else if (!markdown) {
    return res.status(400).json({ msg: "Your body is missing" });
  }

  try {
    const newPost = new Post({
      title,
      markdown,
    });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET 1
router.get("/post/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE 1
router.post("/:id", async (req, res) => {
  const { title, markdown } = req.body;

  if (!title) {
    return res.status(400).json({ msg: "Your title is missing" });
  } else if (!markdown) {
    return res.status(400).json({ msg: "Your body is missing" });
  }

  try {
    const nowPost = await Post.findById(req.params.id);
    nowPost.title = title;
    nowPost.markdown = markdown;
    const savedPost = await nowPost.save();
    res.json(savedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE 1 post
router.delete("/:id", async (req, res) => {
  try {
    const delPost = await Post.findByIdAndDelete(req.params.id);
    res.json(delPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(422).json({ error: "Please add your email" });
  }
  if (!password) {
    return res.status(422).json({ error: "Please enter your password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
        } else {
          return res.status(422).json({ error: "Invalid Email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
