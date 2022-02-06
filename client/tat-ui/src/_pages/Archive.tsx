import React from 'react';
import { useQuery } from 'urql';

import Grid from '../_component/Grid';
import PostItem from '../_component/PostItem';

const PostsQuery = `
  query {
    posts {
      id
    }
  }
`;

const Archive = () => {
  const [result, reexecuteQuery] = useQuery({
    query: PostsQuery,
    requestPolicy: 'cache-and-network',
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oops...{error.message}</p>;

  return (
    <div>
      <Grid>
        {data.posts.map(({ id }: { id: number }) => (
          <PostItem ID={id} />
        ))}
      </Grid>
    </div>
  );
};

export default Archive;
