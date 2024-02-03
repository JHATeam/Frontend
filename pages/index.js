import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Date from '../components/date';
import React, { useState } from 'react';
import TextInput from '../components/textInput';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [paragraph, setParagraph] = useState('');
  const [displayedParagraph, setDisplayedParagraph] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayedParagraph(paragraph);
  };

  const handleClear = () => {
    setParagraph('');
    setDisplayedParagraph('');
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>We are developing an AI tool to assist people to do job hunting. If you would like to contribute to our project, please contact us at email address: jha986@gmail.com</p>
        <div className={utilStyles.jobDescriptionOptimizerSection}>
          <h2 className={utilStyles.headingXl}>Job description optimizer</h2>
          <form onSubmit={handleSubmit}>
            <label >
              <h2 className={utilStyles.headingLg}>Please Enter your job description:</h2>
              <textarea
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
                rows={10}
                cols={100}
                className={utilStyles.paragraphtTextarea}
              />
            </label>
            <br />
            <div className={utilStyles.buttonContainer}>
            <button type="submit" className={utilStyles.submitButton}>
              <FontAwesomeIcon icon={faArrowRight} />
              Submit
            </button>
            <button type="button" className={utilStyles.clearButton} onClick={handleClear}>
            <FontAwesomeIcon icon={faTimes} />
            Clear
          </button>
            </div>
          
          </form>
          {displayedParagraph && (<div >
            <h2 className={utilStyles.headingLg}>Job Description Summary:</h2>
            <p className={utilStyles.displayedParagraph}>{displayedParagraph}</p>
          </div>)}
        </div>
      </section>

      {/* Page navigation code:*/}
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}