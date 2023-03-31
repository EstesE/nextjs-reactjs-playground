"use client";

import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import Data from '@/data';
import { data } from '@/data';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
      <Box className={styles.main} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ md: 12 }} direction="row">
          <Grid item xs={12}>
            <div className={styles.center}>
              <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
              <div className={styles.thirteen}>
                <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
              </div>
            </div>
          </Grid>

          {data.map((d) => {
            return (
              <Grid item xs={12} sm={4}>
                <Link className={styles.card} href={`/hooks/${d.route}`}>
                  <Item>
                    <h2 className={inter.className}>
                    {d.title} <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                      <code className={styles.code}>{d.title}</code> {d.blurb}
                    </p>
                  </Item>
                </Link>
              </Grid>
            );
          })}

        </Grid>
      </Box>
  )
}
