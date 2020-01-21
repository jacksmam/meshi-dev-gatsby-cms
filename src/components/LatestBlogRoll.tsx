import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

interface OwnProps {
  data?: any;
  count?: number;
}

const Component = ({ data }: OwnProps) => {
  if (!data) return <></>;
  
  const { edges: posts } = data.allMarkdownRemark;

    return (
      <>
      {posts &&
        posts.map((post: any) => (
          <div>
            {JSON.stringify(post)}
          </div>
        ))
      }
      </>
    );
};

// export const LatestBlogRoll = () => (
//   <StaticQuery
//     query={graphql`
//     `}
//     render={(data: any) => }
//     />
// )

export const LatestBlogRoll = () => (<Component />);