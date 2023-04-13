import styles from "../page.module.css";

const Page = () => {
    return (
        <main className={styles.main}>
            <div className={styles.description} style={{ placeContent: "center" }}>
                <p>
                    Hooks Root
                </p>
            </div>
        </main>
    );
};

export default Page;