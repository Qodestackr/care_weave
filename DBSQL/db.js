function FindPosts() {
  const posts = prisma.post.findMany({
    where: {
      published: true,
    },
    include: { author: true }, // includes an author object...
  });

  res.json(posts);
}
