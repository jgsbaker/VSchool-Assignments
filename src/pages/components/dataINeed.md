Authorization 

curl -X 'GET' \
  'https://api.soundcloud.com/connect?client_id=sleepless_dead_music&redirect_uri=https%3A%2F%2Fsoundcloud.com%2Fjack_gypsy_p&response_type=code&state=sleepless_dead_songs' \
  -H 'accept: */*'

Request URL
https://api.soundcloud.com/connect?client_id=sleepless_dead_music&redirect_uri=https%3A%2F%2Fsoundcloud.com%2Fjack_gypsy_p&response_type=code&state=sleepless_dead_songs


trackPlayback
, 
        {
            collection: {
                "$ref": "#/components/examples/Track/value"
            },
            next_href: "https://api.soundcloud.com/collection?page_size=10&cursor=1234567"
        })
curl -X 'GET' \
  'https://api.soundcloud.com/me/tracks?limit=5&linked_partitioning=true' \
  -H 'accept: application/json; charset=utf-8' \
  -H 'Authorization: OAuth jack_gypsy_p'

  {
    {
      "collection": {
        "$ref": "#/components/examples/Track/value"
      },
      "next_href": "https://api.soundcloud.com/collection?page_size=10&cursor=1234567"
    }
  }
  likeTrack
  Request URL
https://api.soundcloud.com/likes/tracks/1015448728
curl -X 'POST' \
  'https://api.soundcloud.com/likes/tracks/1015448728' \
  -H 'accept: application/json; charset=utf-8' \
  -H 'Authorization: OAuth jack_gypsy_p' \
  -d ''
  {
    "collection": {
      "$ref": "#/components/examples/Track/value"
    },
    "next_href": "https://api.soundcloud.com/collection?page_size=10&cursor=1234567"
  }

  follow
  curl -X 'PUT' \
  'https://api.soundcloud.com/me/followings/948745750' \
  -H 'accept: application/json; charset=utf-8' \
  -H 'Authorization: OAuth jack_gypsy_p'
  https://api.soundcloud.com/me/followings/948745750

  Comment
  curl -X 'POST' \
  'https://api.soundcloud.com/tracks/308946187/comments' \
  -H 'accept: application/json; charset=utf-8' \
  -H 'Authorization: OAuth jack_gypsy_p' \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{
  "comment": {
    "body": "test comment",
    "timestamp": "string"
  }
}'
https://api.soundcloud.com/tracks/308946187/comments

{
    "body": "comment body",
    "created_at": "2007/09/11 15:40:24 +0000",
    "id": 1234,
    "kind": "comment",
    "timestamp": 4960,
    "track_id": 123456,
    "uri": "https://api.soundcloud.com/comments/1234",
    "user": {
      "id": 12345,
      "kind": "user",
      "permalink": "permalink",
      "username": "user name",
      "last_modified": "2017/04/10 14:48:03 +0000",
      "uri": "https://api.soundcloud.com/users/12345",
      "permalink_url": "https://soundcloud.com/permalink",
      "avatar_url": "https://i1.sndcdn.com/avatars-large.jpg",
      "followers_count": 138,
      "followings_count": 172,
      "public_favorites_count": 5,
      "reposts_count": 0
    },
    "user_id": 12345
  }
smartlinks for buying album
https://ditto.fm/the-journey-sleepless-dead
https://ditto.fm/a-list-of-random-things