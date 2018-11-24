import UserAccounts from "./UserAccounts";

const postOwners = {
  philzcoffee: UserAccounts.find(user => user.username === "philzcoffee"),
  fortnite: UserAccounts.find(user => user.username === "fortnite"),
  playhearthstone: UserAccounts.find(
    user => user.username === "playhearthstone"
  )
};

const UserPosts = [
  {
    username: postOwners.philzcoffee.username,
    thumbnailUrl: postOwners.philzcoffee.thumbnailUrl,
    imageUrl:
      "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    likes: 400,
    timestamp: "July 17th 2017, 12:42:40 pm",
    comments: [
      {
        username: "philzcoffee",
        timestamp: "July 17th 2017, 12:42:40 pm",
        text:
          "We've got more than just delicious coffees to offer at our shops!"
      },
      {
        username: "biancasaurus",
        timestamp: "July 17th 2017, 1:00:32 pm",
        text: "Looks delicious!"
      },
      {
        username: "martinseludo",
        timestamp: "July 17th 2017, 1:02:45 pm",
        text: "Can't wait to try it!"
      }
    ]
  },
  {
    username: postOwners.fortnite.username,
    thumbnailUrl: postOwners.fortnite.thumbnailUrl,
    imageUrl:
      "https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg",
    likes: 4307,
    timestamp: "July 15th 2017, 03:12:09 pm",
    comments: [
      {
        username: "twitch",
        timestamp: "July 15th 2017, 03:12:21 pm",
        text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
      },
      {
        username: "michaelmarzetta",
        timestamp: "July 15th 2017, 03:14:09 pm",
        text: "Omg that match was crazy"
      },
      {
        username: "themexican_leprechaun",
        timestamp: "July 15th 2017, 03:32:52 pm",
        text: "What a setup"
      },
      {
        username: "dennis_futbol",
        timestamp: "July 15th 2017, 04:23:44 pm",
        text: "It that injustice"
      },
      {
        username: "dennis_futbol",
        timestamp: "July 15th 2017, 04:23:55 pm",
        text: "Is"
      }
    ]
  },
  {
    username: postOwners.playhearthstone.username,
    thumbnailUrl: postOwners.playhearthstone.thumbnailUrl,
    imageUrl:
      "https://tk-assets.lambdaschool.com/43bf01f9-319c-469d-8cf5-0120fe1007f1_yosemite.jpg",
    likes: 5306,
    timestamp: "July 14th 2017, 10:04:08 am",
    comments: [
      {
        username: "playhearthstone",
        timestamp: "July 14th 2017, 10:04:08 am",
        text: "Love this shot!"
      },
      {
        username: "awaywetravel",
        timestamp: "July 15th 2017, 11:52:13 am",
        text: "Yosemite is my most favorite place in the universe"
      },
      {
        username: "awesomebt28",
        timestamp: "July 15th 2017, 12:16:31 pm",
        text: "I like how Half Dome looks so old and useless"
      }
    ]
  }
];

export default UserPosts;
