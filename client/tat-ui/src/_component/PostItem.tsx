import React from 'react';
import { useQuery } from 'urql';
import { desc, imageCarousel, postItem, postItemWraper, uploadDate } from './PostItem.css';

interface Props {
  ID: number;
}

const PostItem = ({ ID }: Props) => {
  const [result, reexecuteQuery] = useQuery({
    query: `
      query {
        post(id: ${ID}) {
          id
          title
          content
          upload_date
        }
      }
    `,
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oops...{error.message}</p>;

  const { title, content, upload_date } = data.post;
  const dateString = upload_date !== null ? new Date(+upload_date).toDateString() : 'null';

  return (
    <div className={postItemWraper()}>
      <div className={postItem()}>
        <div className={imageCarousel()}>Image Carousel</div>
        <div className={desc()}>
          <h2>{title}</h2>
          <p>{content}</p>
          <p className={uploadDate()}>{dateString}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
