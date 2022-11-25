import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { gql } from '@apollo/client';
import client from '../apollo-client';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          id
          title
          coverPhoto {
            id
            url
          }
          datePublished
          slug
          author {
            id
            name
            avatar {
              url
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              author={post.author}
              coverPhoto={post.coverPhoto}
              datePublished={post.datePublished}
              slug={post.slug}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
