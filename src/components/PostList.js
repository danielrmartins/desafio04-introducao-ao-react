import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Bojack Horseman",
          avatar: "https://pm1.narvii.com/6865/4994659a5df1209f58ea4f55abf25702bad7bf09r1-384-384v2_128.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, festa na minha casa hoje, birita por minha conta!!",
        comments: [
          {
            id: 2,
            author: {
              name: "Mr Peanutbutter",
              avatar: "https://66.media.tumblr.com/avatar_b053fa0963c7_128.pnj"
            },
            content: "Tô chegando!"
          },
          {
            id: 5,
            author: {
              name: "Diane Nguyen",
              avatar: "https://uproxx.com/wp-content/uploads/2018/01/bojack-grid-uproxx.jpg?quality=100"
            },
            content: "Vou pensar e vejo se vou..."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Todd Chavez",
          avatar: "https://scontent.fpoa13-1.fna.fbcdn.net/v/t1.0-9/15941261_608662372650718_7055218167965258039_n.jpg?_nc_cat=107&_nc_oc=AQkFb55biriyQBaiBOJls64sMiprJNi0qgzNsgTsiCm37u2dOTXpaw_dgA6S2DNmFpk&_nc_ht=scontent.fpoa13-1.fna&oh=abb85b87c4e63165be6eb41aeb08290d&oe=5E55F0BB"
        },
        date: "01 Jun 2019",
        content: "Tô com umas ideias muito loucas galera!!!!",
        comments: [
          {
            id: 4,
            author: {
              name: "Princess Carolyne",
              avatar: "https://i.redd.it/urkgsf7uzd621.jpg"
            },
            content: "Lá vem mais uma ideia doida né?!"
          }
        ]
      },

    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;