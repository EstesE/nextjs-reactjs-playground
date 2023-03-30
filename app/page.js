import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>

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

      <div className={styles.grid}>

        <Link className={styles.card} href={'/use-callback'}>
          <h2 className={inter.className}>
            useCallback <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useCallback</code> is a React Hook that lets you cache a function definition between re-renders.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-context'}>
          <h2 className={inter.className}>
            useContext <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useContext</code> is a React Hook that lets you read and subscribe to context from your component.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-debug-value'}>
          <h2 className={inter.className}>
            useDebugValue <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useDebugValue</code> is a React Hook that lets you add a label to a custom Hook in React DevTools.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-deferred-value'}>
          <h2 className={inter.className}>
            useDeferredValue <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useDeferredValue</code> is a React Hook that lets you defer updating a part of the UI.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-effect'}>
          <h2 className={inter.className}>
            useEffect <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useEffect</code> is a React Hook that lets you synchronize a component with an external system.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-id'}>
          <h2 className={inter.className}>
            useId <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useId</code> is a React Hook for generating unique IDs that can be passed to accessibility attributes.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-imperative-handle'}>
          <h2 className={inter.className}>
            useImperativeHandle <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useImperativeHandle</code> is a React Hook that lets you customize the handle exposed as a ref.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-insertion-effect'}>
          <h2 className={inter.className}>
            useInsertionEffect* <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useInsertionEffect</code> is a version of useEffect that fires before any DOM mutations.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-layout-effect'}>
          <h2 className={inter.className}>
            useLayoutEffect* <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useLayoutEffect</code> is a version of useEffect that fires before the browser repaints the screen.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-memo'}>
          <h2 className={inter.className}>
            useMemo <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useMemo</code> is a React Hook that lets you cache the result of a calculation between re-renders.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-reducer'}>
          <h2 className={inter.className}>
            useReducer <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useReducer</code> is a React Hook that lets you add a reducer to your component.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-ref'}>
          <h2 className={inter.className}>
            useRef <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useEffect</code> is a React Hook that lets you reference a value that’s not needed for rendering.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-state'}>
          <h2 className={inter.className}>
            useState<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useState</code> is a React Hook that lets you add a state variable to your component.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-sync-external-store'}>
          <h2 className={inter.className}>
            useSyncExternalStore <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useSyncExternalStore</code> is a React Hook that lets you subscribe to an external store.
          </p>
        </Link>

        <Link className={styles.card} href={'/use-transition'}>
          <h2 className={inter.className}>
            useTransition <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <code className={styles.code}>useTransition</code> is a React Hook that lets you update the state without blocking the UI.
          </p>
        </Link>
      </div>
    </main>
  )
}
