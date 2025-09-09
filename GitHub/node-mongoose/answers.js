1. db.users.insertOne(
    {name: "Erin Garrard", email: "erin@gmail.com"}
    )

2. db.movies.find(
    {directors: "Christopher Nolan"}
    )

3. db.movies.find(
    {genres: "Action"},
     {title: 1, year: 1, genres: 1})
     .sort({year: -1}
     )

4. db.movies.find(
  { "imdb.rating": { $gte: 8 } },
  { title: 1, "imdb.rating": 1, _id: 0 }
)

5. db.movies.find({
  $and: [
    { cast: { $all: ["Tom Hanks", "Tim Allen"] } },
    { cast: { $size: 2 } }
  ]
}, {
  title: 1,
  cast: 1,
  _id: 0
})

6. db.movies.find({
  genres: "Comedy",
  directors: ["Steven Spielberg"]
}, {
  title: 1,
  directors: 1,
  genres: 1,
  year: 1,
  _id: 0
})

7. db.movies.updateOne(
  { title: "The Matrix" },
  { $set: { available_on: "Sflix" } }
)

8. db.movies.updateOne(
  { title: "The Matrix" },
  { $set: { available_on: "Sflix" } }
)

9. db.movies.updateMany(
  { year: 1997 },
  { $addToSet: { genres: "Gen Z" } }
)

10. db.movies.updateMany(
  { "imdb.rating": { $lt: 5 } },
  { $inc: { "imdb.rating": 1 } }
)

11. db.comments.deleteOne({ _id: ObjectId("5a9427648b0beebeb69579e7") })

12. db.comments.deleteMany({ movie_id: ObjectId("573a139bf29313caabcf3d23") })

13. db.movies.deleteMany({genres: null})

14. db.movies.aggregate([
  {
    $group: {
      _id: "$year",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }  // 1 = ascending (earliest to latest)
  }
])

15. db.movies.aggregate([
    {
    $group: {
      _id: "$directors",
      average_rating: { $avg: "$imdb.rating" },
      movie_count: { $sum: 1 }
    }
  },
  {
    $sort: { average_rating: -1 }  // -1 = descending (highest to lowest)
  }
])