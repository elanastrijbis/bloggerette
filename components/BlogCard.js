import React from 'react';
import styles from '../styles/BlogCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, coverPhoto, slug, author, datePublished }) {
  return (
    <div className={styles.card}>
      <Link href={'/posts/' + slug}>
        <div className={styles.imgContainer}>
          <Image src={coverPhoto.url} alt="coverphoto" width={600} height={200} unoptimized />
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <Image src={author.avatar.url} alt="Avatar author" width={250} height={250} unoptimized />
            <h3>{author.name}</h3>
          </div>
          <div className={styles.date}>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
