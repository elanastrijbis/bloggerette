import React from 'react';
import styles from '../styles/BlogCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, coverPhoto, slug }) {
  return (
    <div className={styles.card}>
      <Link href={'/posts/' + slug}>
        <div className={styles.imgContainer}>
          <Image src={coverPhoto.url} alt="coverphoto" width={250} height={250} unoptimized />
          <h1>{title}</h1>
        </div>
      </Link>
    </div>
  );
}
